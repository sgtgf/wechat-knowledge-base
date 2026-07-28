#!/usr/bin/env python3
"""
并行下载知识库所有 .md 文件中的远程图片到本地。
支持多线程并发下载，大幅提速。
"""
import os, re, hashlib, urllib.request, urllib.error, time, sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from tqdm import tqdm

KB_DIR = r"D:\电脑文件\公众号知识库"
IMG_PATTERN = re.compile(r'!\[([^\]]*)\]\((https?://[^)]+)\)')
MAX_RETRIES = 3
RETRY_DELAY = 1
MAX_WORKERS = 20  # 并行线程数（文件级+图片级共用）

def url_to_filename(url: str, idx: int) -> str:
    ext = '.png'
    fmt_match = re.search(r'wx_fmt=(\w+)', url)
    if fmt_match:
        fmt = fmt_match.group(1)
        ext = f'.{fmt}' if fmt != 'jpeg' else '.jpg'
    else:
        path_ext = os.path.splitext(url.split('?')[0])[1]
        if path_ext:
            ext = path_ext
    # 用URL的哈希作为文件名的一部分，避免冲突
    url_hash = hashlib.md5(url.encode()).hexdigest()[:12]
    return f"img_{idx:03d}_{url_hash}{ext}"

def download_one(url: str, save_path: str) -> tuple:
    """下载单张图片，返回 (save_path, success, size)"""
    if os.path.exists(save_path) and os.path.getsize(save_path) > 0:
        return save_path, True, os.path.getsize(save_path)
    for attempt in range(MAX_RETRIES):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            })
            data = urllib.request.urlopen(req, timeout=5).read()
            if len(data) == 0:
                return save_path, False, 0
            os.makedirs(os.path.dirname(save_path), exist_ok=True)
            with open(save_path, 'wb') as f:
                f.write(data)
            return save_path, True, len(data)
        except Exception as e:
            if attempt < MAX_RETRIES - 1:
                time.sleep(RETRY_DELAY)
            else:
                return save_path, False, 0

def process_file(md_path: str) -> dict:
    """处理单个md文件，返回统计信息"""
    result = {"file": md_path, "total": 0, "ok": 0, "fail": 0, "images": []}
    try:
        with open(md_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return result

    matches = list(IMG_PATTERN.finditer(content))
    if not matches:
        return result

    md_dir = os.path.dirname(md_path)
    md_name = os.path.splitext(os.path.basename(md_path))[0]
    img_dir = os.path.join(md_dir, md_name + "_images")
    result["total"] = len(matches)

    # 并行下载所有图片
    tasks = []
    for idx, m in enumerate(matches):
        alt_text = m.group(1)
        url = m.group(2)
        # 过滤掉已经是本地的图片
        if not url.startswith('http'):
            continue
        filename = url_to_filename(url, idx)
        save_path = os.path.join(img_dir, filename)
        tasks.append((url, save_path, m.start(), m.end(), idx))

    with ThreadPoolExecutor(max_workers=min(MAX_WORKERS, 10)) as executor:
        future_map = {}
        for url, save_path, start, end, idx in tasks:
            fut = executor.submit(download_one, url, save_path)
            future_map[fut] = (url, save_path, start, end, idx)

        for fut in as_completed(future_map):
            url, save_path, start, end, idx = future_map[fut]
            try:
                sp, success, size = fut.result()
                if success:
                    result["ok"] += 1
                    # 更新md中的引用（只更新第一次，后面批量写）
                    old_ref = f"]({url})"
                    new_ref = f"]({save_path})"
                    content = content.replace(old_ref, new_ref, 1)
                else:
                    result["fail"] += 1
            except:
                result["fail"] += 1

    # 写回更新后的md内容
    if result["ok"] > 0:
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(content)

    return result

def main():
    print("=" * 60)
    print("[Download] 开始下载公众号图片 (并行模式)")
    print(f"[Download] 文件并发: 50 | 每文件内图片并发: 10 | 超时: 5s")
    print("=" * 60)

    md_files = []
    for root, dirs, files in os.walk(KB_DIR):
        if '.git' in root or '.claude' in root or 'node_modules' in root:
            continue
        for f in files:
            if f.endswith('.md'):
                md_files.append(os.path.join(root, f))

    total_files = len(md_files)
    total_ok = 0
    total_fail = 0
    processed = 0
    has_images = 0

    print(f"共发现 {total_files} 个 .md 文件\n")

    pbar = tqdm(total=total_files, unit="file", ncols=80,
                bar_format="{l_bar}{bar}| {n_fmt}/{total_fmt} [{elapsed}<{remaining}, {rate_fmt}]")

    with ThreadPoolExecutor(max_workers=50) as executor:
        fut_map = {executor.submit(process_file, p): p for p in md_files}
        for fut in as_completed(fut_map):
            path = fut_map[fut]
            processed += 1
            try:
                r = fut.result()
                total_ok += r["ok"]
                total_fail += r["fail"]
                if r["total"] > 0:
                    has_images += 1
                    pbar.set_postfix_str(f"img OK:{total_ok} FAIL:{total_fail} pic:{has_images}")
            except:
                pass
            pbar.update(1)

    pbar.close()

    print(f"\n{'=' * 60}")
    print(f"  ✅ 全部完成!")
    print(f"  📄 扫描文件: {total_files}")
    print(f"  🖼️  含图文章: {has_images}")
    print(f"  ✅ 图片成功: {total_ok} 张")
    print(f"  ❌ 图片失败: {total_fail} 张")
    print(f"{'=' * 60}")

if __name__ == '__main__':
    main()

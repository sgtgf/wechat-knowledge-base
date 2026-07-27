#!/usr/bin/env python3
"""
遍历知识库所有 .md 文件，下载其中的远程图片到本地，
并更新文章引用指向本地路径。
"""

import os
import re
import hashlib
import urllib.request
import urllib.error
import time
import sys

KB_DIR = r"D:\电脑文件\公众号知识库"
IMG_PATTERN = re.compile(r'!\[([^\]]*)\]\((https?://[^)]+)\)')
MAX_RETRIES = 3
RETRY_DELAY = 2

def url_to_filename(url: str, idx: int) -> str:
    """从URL生成稳定的文件名"""
    # 从URL末尾提取扩展名
    ext = '.png'  # 默认
    # 尝试从查询参数中获取格式
    fmt_match = re.search(r'wx_fmt=(\w+)', url)
    if fmt_match:
        fmt = fmt_match.group(1)
        ext = f'.{fmt}' if fmt != 'jpeg' else '.jpg'
    else:
        # 从路径末尾提取
        path = url.split('?')[0]
        if '.' in path.split('/')[-1]:
            ext = '.' + path.split('/')[-1].split('.')[-1]
            if len(ext) > 6:
                ext = '.png'

    # 用URL的hash做文件名，避免重复下载
    url_hash = hashlib.md5(url.encode()).hexdigest()[:12]
    return f"img_{idx:03d}_{url_hash}{ext}"

def download_image(url: str, save_path: str) -> bool:
    """下载图片，带重试"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }

    for attempt in range(MAX_RETRIES):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = resp.read()
                if len(data) < 100:  # 太小的文件可能是错误页
                    print(f"  [!] 文件太小 ({len(data)} bytes)，跳过")
                    return False
                with open(save_path, 'wb') as f:
                    f.write(data)
                print(f"  OK {os.path.basename(save_path)} ({len(data)//1024}KB)")
                return True
        except Exception as e:
            if attempt < MAX_RETRIES - 1:
                print(f"  .. 重试 {attempt+1}/{MAX_RETRIES}: {str(e)[:60]}")
                time.sleep(RETRY_DELAY)
            else:
                print(f"  XX 失败: {str(e)[:80]}")
                return False

def process_md_file(md_path: str) -> tuple:
    """处理单个md文件，返回(本地引用数, 失败数)"""
    rel_path = os.path.relpath(md_path, KB_DIR)

    with open(md_path, 'r', encoding='utf-8') as f:
        content = f.read()

    matches = list(IMG_PATTERN.finditer(content))
    if not matches:
        return (0, 0)

    # 创建图片目录
    md_dir = os.path.dirname(md_path)
    md_name = os.path.splitext(os.path.basename(md_path))[0]
    img_dir = os.path.join(md_dir, f"{md_name}_images")
    os.makedirs(img_dir, exist_ok=True)

    success = 0
    fail = 0
    changes = []

    for idx, match in enumerate(matches):
        alt_text = match.group(1)
        img_url = match.group(2)
        old_ref = match.group(0)

        # 如果已经是本地引用，跳过
        if not img_url.startswith('http'):
            continue

        filename = url_to_filename(img_url, idx)
        save_path = os.path.join(img_dir, filename)

        # 只下载不存在的文件
        if not os.path.exists(save_path):
            if download_image(img_url, save_path):
                success += 1
            else:
                fail += 1
                continue
        else:
            success += 1

        # 生成新的引用（相对路径）
        new_ref = f'![{alt_text}]({os.path.basename(img_dir)}/{filename})'
        changes.append((old_ref, new_ref))

    # 更新文件
    if changes:
        for old_ref, new_ref in changes:
            content = content.replace(old_ref, new_ref, 1)
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  [MD] 更新 {len(changes)} 处引用")

    return (success, fail)

def main():
    total_success = 0
    total_fail = 0
    total_files = 0

    print("=" * 60)
    print("[Download] 开始下载公众号图片到本地")
    print("=" * 60)

    for root, dirs, files in os.walk(KB_DIR):
        # 跳过 .git 和 .claude
        if '.git' in root or '.claude' in root or 'worker' in root:
            continue

        for f in sorted(files):
            if not f.endswith('.md'):
                continue
            if f in ('README.md', 'KNOWLEDGE_MAP.md'):
                continue

            md_path = os.path.join(root, f)
            rel_path = os.path.relpath(md_path, KB_DIR)

            # 检查是否有图片引用
            with open(md_path, 'r', encoding='utf-8') as fh:
                preview = fh.read(500)
            if 'http' not in preview and '![' not in preview:
                # Quick check - might miss some, full check is done in process
                with open(md_path, 'r', encoding='utf-8') as fh:
                    full = fh.read()
                if not IMG_PATTERN.search(full):
                    continue

            print(f"\n[File] [{rel_path}]")
            s, f_ = process_md_file(md_path)
            total_success += s
            total_fail += f_
            total_files += 1

    print("\n" + "=" * 60)
    print(f"完成！处理 {total_files} 个文件")
    print(f"  下载成功: {total_success}")
    print(f"  下载失败: {total_fail}")
    print("=" * 60)

if __name__ == '__main__':
    main()

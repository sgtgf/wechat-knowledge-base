#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""压缩知识库所有图片为zip存档，减少文件数量"""
import os, zipfile, shutil, sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from tqdm import tqdm

KB = r"D:\电脑文件\公众号知识库"

def compress_topic(args):
    """压缩一个主题的图片"""
    topic_dir, topic_name = args
    zip_path = os.path.join(KB, f"{topic_name}_images.zip")
    if os.path.exists(zip_path):
        return topic_name, 0, 0, True  # 已存在跳过

    images = []
    for root, dirs, files in os.walk(topic_dir):
        if root.endswith('_images'):
            for f in files:
                images.append(os.path.join(root, f))

    if not images:
        return topic_name, 0, 0, False

    total_size = sum(os.path.getsize(f) for f in images)

    with zipfile.ZipFile(zip_path + '.tmp', 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as zf:
        for fpath in images:
            arcname = os.path.relpath(fpath, KB)
            zf.write(fpath, arcname)
            os.remove(fpath)  # 边压边删，省临时空间

    os.rename(zip_path + '.tmp', zip_path)

    # 删除空_images目录
    for root, dirs, files in os.walk(topic_dir, topdown=False):
        if root.endswith('_images') and not os.listdir(root):
            os.rmdir(root)

    zip_size = os.path.getsize(zip_path)
    return topic_name, total_size, zip_size, False

def main():
    print("=" * 60)

    # 一次扫描所有主题目录
    topics = []
    for item in sorted(os.listdir(KB)):
        td = os.path.join(KB, item)
        if os.path.isdir(td) and not item.startswith('.') and item != 'worker':
            topics.append((td, item))

    print(f"扫描完成，共 {len(topics)} 个主题目录")

    # 并行压缩
    total_orig = 0
    total_compressed = 0
    total_files = 0
    skipped = 0

    with ThreadPoolExecutor(max_workers=4) as pool:
        futs = {pool.submit(compress_topic, t): t[1] for t in topics}
        for fut in tqdm(as_completed(futs), total=len(futs), desc="压缩进度", unit="topic"):
            name, orig, comp, skip = fut.result()
            if skip:
                skipped += 1
                continue
            if orig > 0:
                total_files += 1
                total_orig += orig
                total_compressed += comp
                ratio = (1 - comp/orig) * 100
                tqdm.write(f"  [{name}] {orig/1024/1024:.0f}MB → {comp/1024/1024:.0f}MB (省{ratio:.0f}%)")

    print(f"\n{'=' * 60}")
    print(f"✅ 完成!")
    print(f"  已压缩: {total_files} 个主题")
    print(f"  已跳过: {skipped} 个（已有zip）")
    if total_orig > 0:
        print(f"  压缩前: {total_orig/1024/1024:.0f} MB")
        print(f"  压缩后: {total_compressed/1024/1024:.0f} MB")
        print(f"  节省:   {(total_orig-total_compressed)/1024/1024:.0f} MB ({(1-total_compressed/total_orig)*100:.0f}%)")
    print(f"{'=' * 60}")

if __name__ == '__main__':
    main()

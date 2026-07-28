#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""清理zip中无信息量的图片（小图标、装饰图、重复图）"""
import os, zipfile, hashlib, shutil, tempfile

KB = r"D:\电脑文件\公众号知识库"

def clean_zip(zip_path):
    """清理单个zip中的无用图片"""
    tmp_zip = zip_path + '.clean'
    removed = 0
    kept = 0
    seen_hashes = {}  # 去重

    with zipfile.ZipFile(zip_path, 'r') as zin:
        with zipfile.ZipFile(tmp_zip, 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as zout:
            for info in zin.infolist():
                data = zin.read(info.filename)
                size = len(data)
                fhash = hashlib.md5(data).hexdigest()

                # 删除条件：
                # 1. < 2KB 的小图标（大概率是装饰图/表情包）
                # 2. 内容完全重复的图
                is_tiny = size < 2048
                is_dup = fhash in seen_hashes

                if is_tiny or is_dup:
                    removed += 1
                    if is_dup:
                        pass  # 跳过重复
                    continue

                seen_hashes[fhash] = info.filename
                zout.writestr(info, data)
                kept += 1

    # 替换原zip
    if removed > 0:
        os.remove(zip_path)
        os.rename(tmp_zip, zip_path)
    else:
        os.remove(tmp_zip)

    return kept, removed

def main():
    total_removed = 0
    total_kept = 0
    total_saved = 0

    for f in sorted(os.listdir(KB)):
        if not f.endswith('_images.zip'):
            continue
        zip_path = os.path.join(KB, f)
        before = os.path.getsize(zip_path)
        kept, removed = clean_zip(zip_path)
        after = os.path.getsize(zip_path)
        saved = before - after
        total_removed += removed
        total_kept += kept
        total_saved += saved
        if removed > 0:
            print(f"  [{f}] 删{removed}张 省{saved/1024:.0f}KB")

    print(f"\n✅ 完成！保留{total_kept}张，删除{total_removed}张，节省{total_saved/1024/1024:.1f}MB")

if __name__ == '__main__':
    main()

# 自建comfyui平台手搓一个工作流


> 原文地址: [https://mp.weixin.qq.com/s/rhmygX2ESOOCEc0UpBgJag](https://mp.weixin.qq.com/s/rhmygX2ESOOCEc0UpBgJag)

硬件配置：THINKBOOK14，独显RTX4050(6g）

操作系统：Windows11

搭建comfyui只适合程序员，其他非专业人士慎重。

先到https://github.com/comfyanonymous/ComfyUI/releases下载压缩包ComfyUI\_windows\_portable\_nvidia.7z，解压缩后删除其中的python\_embeded目录，不用这个内嵌的python包，我的解压目录是D:\\ComfyUI\_windows\_portable\\。

然后到https://www.python.org/downloads/release/python-3119/下载安装包，我下的是Windows installer (64-bit)，我把它安装在:\\Python311，路径越短越好。还要下载一个启动器，https://www.bilibili.com/video/BV1ne4y1V7QU/?ref=aihub.cn

把启动器放在D:\\ComfyUI\_windows\_portable\\ComfyUI目录下。

最后还要下载git for windows:

https://github.com/git-for-windows/git/releases/download/v2.47.0.windows.2/Git-2.47.0.2-64-bit.exe

我安装在d:\\git。

现在以管理员身份打开【命令提示符】，输入：

cd /d D:\\ComfyUI\_windows\_portable\\ComfyUI\\custom\_nodes

进入到此目录下，输入：

git clone https://github.com/ltdrdata/ComfyUI-Manager.git

![](自建comfyui平台手搓一个工作流_images/img_000_8595c7ec9b40.png)

下载ComfyUI-Manager这个重要的插件，下载完成后，会出现一个目录ComfyUI-Manager。  

在D:\\ComfyUI\_windows\_portable\\ComfyUI目录下,双击打开【A绘世启动器】，

![](自建comfyui平台手搓一个工作流_images/img_001_580a8471df28.png)

点左边导航栏最下面的【设置】，滚动到最下边，分别选择D:\\Python311\\python.exe和D:\\Git\\bin\\git.exe

然后点【控制台】，点【一键启动】

![](自建comfyui平台手搓一个工作流_images/img_002_38af9e4e175b.png)

一切正常的话，会自动打开浏览器，网址为http://127.0.0.1:8188/

下面我们去这里：https://www.liblib.art/modelinfo/538b06f4f0274edb88ce56671efc0dad?from=search&versionUuid=c5bb51bf00374479ada4d6ef257da4be![](自建comfyui平台手搓一个工作流_images/img_003_01e06377db56.png)

点【下载】把工作流保存到本地，扩展名是json。  

回到浏览器，网页为http://127.0.0.1:8188/  

![](自建comfyui平台手搓一个工作流_images/img_004_eeedccacc0b1.png)

点load打开刚才下载的json文件，这时会出现一些红色方框，说明缺少一些插件，点manager：  

![](自建comfyui平台手搓一个工作流_images/img_005_cda4355c9192.png)

点中间第二个按钮【install missing...】，会出现缺少的插件列表，逐个点击安装就行了，安装完成后，点【Restart】。  

**最最关键的步骤来了：**  

安装python的必要库，先下载对应windows版本的cuda sdk

https://developer.nvidia.com/cuda-11-8-0-download-archive?target\_os=Windows&target\_arch=x86\_64&target\_version=11&target\_type=exe\_local

我安装在D:\\NVIDIA GPU Computing Toolkit

打开系统信息，点【高级系统设置】

![](自建comfyui平台手搓一个工作流_images/img_006_12e8a29fdc39.png)

点【环境变量】  

![](自建comfyui平台手搓一个工作流_images/img_007_4f8a96239503.png)

在系统变量里添加一个CUDA\_HOME  

![](自建comfyui平台手搓一个工作流_images/img_008_7258292e05ac.png)

接下来要安装这几个重要的python包，打开命令行提示符  

输入：  

pip install torch==2.4.0+cu118 torchvision==0.19.0+cu118 torchaudio==2.4.0+cu118 xformers==0.0.27.post2+cu118 --index-url https://download.pytorch.org/whl/cu118

如果安装成功，就不会有红字提示。输入：

python -c "import torch;import torchvision;print(torch.\_\_version\_\_);print(torchvision.\_\_version\_\_);print(torch.cuda.is\_available())"

![](自建comfyui平台手搓一个工作流_images/img_009_3897525c8e5d.png)

出现后面这三行，就恭喜你啦！  

最后还要安装下面两个关键包  

pip install onnxruntime-gpu==1.18.0

pip install inference-gpu==0.24.0

对于节点中用到的模型，可以在下面的列表中去下载：  

https://huggingface.co/comfyanonymous/ControlNet-v1-1\_fp16\_safetensors/resolve/main/control\_v11p\_sd15\_lineart\_fp16.safetensors?download=true

https://huggingface.co/comfyanonymous/ControlNet-v1-1\_fp16\_safetensors/resolve/main/control\_v11f1p\_sd15\_depth\_fp16.safetensors?download=true

https://huggingface.co/comfyanonymous/ControlNet-v1-1\_fp16\_safetensors/resolve/main/control\_v11p\_sd15\_openpose\_fp16.safetensors?download=true

https://civitai-delivery-worker-prod.5ac0637cfd0766c97916cefa3764fbdf.r2.cloudflarestorage.com/model/365375/awpaintingV14.S7nL.safetensors?X-Amz-Expires=86400&response-content-disposition=attachment%3B%20filename%3D%22awpainting\_v14.safetensors%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e01358d793ad6966166af8b3064953ad/20241029/us-east-1/s3/aws4\_request&X-Amz-Date=20241029T072428Z&X-Amz-SignedHeaders=host&X-Amz-Signature=25c0bc7bd62582d1e68a5adc023d4b7ded724d38c2fba3116f360cf4e7d90d7a

https://huggingface.co/TencentARC/T2I-Adapter/resolve/main/models/t2iadapter\_zoedepth\_sd15v1.pth?download=true

https://huggingface.co/gemasai/4x\_NMKD-Superscale-SP\_178000\_G/resolve/main/4x\_NMKD-Superscale-SP\_178000\_G.pth?download=true

https://huggingface.co/lllyasviel/ControlNet-v1-1/resolve/main/control\_v11p\_sd15\_canny.pth?download=true

https://huggingface.co/SG161222/RealVisXL\_V5.0/resolve/main/RealVisXL\_V5.0\_fp16.safetensors?download=true

https://civitai-delivery-worker-prod.5ac0637cfd0766c97916cefa3764fbdf.r2.cloudflarestorage.com/model/1559796/ip20DESIGN20203D.bVXx.safetensors?X-Amz-Expires=86400&response-content-disposition=attachment%3B%20filename%3D%22ipDESIGN3D\_v31.safetensors%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e01358d793ad6966166af8b3064953ad/20241030/us-east-1/s3/aws4\_request&X-Amz-Date=20241030T020148Z&X-Amz-SignedHeaders=host&X-Amz-Signature=f22e64ada46ccbc83496762f1c95d0cd8ff1d759ef2aa9ac1c27e6d133eed34a

https://civitai-delivery-worker-prod.5ac0637cfd0766c97916cefa3764fbdf.r2.cloudflarestorage.com/266262/model/blindboxV1Mix.vlCr.safetensors?X-Amz-Expires=86400&response-content-disposition=attachment%3B%20filename%3D%22blindbox\_v1\_mix.safetensors%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e01358d793ad6966166af8b3064953ad/20241030/us-east-1/s3/aws4\_request&X-Amz-Date=20241030T020349Z&X-Amz-SignedHeaders=host&X-Amz-Signature=4ac7129dc53008f1a0787f96b51283663a08801855218a440670bf996879449a

https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.safetensors?download=true

https://huggingface.co/Ggo/control\_v11p\_sd15\_depth\_anything/resolve/main/control\_v11p\_sd15\_depth\_anything.safetensors?download=true

https://cdn-lfs-us-1.hf.co/repos/b0/28/b02866cf9c0b326d36b078f1a628fbf7c6e4b5c9829ef9d11035c8d202c20636/830f6389ce968dbb99ac215d8f6009d09bd820c5369e49cdde2e88bbd6616711?response-content-disposition=attachment%3B+filename\*%3DUTF-8%27%27control\_v11f1e\_sd15\_tile.safetensors%3B+filename%3D%22control\_v11f1e\_sd15\_tile.safetensors%22%3B&Expires=1730515938&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDUxNTkzOH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zL2IwLzI4L2IwMjg2NmNmOWMwYjMyNmQzNmIwNzhmMWE2MjhmYmY3YzZlNGI1Yzk4MjllZjlkMTEwMzVjOGQyMDJjMjA2MzYvODMwZjYzODljZTk2OGRiYjk5YWMyMTVkOGY2MDA5ZDA5YmQ4MjBjNTM2OWU0OWNkZGUyZTg4YmJkNjYxNjcxMT9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSoifV19&Signature=NeCmmFt-v7QQcC-gFSp2dvuUW5t0AYqd5IhmS-mvVNwL96QAOJHF-d6T~SF7gz7En1HaAATBkBAiZU1YgdH6gBdNU3EMMChU9a4vq2Z9XuQPqgo0W58AprbeRNkv9KVpzZX0t-ltbydXg~NPiSquUWIPv-TWDGjg~~ofLJ8y-fl5z8HXllKcJqiQ378qvw-2-lfBjA3VF~udxr0NzuHYtcGYEMASojBX1b8PaSZJxOBGv9d49IX4YLQipfON6nMGXJreFDbWd7NAUrzpS9ZBsUr8UkZmsu5-rA8SwYM8iGPXGa9QQ85UsJiPF0O0OpvMEZkuKwjt1Ve4ZpBxND2ZCg\_\_&Key-Pair-Id=K24J24Z295AEI9

https://huggingface.co/Kijai/flux-fp8/resolve/main/flux1-dev-fp8.safetensors?download=true

https://cdn-lfs-us-1.hf.co/repos/4d/2f/4d2f5fe3c454cbd41959d369040541eb8f3efbe73b71d2e4a2cd7334a7743733/660c6f5b1abae9dc498ac2d21e1347d2abdb0cf6c0c0c8576cd796491d9a6cdd?response-content-disposition=attachment%3B+filename\*%3DUTF-8%27%27clip\_l.safetensors%3B+filename%3D%22clip\_l.safetensors%22%3B&Expires=1730525887&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDUyNTg4N319LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zLzRkLzJmLzRkMmY1ZmUzYzQ1NGNiZDQxOTU5ZDM2OTA0MDU0MWViOGYzZWZiZTczYjcxZDJlNGEyY2Q3MzM0YTc3NDM3MzMvNjYwYzZmNWIxYWJhZTlkYzQ5OGFjMmQyMWUxMzQ3ZDJhYmRiMGNmNmMwYzBjODU3NmNkNzk2NDkxZDlhNmNkZD9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSoifV19&Signature=srwjlIgGiWy9pqH~DQhLL6jpab-R89JU2adffA4DxI2qitKBxvHhS-AvuXpi6k0gzZNvTvtciQdeRszn23vpWDUpk2BJNR1EjewSMiUiiJSn95ULdEcU0dP52nqKTbxRQ~~aRyHzA2kQilFBMSVTAQ40I8aTt~8PlbPyaAQPzcmOA1w5FC-GDhEeNQcxWZCjfSs~Gnd4FrnV~K4iwEGGXW5bjBdU~azMmt6Z15U13W5vG6yFHyk25I7tRU4GmlvWteltbUf~3QdrDns-Phyzt21fA-A30twAyMAVtxiyXfhSBl0G8Wdf4KeRyyrY5EMWHZfrSTwjnxMxu0UMeKnE1A\_\_&Key-Pair-Id=K24J24Z295AEI9

https://huggingface.co/calcuis/sd3.5-large-gguf/resolve/main/clip\_g.safetensors?download=true

https://cdn-lfs-us-1.hf.co/repos/36/d8/36d892bce6ef68ba8bafc12acdacc3eb926082194751d39b449cdc6a9b779168/7727411b7449737a010e7f5fcb7c28a5d2d4d93fa89370b92dfb05ee225259ff?response-content-disposition=attachment%3B+filename\*%3DUTF-8%27%27model.safetensors%3B+filename%3D%22model.safetensors%22%3B&Expires=1730560425&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDU2MDQyNX19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zLzM2L2Q4LzM2ZDg5MmJjZTZlZjY4YmE4YmFmYzEyYWNkYWNjM2ViOTI2MDgyMTk0NzUxZDM5YjQ0OWNkYzZhOWI3NzkxNjgvNzcyNzQxMWI3NDQ5NzM3YTAxMGU3ZjVmY2I3YzI4YTVkMmQ0ZDkzZmE4OTM3MGI5MmRmYjA1ZWUyMjUyNTlmZj9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSoifV19&Signature=cfv6tMZUW6og1qEiwXi3ocH8D9bP24GdByvxvreG~tbbceTYms3C1A1rX~95jHZGjuUWkPIF4AAoqKuE3vH64sQNMVQ~QmeblmNTC~Ir3vHKD1bQyIgoRXnvwRTFrnRvXUrqdUlqM3iDRYJdqP2nKTyFodU8L7FDUKxKiWmY7s~7ZoRR0ZgJjPdg3KqQlN0IkPQsk8ESNNa-QqtQCUwtiHuMN07GcpSE6cUIssFLAf7CLg2UhrgXmWdqpx3lw63KvoFyeJzIKd~t55By6F13PKE1RpHq4-vgOP3UYrGh0cXk0uePXpE4XZ1liThYzqKq8Nw-Se3sbv9ixp-Hv2pxNA\_\_&Key-Pair-Id=K24J24Z295AEI9

https://cdn-lfs.hf.co/repos/a2/11/a211ef997fa284ad67caa591ca931692f9a8a018910b18a04d9e6dff396f02e3/25a948c16078b0f08e236bda51a385d855ef4c153598947c28c0d47ed94bb746?response-content-disposition=attachment%3B+filename\*%3DUTF-8%27%27body\_pose\_model.pth%3B+filename%3D%22body\_pose\_model.pth%22%3B&Expires=1730624049&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDYyNDA0OX19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5oZi5jby9yZXBvcy9hMi8xMS9hMjExZWY5OTdmYTI4NGFkNjdjYWE1OTFjYTkzMTY5MmY5YThhMDE4OTEwYjE4YTA0ZDllNmRmZjM5NmYwMmUzLzI1YTk0OGMxNjA3OGIwZjA4ZTIzNmJkYTUxYTM4NWQ4NTVlZjRjMTUzNTk4OTQ3YzI4YzBkNDdlZDk0YmI3NDY~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj0qIn1dfQ\_\_&Signature=A9G6QLeR6KOK055S7dWMPLegEUxdcB9Vgy3COvrLOvFzRg595unMoEmOMN~BDq7yp~lphSQSHHTHx23pPM8XnCkOEcnws0ozmgi4p6jkVMbVtHehYqEpj~lyrUsSpdURCsmMLtXtAi75FD52owfQlLCkJfVSLtynYW2rXIzCONt1mIwoidkAKKRodaqtDPJzqgV-bk-27na6OOZMMLv6PC8Z~cDGPr99wlKciro4fCYRO3Nv6ENWYBtRzXIFg-uxPHPX118UbDGQ8vGc2uvcxMETBvQ2HvTIVM1BUb2yE4BXuojxtck20Je7GkmZQxcvGKfJHnaQAWuhnNiOpXzfig\_\_&Key-Pair-Id=K3RPWS32NSSJCE

https://huggingface.co/lllyasviel/Annotators/resolve/main/facenet.pth?download=true

https://huggingface.co/lllyasviel/Annotators/resolve/main/hand\_pose\_model.pth?download=true

https://huggingface.co/lllyasviel/Annotators/resolve/main/clip\_g.pth?download=true

https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter\_sd15.safetensors

https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter\_sd15\_light\_v11.bin

https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter-plus\_sd15.safetensors

https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter-plus-face\_sd15.safetensors

https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter-full-face\_sd15.safetensors

https://huggingface.co/h94/IP-Adapter/resolve/main/models/ip-adapter\_sd15\_vit-G.safetensors

https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl\_models/ip-adapter\_sdxl\_vit-h.safetensors

https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl\_models/ip-adapter-plus\_sdxl\_vit-h.safetensors

https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl\_models/ip-adapter-plus-face\_sdxl\_vit-h.safetensors

https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl\_models/ip-adapter\_sdxl.safetensors

https://huggingface.co/h94/IP-Adapter/resolve/main/models/image\_encoder/model.safetensors

https://huggingface.co/h94/IP-Adapter/resolve/main/sdxl\_models/image\_encoder/model.safetensors

https://huggingface.co/Kwai-Kolors/Kolors-IP-Adapter-Plus/resolve/main/image\_encoder/pytorch\_model.bin

https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid\_sd15\_lora.safetensors

https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-plusv2\_sd15\_lora.safetensors

https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid\_sdxl\_lora.safetensors

https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-plusv2\_sdxl\_lora.safetensors

https://huggingface.co/lllyasviel/fav\_models/resolve/main/fav/realisticVisionV51\_v51VAE.safetensors?download=true

https://civitai-delivery-worker-prod.5ac0637cfd0766c97916cefa3764fbdf.r2.cloudflarestorage.com/1501222/model/disney20pixar20cartoon.A3xw.safetensors?X-Amz-Expires=86400&response-content-disposition=attachment%3B%20filename%3D%22disneyPixarCartoon\_v10.safetensors%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=e01358d793ad6966166af8b3064953ad/20241031/us-east-1/s3/aws4\_request&X-Amz-Date=20241031T125652Z&X-Amz-SignedHeaders=host&X-Amz-Signature=83a6feacdf77d7e9a5f97376dcdcbc4570ebcd6375b9ac3f95a0927146169a0c

https://cdn-lfs.hf.co/repos/bb/99/bb99ef280886781cdda00edf442889f2e7aa696efb4ed0651a26871423fd621b/7860ae79de6c89a3c1eb72ae9a2756c0ccfbe04b7791bb5880afabd97855a411?response-content-disposition=attachment%3B+filename\*%3DUTF-8%27%27yolox\_l.onnx%3B+filename%3D%22yolox\_l.onnx%22%3B&Expires=1730671854&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDY3MTg1NH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5oZi5jby9yZXBvcy9iYi85OS9iYjk5ZWYyODA4ODY3ODFjZGRhMDBlZGY0NDI4ODlmMmU3YWE2OTZlZmI0ZWQwNjUxYTI2ODcxNDIzZmQ2MjFiLzc4NjBhZTc5ZGU2Yzg5YTNjMWViNzJhZTlhMjc1NmMwY2NmYmUwNGI3NzkxYmI1ODgwYWZhYmQ5Nzg1NWE0MTE~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj0qIn1dfQ\_\_&Signature=bagA4HoiKZ8Sg6KpPoz~vULrCr4rWGT3O2Nzj2rLO68aAR9wkRAEGcTuILJqmWnVSJD-Y4gGiYrFO33hnjbPXSoSNBCfM6d64EzvlCk92gYhiuYtJEAkqpEOijFvnBxFeL9cOTjcUR0fVNMYkCd2Wx7pMm4Nfm~lT7qKjitxKyTppHWAgu3V3oRRggUhK8HoaaQ-AsLb75naCFQe6Ufw59ElLXhikZ5sxh0zUgy569tq6er7ow~097TVq1RkmK4mFZu7ndoOb-iK51SykYfwAMWhX~mJXBdS2NclieyaDbvB~tMB1kCO8FTzt70AiaZpotkloZ-UtwwcYmqCAhqDKw\_\_&Key-Pair-Id=K3RPWS32NSSJCE

https://huggingface.co/hr16/DWPose-TorchScript-BatchSize5/resolve/main/dw-ll\_ucoco\_384\_bs5.torchscript.pt?download=true

https://huggingface.co/lllyasviel/Annotators/resolve/main/ZoeD\_M12\_N.pt?download=true

按照上面的配置都做完后，就可生图了  

![](自建comfyui平台手搓一个工作流_images/img_010_92151cfad5e1.png)

![](自建comfyui平台手搓一个工作流_images/img_011_9c04066a9769.png)

效果是不是很棒，喜欢的小伙伴快下载收藏！
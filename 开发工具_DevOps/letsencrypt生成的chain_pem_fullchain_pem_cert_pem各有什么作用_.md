# letsencrypt生成的chain.pem,fullchain.pem,cert.pem各有什么作用?


> 原文地址: [https://mp.weixin.qq.com/s/dWt734nGVsridTkxTHBv7A](https://mp.weixin.qq.com/s/dWt734nGVsridTkxTHBv7A)

付费内容 · 1 元

Let's Encrypt证书文件详解：cert.pem、chain.pem和fullchain.pem的区别与使用场景。privkey.pem是私钥文件，cert.pem包含域名证书，chain.pem是中间证书链，fullchain.pem则是cert.pem和chain.pem的组合。Nginx、stunnel等多数服务要求使用fullchain.pem，而旧版Apache需分开指定cert.pem和chain.pem。chain.pem在特殊场景（如Java Keystore）有单独用途。

本文为付费文章，完整内容需购买后查看
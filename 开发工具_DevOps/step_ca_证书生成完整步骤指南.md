# step-ca 证书生成完整步骤指南


> 原文地址: [https://mp.weixin.qq.com/s/zKLInPzYy9wMoz3K8ZI5FA](https://mp.weixin.qq.com/s/zKLInPzYy9wMoz3K8ZI5FA)

付费内容 · 1 元

摘要： step-ca是Smallstep开源的企业级证书颁发机构，支持自动化证书管理（签发、续期、吊销）。核心流程包括：CA初始化（根/中间CA分离）、令牌授权（JWK/OIDC/ACME）、证书生成（默认24小时短寿命）及双向认证（mTLS）。支持灵活配置证书有效期（1小时至1年），提供systemd/cron/daemon三种自动化续期方案，并集成K8s cert-manager等生态工具。安全特性包括零信任架构、指纹验证和硬件密钥保护（HSM/TPM）。

本文为付费文章，完整内容需购买后查看
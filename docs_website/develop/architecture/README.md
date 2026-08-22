---
title: 架构设计
icon: mdi:sitemap
index: true
collapsed: false
dir:
  order: 4
---

# 架构设计

本栏目描述 Bugaoshan 当前代码如何工作，是"当前实现"的权威说明，必须随实现变更同步更新。设计取舍与长期约束见[架构决策](../decisions/)。

| 文档 | 对应 ADR | 范围 | 状态 |
| --- | --- | --- | --- |
| [通知 WebView 架构](./notice-webview.md) | [ADR-0001](../decisions/0001-use-webview-and-js-injection-for-notices.md) | 三类通知来源、JS bridge、附件下载和平台边界 | 当前实现 |
| [认证架构](./authentication.md) | [ADR-0002](../decisions/0002-separate-subsystem-authentication.md) | SCU 根认证、子系统认证、重试、会话隔离和 DI | 当前实现 |
| [Linux 分发架构](./linux-distribution.md) | [ADR-0004](../decisions/0004-use-distribution-wpe-on-linux.md) | GitHub tar.gz、WPE 边界、Flatpak、AUR 和 Debian 状态 | 当前实现 |

::: tip 维护规则
- 架构文档与代码冲突时以代码为准，并在同一变更中修正文档。
- 文档使用仓库相对链接，不写本机绝对路径或易失效的代码行号。
:::

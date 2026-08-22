---
title: 用户手册
icon: mdi:book-open-page-variant
dir:
  order: 1
---

# 用户手册

## 项目简介

**不高山上**（Bugaoshan）是由 **The-Brotherhood-of-SCU** 团队开发的一款面向四川大学学生的校园助手 App。

"不高山"是江安校区的一处标志性地标，App 以此命名，寓意扎根校园、服务同学。

## 主要功能

不高山上把川大学生的校园日常服务聚合到一个 App 里，覆盖学习、生活与信息查询。

### 学习相关

- **课表管理** — 从教务处等多来源导入课表，清晰掌握每日课程安排，还有课表小组件方便查看
- **课表导出** — 导出课表为 ICS 日历文件，一键导入到系统日历，也可复制到剪切板
- **成绩统计** — 查看个人成绩，支持自定义统计与通过率分析，直观了解学业情况
- **方案修读情况查询** — 查询个人修读的方案，了解学习进度
- **培养方案** — 查询各年级学院的培养方案详情
- **考表查询** — 查询个人考试信息，了解考试安排
- **班级课表查询** — 查询各个年级和班级的课表，方便查看班级课程安排

### 校园生活

- **第二课堂** — 查看、参与和预约第二课堂活动
- **体测查询** — 查询个人体测记录，了解体测结果
- **空闲教室查询** — 实时查询校园内各楼栋的空闲教室情况，方便自习选座
- **校园网设备查询** — 查看和下线当前账号在线的校园网设备
- **余额查询** — 查询校园卡、网费、寝室电费及空调余额，支持历史趋势分析
- **校历查询** — 查询校园的校历，了解放假安排
- **通知公告、附件下载** — 查看教务处、党委学工部、青春川大通知公告以及下载附件
- **志愿四川** — 志愿四川查询和报名

### 个性化

- **个性化设置** — 主题颜色、课程表样式、字体、应用图标、动画时长等自定义选项

::: tip 持续迭代
更多便捷功能正在路上，更多校园实用工具即将上线。
:::

## 下载与安装

前往 [Release 页面](https://github.com/The-Brotherhood-of-SCU/Bugaoshan/releases/latest) 下载最新版本。

::: tip 邀测
**iOS 与鸿蒙版本正在邀测中**，欢迎加入官方 QQ 群（1102483776）参与测试。
:::

### 支持平台

不高山上基于 Flutter 开发，支持以下平台：

- Linux
- Android
- Windows
- macOS

### 自行部署

各平台的具体构建与运行要求，请参阅[开发指南](../develop/guide/getting-started.md)。

### 当前版本更新日志

以下是最近一次发布的功能更新与修复。完整的历史版本请见[更新日志](../changelog/)。

::: details 详情
<!-- @include: ../changelog/_latest.md -->
:::

## 遇见问题？

**对于问题的修复一般会以新版本的形式发布，因此，当您遇到问题时，请先确认您是否正在使用最新版本。**

**基于同样的原因，我们只受理最新版本的问题。**

### 日志保存

日志是问题修复的关键所在。您可以在 不高山上/Bugaoshan App中打开**我的-关于-开发者页面-查看认证日志**，在右上角点击下载键保存。

### 环境信息保存

提供环境信息可以帮助我们更快定位问题。您可以在 不高山上/Bugaoshan App中打开**我的-关于-开发者页面-环境信息**，点击右上角复制。

### 问题反馈

我们提供了以下两种反馈问题的渠道：

- 不高山上/Bugaoshan 官方QQ群
- GitHub Issue页（参照[Issue规范](../develop/guide/contribution-guide.html#issue-%E8%A7%84%E8%8C%83)）

## 致谢

### 开源库

不高山上基于以下优秀的开源项目构建，感谢每一位开源作者的无私贡献。完整依赖列表及对应协议请参阅 [pubspec.yaml](https://github.com/The-Brotherhood-of-SCU/Bugaoshan/blob/main/pubspec.yaml)。

::: details 详情

- [Flutter](https://flutter.dev) — 跨平台 UI 框架
- [get_it](https://pub.dev/packages/get_it) / [injectable](https://pub.dev/packages/injectable) — 依赖注入
- [http](https://pub.dev/packages/http) — 网络请求
- [flutter_inappwebview](https://github.com/The-Brotherhood-of-SCU/flutter_inappwebview) — WebView 内核
- [sqflite](https://pub.dev/packages/sqflite) / [sqflite_common_ffi](https://pub.dev/packages/sqflite_common_ffi) — 本地数据库
- [flutter_secure_storage](https://pub.dev/packages/flutter_secure_storage) / [shared_preferences](https://pub.dev/packages/shared_preferences) — 本地存储
- [dart_sm](https://pub.dev/packages/dart_sm) — 国密算法（SM2/SM3/SM4）
- [scu_ocr_lite](https://github.com/The-Brotherhood-of-SCU/scu_ocr_lite_dart) — 验证码 OCR 识别
- [fl_chart](https://pub.dev/packages/fl_chart) — 图表绘制
- [photo_view](https://pub.dev/packages/photo_view) — 图片查看
- [file_picker](https://pub.dev/packages/file_picker) / [image_picker](https://pub.dev/packages/image_picker) — 文件与图片选择
- [share_plus](https://pub.dev/packages/share_plus) / [gal](https://pub.dev/packages/gal) / [open_filex](https://pub.dev/packages/open_filex) — 分享、相册与文件打开
- [url_launcher](https://pub.dev/packages/url_launcher) — 打开外部链接
- [intl](https://pub.dev/packages/intl) / [flutter_localizations](https://docs.flutter.dev/ui/accessibility-and-localization/internationalization) — 国际化
- [package_info_plus](https://pub.dev/packages/package_info_plus) / [device_info_plus](https://pub.dev/packages/device_info_plus) — 应用与设备信息
- [path_provider](https://pub.dev/packages/path_provider) / [path](https://pub.dev/packages/path) — 路径工具
- [crypto](https://pub.dev/packages/crypto) / [archive](https://pub.dev/packages/archive) — 加密与压缩
- [google_fonts](https://pub.dev/packages/google_fonts) / [flutter_colorpicker](https://pub.dev/packages/flutter_colorpicker) — 字体与颜色
- [flutter_markdown_plus](https://pub.dev/packages/flutter_markdown_plus) — Markdown 渲染
- [window_manager](https://pub.dev/packages/window_manager) / [screen_retriever](https://pub.dev/packages/screen_retriever) / [system_theme](https://pub.dev/packages/system_theme) / [os_type](https://pub.dev/packages/os_type) — 桌面平台支持
- [tyme](https://pub.dev/packages/tyme) — 日历与时间
- [json_annotation](https://pub.dev/packages/json_annotation) — JSON 序列化
- [async](https://pub.dev/packages/async) / [flutter_app_group_directory](https://pub.dev/packages/flutter_app_group_directory) — 异步工具与 App Group 支持

:::

### 贡献者

感谢所有为 **不高山上 / Bugaoshan** 做出贡献的开发者与社区成员！

[![Contributors](https://contrib.rocks/image?repo=The-Brotherhood-of-SCU/Bugaoshan)](https://github.com/The-Brotherhood-of-SCU/Bugaoshan/graphs/contributors)

## 声明

本应用为非官方第三方应用，与四川大学不存在隶属、授权或认可关系。

本项目基于 [AGPL-3.0](https://github.com/The-Brotherhood-of-SCU/Bugaoshan/blob/main/LICENSE) 协议开源。使用本软件前请阅读 [EULA](https://github.com/The-Brotherhood-of-SCU/Bugaoshan/blob/main/assets/eula.md)。

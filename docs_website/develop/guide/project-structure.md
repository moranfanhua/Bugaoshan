---
order: 1
icon: mdi:folder-tree
---

# 项目结构与技术栈

## 目录结构

```
lib/
├── injection/            # 依赖注入（GetIt + Injectable）
├── l10n/                 # 国际化（ARB 文件及生成代码）
├── models/               # 数据模型
├── pages/                # 页面
├── providers/            # 状态管理
├── services/             # 业务逻辑与服务层
├── utils/                # 工具类与常量
├── widgets/              # 可复用 UI 组件
├── app.dart              # App 配置与主题
└── main.dart             # 入口
```

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 框架 | [Flutter](https://flutter.dev) |
| 状态管理 | Provider / ChangeNotifier |
| 依赖注入 | [GetIt](https://pub.dev/packages/get_it) + [Injectable](https://pub.dev/packages/injectable) |
| 网络请求 | [Dio](https://pub.dev/packages/dio) + Cookie Manager |
| 本地存储 | [SQLite](https://pub.dev/packages/sqflite)、[SharedPreferences](https://pub.dev/packages/shared_preferences) |
| 国际化 | Flutter `flutter_localizations` |
| 国密算法 | [dart_sm](https://pub.dev/packages/dart_sm)（SM2/SM3/SM4） |
| OCR | [scu_ocr_lite](https://github.com/The-Brotherhood-of-SCU/scu_ocr_lite_dart)（纯 Dart 实现） |

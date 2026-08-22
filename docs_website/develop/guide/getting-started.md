---
order: 2
icon: mdi:rocket-launch-outline
---

# 环境与构建

## 环境要求

- [Flutter SDK](https://flutter.dev/docs/get-started/install) >= 3.44（Dart SDK 3.10+）
- [Dart SDK](https://dart.dev/get-dart) >= 3.10.4
- [Nuget CLI](https://learn.microsoft.com/en-us/nuget/install-nuget-client-tools?tabs=windows#nugetexe-cli) —— `flutter_inappwebview` 的 Windows 目标所需
- Linux 构建需要 GTK 3、WPE WebKit 2.0、WPEBackend-fdo、libwpe、libsecret、libepoxy 和 Wayland 开发包。Linux 发布包动态链接这些系统库，不包含 WPE WebKit 的副本。

## 安装运行

```bash
# 克隆仓库
git clone git@github.com:The-Brotherhood-of-SCU/Bugaoshan.git
# 或
git clone https://github.com/The-Brotherhood-of-SCU/Bugaoshan.git

cd Bugaoshan
```

::: warning 设置镜像源
安装依赖前建议先设置国内镜像源，否则 `pubspec.lock` 会变国际源，导致工作区产生不必要的 diff。

持久化设置：

```bash
# Windows（管理员 PowerShell）
setx PUB_HOSTED_URL "https://pub.flutter-io.cn" /M
setx FLUTTER_STORAGE_BASE_URL "https://storage.flutter-io.cn" /M

# Linux / macOS（添加到 shell 配置文件 ~/.bashrc, ~/.zshrc 等）
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```
:::

```bash
# 安装依赖（已设镜像则直接执行）
flutter pub get

# 运行代码生成（DI & 国际化）
flutter pub run build_runner build --delete-conflicting-outputs

# 运行 App
flutter run
```

## Pre-commit Hook

项目内置了 pre-commit hook，会在提交时自动对暂存的 `.dart` 文件执行 `dart format`。

克隆仓库后，将 hook 链接或复制到 `.git/hooks/`：

```bash
# Linux / macOS
ln -sf .githooks/pre-commit .git/hooks/pre-commit

# Windows (Git Bash)
cp .githooks/pre-commit .git/hooks/pre-commit
```

## iOS Profile 真机安装

需要以 Profile 模式在已连接的 iPhone 上验证时，使用仓库脚本：

```bash
tool/install_ios_profile.sh <device>
```

`<device>` 可以是 `xcrun devicectl list devices` 显示的设备标识、UDID 或设备名。若已经完成 Profile 构建，可用 `--no-build` 复用现有产物。

::: warning 注意事项
请不要直接对正在运行的 App 反复执行 `devicectl device install app`：iOS 可能保留指向旧安装路径的 Runner 进程，表现为安装成功但启动后白屏。若启动在 15 秒内没有完成，脚本会停止等待并提示解锁或重启设备。
:::

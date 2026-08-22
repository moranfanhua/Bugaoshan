---
order: 5
icon: mdi:file-document-edit-outline
---

# 文档撰写指南

本指南面向向本文档站投稿的开发者，介绍文档的组织方式、frontmatter 约定与写作规范。

::: tip
本文档站基于 [VuePress 2](https://vuepress.vuejs.org/) 构建，使用 [vuepress-theme-plume](https://theme-plume.vuejs.press/) 主题。更完整的功能说明见[主题官方文档](https://theme-plume.vuejs.press/)。
:::

## 文档组织

文档站内容放在 `docs_website/` 目录下，顶层按读者划分：

- `manual/` — 用户文档：面向 App 使用者，介绍功能与下载。
- `changelog/` — 更新日志：面向 App 使用者，记录版本更新内容。
- `develop/` — 开发文档：面向贡献者，介绍环境、架构与决策。

`develop/` 下进一步分三个子栏目：

| 子栏目 | 内容 | 更新时机 |
| --- | --- | --- |
| `guide/` | 开发指南：环境构建、项目结构、贡献流程、本指南 | 随开发指引变化 |
| `architecture/` | 架构设计：当前实现的权威说明 | 随实现变更同步更新 |
| `decisions/` | 架构决策：ADR 长期约束 | 接受新决策时追加 |

新增文档前，先判断它属于"用户文档""开发指南""当前实现"还是"设计决策"，避免多处维护同一事实。

## Frontmatter 与自动导航

导航栏和侧边栏由构建脚本自动扫描目录生成，**不需要手动维护导航配置**。脚本读取每个 Markdown 文件的 frontmatter 来决定排序、标题与图标。

常用字段：

| 字段 | 适用 | 含义 |
| --- | --- | --- |
| `order` | 文件 | 在侧边栏中的排序，数字越小越靠前，缺省排最后 |
| `dir.order` | 目录 | 目录在导航栏/侧边栏中的排序 |
| `title` | 文件/目录 | 显示的标题，缺省取一级标题，再缺省取文件名 |
| `icon` | 文件/目录 | 图标（Iconify 格式，如 `mdi:github`） |
| `index` | 目录 | `false` 时目录标题不可点击（不生成链接），默认 `true` |
| `collapsed` | 目录 | `false` 时默认展开，默认 `true`（折叠） |

示例：

```markdown
---
title: 认证架构
icon: mdi:shield-key-outline
order: 2
---
```

图标从 [Iconify](https://icon-sets.iconify.design/) 选取，复制其关键字即可。

## Markdown 写作

### 容器与提示

用容器强调内容：

```markdown
::: tip 提示
这是一个提示
:::

::: warning 注意
这是一个警告
:::

::: danger 危险
这是一个危险提示
:::

::: details 详情
点击展开的细节
:::
```

::: tip 提示
这是一个提示
:::

::: warning 注意
这是一个警告
:::

::: danger 危险
这是一个危险提示
:::

::: details 详情
点击展开的细节
:::

支持的类型：`tip`、`note`、`info`、`warning`、`danger`、`details`。嵌套容器时父级比子级多写一个冒号 `:`。

### 图标

文档正文中可使用 `<Icon />` 组件：

```markdown
<Icon name="mdi:github" size="1.5em" />
```

<Icon name="mdi:github" size="1.5em" />

### 图表

架构文档推荐用 mermaid 图表达依赖与流程，使用 `mermaid` 语言围栏即可渲染（已在站点配置中启用，并安装了 `mermaid` 依赖）：

````markdown
```mermaid
flowchart TD
    A[开始] --> B[结束]
```
````

```mermaid
flowchart TD
    A[开始] --> B[结束]
```

### 数学公式

支持 KaTeX 数学公式，行内用 `$...$`，独立行用 `$$...$$`。

### 代码块

指定语言即可获得高亮：

````markdown
```dart
void main() => runApp(const App());
```
````

```dart
void main() => runApp(const App());
```

## 链接规范

- 站内文档使用相对链接，如 `[架构决策](../decisions/)`。
- 指向源码文件的链接统一用 GitHub 绝对链接：`https://github.com/The-Brotherhood-of-SCU/Bugaoshan/blob/main/lib/...`。
- 不写本机绝对路径或易失效的代码行号。

## 维护规则

- 架构文档与代码冲突时以代码为准，并在同一变更中修正文档。
- ADR 一旦接受，只修正事实错误；方向改变时新增 ADR，并把旧 ADR 标记为已取代。
- 临时实施清单、已完成的迁移步骤和可由 Git 直接还原的变更摘要不单独保留。
- 架构文档的修改必须遵守各文档末尾的"不变量"或"修改检查清单"。

## 本地预览

```bash
cd website
pnpm install
pnpm dev     # 本地开发，默认 http://localhost:8080
pnpm build   # 构建到 .vuepress/dist
```

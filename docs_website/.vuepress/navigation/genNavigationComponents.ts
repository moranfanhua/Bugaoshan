/**
 * 导航自动生成脚本
 *
 * 借鉴自 MaaAssistantArknights/docs/.vuepress/navigation/genNavigationComponents.ts。
 *
 * 原理：构建时扫描内容目录，根据每个 Markdown 文件的 frontmatter 自动生成
 * 顶部导航栏（navbar）与侧边栏（collections/sidebar），无需手动维护导航配置。
 *
 * 目录结构约定：
 *   <baseDir>/
 *   ├── manual/            # 顶层栏目（每个目录作为导航栏一项）
 *   │   ├── README.md      # 栏目首页，frontmatter 里的 dir.order 控制栏目排序
 *   │   ├── features.md    # 普通页面，frontmatter 里的 order 控制页内排序
 *   │   └── ...
 *   └── develop/
 *
 * frontmatter 支持字段：
 *   order      数字，越大越靠后，缺省排最后
 *   title      侧边栏/导航栏显示名，缺省取一级标题，再缺省取文件名
 *   icon       图标名（Iconify 格式，如 mdi:information-outline）
 *   index      目录专属，false 时目录标题不可点击（不生成链接）
 *   collapsed  目录专属，false 时默认展开
 *   dir.order  目录专属，控制该目录在导航栏里的顺序
 */
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'node:url'
import { default as matter } from 'gray-matter'
import { ThemeCollectionItem, ThemeNavItem, ThemeSidebarItem } from 'vuepress-theme-plume'

interface MetaData {
  baseName: string
  order: number
  title: string
  icon: string
  index?: boolean
  collapsed?: boolean
}

interface NavigationComponents {
  navbar: ThemeNavItem[]
  collections: ThemeCollectionItem[]
}

type SidebarItem = ThemeSidebarItem | string

function getMetaData(dir: string, entry: fs.Dirent): MetaData | null {
  const currentPath = path.join(dir, entry.name)
  if (!fs.existsSync(currentPath)) {
    return null
  }

  let mdFilePath = ''
  if (entry.isDirectory()) {
    mdFilePath = path.join(currentPath, 'README.md')
  } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name.toLowerCase() !== 'readme.md') {
    mdFilePath = currentPath
  } else {
    return null
  }

  if (!fs.existsSync(mdFilePath)) {
    return null
  }

  const fileContent = fs.readFileSync(mdFilePath, 'utf-8')
  const meta = matter(fileContent).data ?? {}

  // 文件名，不含扩展名
  const baseName = path.parse(entry.name).name
  // 获取顺序，目录的 order 在 meta.dir.order 里，文件的 order 在 meta.order 里，默认值为一个大数
  const order = Number((entry.isDirectory() ? meta?.dir?.order : meta?.order) ?? Number.MAX_SAFE_INTEGER)
  // 获取标题，先从 frontmatter 里找 title，再用正则获取一级标题，最后 fallback 到文件名（不含扩展名）
  const title = String(meta?.title ?? RegExp('# (.+)').exec(fileContent)?.[1] ?? baseName)
  // 获取图标
  const icon = String(meta?.icon ?? '')
  // 目录是否生成链接，默认 true；文件总是生成链接
  const index = entry.isDirectory() ? Boolean(meta?.index ?? true) : undefined
  // 目录是否默认折叠，默认 true；文件没有折叠概念
  const collapsed = entry.isDirectory() ? Boolean(meta?.collapsed ?? true) : undefined

  return {
    baseName: baseName,
    order: order,
    title: title,
    icon: icon,
    index: index,
    collapsed: collapsed,
  }
}

function getSidebarItems(dir: string): SidebarItem[] {
  interface WrappedSidebarItem {
    sidebarItem: SidebarItem
    order: number
  }

  // 过滤隐藏文件（. 开头）和临时/内部文件（_ 开头，如 _latest.md）
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => !e.name.startsWith('.') && !e.name.startsWith('_'))

  const sidebarItemsWithOrder: WrappedSidebarItem[] = []
  for (const entry of entries) {
    let sidebarItem: SidebarItem

    const metaData = getMetaData(dir, entry)
    if (!metaData) {
      continue
    }

    if (entry.isDirectory()) {
      const children = getSidebarItems(path.join(dir, entry.name))
      // 可折叠的子目录
      sidebarItem = {
        text: metaData.title,
        // 只有当目录设置了 index: true 时，才生成链接，否则点击时不跳转、只切换折叠状态
        link: metaData.index ? `${metaData.baseName}/` : undefined,
        icon: metaData.icon,
        collapsed: metaData.collapsed,
        // 必须用相对路径，前面不能加斜杠
        prefix: `${metaData.baseName}/`,
        items: children,
      }
    } else {
      // 普通文件，取完整文件名作为链接
      sidebarItem = entry.name
    }

    sidebarItemsWithOrder.push({ sidebarItem: sidebarItem, order: metaData.order })
  }
  sidebarItemsWithOrder.sort((a, b) => a.order - b.order)
  return sidebarItemsWithOrder.map((i) => i.sidebarItem)
}

/**
 * 生成导航组件。
 *
 * @param baseDir 内容根目录。默认为 website/ 根目录（即本文件所在目录的上上级）。
 *                若未来需要多语言，可传入 website/zh-cn/ 这样的语言目录。
 */
export function genNavigationComponents(
  baseDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../'),
): NavigationComponents {
  interface WrappedNavigationComponent {
    navItem: ThemeNavItem
    collectionItem: ThemeCollectionItem
    order: number
  }

  const navigationComponentsWithOrder: WrappedNavigationComponent[] = []

  // 获取所有非隐藏目录
  const entries = fs.readdirSync(baseDir, { withFileTypes: true }).filter((e) => !e.name.startsWith('.'))

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const metaData = getMetaData(baseDir, entry)
    if (!metaData) {
      continue
    }

    const navbarItem: ThemeNavItem = {
      text: metaData.title,
      icon: metaData.icon,
      link: `/${metaData.baseName}/`,
    }

    const collectionItem: ThemeCollectionItem = {
      type: 'doc',
      title: metaData.title,
      dir: metaData.baseName,
      linkPrefix: `/${metaData.baseName}/`,
      sidebar: getSidebarItems(path.join(baseDir, entry.name)),
    }

    navigationComponentsWithOrder.push({
      navItem: navbarItem,
      collectionItem: collectionItem,
      order: metaData.order,
    })
  }

  navigationComponentsWithOrder.sort((a, b) => a.order - b.order)

  return {
    navbar: navigationComponentsWithOrder.map((i) => i.navItem),
    collections: navigationComponentsWithOrder.map((i) => i.collectionItem),
  }
}

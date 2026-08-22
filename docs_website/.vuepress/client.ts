import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance({ router }) {
    // 根路径落地页：直接跳转到用户手册
    router.beforeEach((to) => {
      if (to.path === '/' || to.path === '/index.html') {
        return { path: '/manual/', replace: true }
      }
      return true
    })
  },
})

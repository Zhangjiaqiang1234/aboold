// 这是路由文件
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/Index'
import Page404 from '@/views/Page404'
import News from '@/views/News'
import Download from '@/views/download/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // base : '/abo_website/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: 'ABO官网,ABO区块链,ABO区块链医疗,ABO医疗数据共享-ABO',
        keywords: 'ABO官网,ABO区块链,ABO区块链医疗,ABO医疗数据共享-ABO'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: 'ABO官网,ABO区块链,ABO区块链医疗,ABO医疗数据共享-ABO',
        keywords: 'ABO官网,ABO区块链,ABO区块链医疗,ABO医疗数据共享-ABO'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
        title: 'ABO'
      }
    },
    {
      path: '/news/:id',
      name: 'news',
      component: News,
      meta: {
        title: 'ABO'
      }
    },
    {
      path: '/download',
      name: 'download',
      component: Download,
      meta: {
        title: 'ABO',
        keywords: 'ABO'
      }
    },
    {
      path: '/download/:id',
      name: 'download',
      component: Download,
      meta: {
        title: 'ABO',
        keywords: 'ABO'
      }
    },
    {
      path: '*',
      name: '404',
      component: Page404,
      meta: {
        title: '404-ABO',
        keywords: 'ABO,404'
      }
    }
  ]
})

// 使用 router.beforeEach 注册一个全局前置守卫
// to: Route:即将要进入的目标路由对象
// from: Route: 当前导航正要离开的路由
// next:Function:一定要调用该方法来resolve这个钩子。执行效果依赖next方法的调用参数。
// next():进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是confirmed（确认的）。
// next(false):中断当前的导航。如果浏览器的URL改变了（可能是用户手动或者浏览器后退按钮），那么URL地址会重置到from 路由对应的地址。
// next('/')或者next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
// next(error):(2.4.0+)如果传入next的参数是一个Error实例，则导航会被终止且该错误会被传递给router.onError()注册过的回调。
// 确保要调用 next 方法，否则钩子就不会被 resolved。
router.beforeEach((to, from, next) => {
  // 修改文档标题
  document.title = to.meta.title
  document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.keywords)
  next()
})

export default router

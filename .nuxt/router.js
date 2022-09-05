import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b30ebec = () => interopDefault(import('../pages/calça.vue' /* webpackChunkName: "pages/calça" */))
const _55b34798 = () => interopDefault(import('../pages/carrinho.vue' /* webpackChunkName: "pages/carrinho" */))
const _4f555f6a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _672821b0 = () => interopDefault(import('../pages/produtos.vue' /* webpackChunkName: "pages/produtos" */))
const _26dc09ca = () => interopDefault(import('../pages/sobre.vue' /* webpackChunkName: "pages/sobre" */))
const _0eadad34 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cal%C3%A7a",
    component: _5b30ebec,
    name: "calça"
  }, {
    path: "/carrinho",
    component: _55b34798,
    name: "carrinho"
  }, {
    path: "/login",
    component: _4f555f6a,
    name: "login"
  }, {
    path: "/produtos",
    component: _672821b0,
    name: "produtos"
  }, {
    path: "/sobre",
    component: _26dc09ca,
    name: "sobre"
  }, {
    path: "/",
    component: _0eadad34,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

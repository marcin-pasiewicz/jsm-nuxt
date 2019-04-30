import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('~/pages/index').then(m => m.default || m)
const Map = () => import('~/pages/map/map.vue').then(m => m.default || m)
const Blog = () => import('~/pages/blog/blog.vue').then(m => m.default || m)
const BlogPost = () => import('~/pages/blog/post.vue').then(m => m.default || m)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { name: 'Home', path: '/', component: Home },
      { name: 'Map', path: '/map', component: Map },
      { name: 'Blog', path: '/blog', component: Blog },
      { name: 'Post', path: '/blog/post/:id', component: BlogPost }
    ],
    scrollBehavior () {
      return { x: 0, y: 0 }
    }
  })
}

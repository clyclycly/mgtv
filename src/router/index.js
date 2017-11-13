import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'components/home/home'
import Tv from 'components/tv/tv'
import Show from 'components/show/show'
import Music from 'components/music/music'
import Doc from 'components/doc/doc'
import Child from 'components/child/child'
import Edu from 'components/edu/edu'
import News from 'components/news/news'
import PlayDetail from 'components/play-detail/play-detail'
import B from 'components/b/b'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/child',
      component: Child
    },
    {
      path: '/show',
      component: Show
    },
    {
      path: '/music',
      component: Music
    },
    {
      path: '/edu',
      component: Edu
    },
    {
      path: '/doc',
      component: Doc
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/tv',
      component: Tv
    },
    {
      path: '/b',
      component: B,
      children: [
        {
          path: ':id',
          component: PlayDetail
        }
      ]
    }
  ]
})

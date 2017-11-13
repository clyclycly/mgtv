import Vue from 'vue'
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
=======
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
=======
import VueRouter from 'vue-router'
>>>>>>> cly
>>>>>>> cly
import Home from 'components/home/home'
import Tv from 'components/tv/tv'
import Show from 'components/show/show'
import Music from 'components/music/music'
import Doc from 'components/doc/doc'
import Child from 'components/child/child'
import Edu from 'components/edu/edu'
import News from 'components/news/news'
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
import VueRouter from 'vue-router'
=======
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
import VueRouter from 'vue-router'
=======
import PlayDetail from 'components/play-detail/play-detail'
import B from 'components/b/b'
>>>>>>> cly
>>>>>>> cly

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
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
=======
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
=======
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
>>>>>>> cly
>>>>>>> cly
    }
  ]
})

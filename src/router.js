import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Finanzen from './views/Finanzen.vue'
import Mitarbeiter from './views/Mitarbeiter'
import Kunden from './views/Kunden'
import Konkurrenz from './views/Konkurrenz'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'dashboard',
          component: Dashboard
      },
      {
          path: '/finanzen',
          name: 'finanzen',
          component: Finanzen
      },
      {
          path: '/mitarbeiter',
          name: 'mitarbeiter',
          component: Mitarbeiter
      },
      {
          path: '/kunden',
          name: 'kunden',
          component: Kunden
      },
      {
          path: '/konkurrenz',
          name: 'konkurrenz',
          component: Konkurrenz
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

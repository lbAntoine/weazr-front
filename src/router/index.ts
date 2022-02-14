import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('../pages/Accueil.vue'),
    meta: {
      title: 'Accueil'
    }
  },
  {
    path: '/historique',
    name: 'Historique',
    component: () => import('../pages/Historique.vue'),
    meta: {
      title: 'Historique'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../pages/Profile.vue'),
    meta: {
      title: 'Profile'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log(to, from);
  document.title = `Weazr - ${to.meta.title}`;
})

export default router;
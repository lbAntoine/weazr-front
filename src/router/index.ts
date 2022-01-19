import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../pages/Accueil.vue'
import Historique from '../pages/Historique.vue'
import Profile from '../pages/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    meta: {
      title: 'Accueil'
    }
  },
  {
    path: '/historique',
    name: 'Historique',
    component: Historique,
    meta: {
      title: 'Historique'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
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
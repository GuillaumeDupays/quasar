
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/auth', component: () => import('pages/PageAuthentification.vue') },
      { path: '/ajouter-achat', component: () => import('../components/AjouterAchat.vue') }
    ],
  },
  {
    path: '/achats',
    name: 'Achats',
    component: () => import('pages/Achats.vue'),
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

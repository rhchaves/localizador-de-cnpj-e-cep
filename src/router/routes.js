import MainLayout from 'layouts/MainLayout.vue';
import BuscadorIndex from 'pages/BuscadorIndex.vue';
import BuscadorCNPJ from 'src/modules/buscador-cnpj/pages/BuscadorCNPJ.vue';
import BuscadorCEP from 'src/modules/buscador-cep/pages/BuscadorCEP.vue';

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout,
    children: [
      {
        path: '',
        component: BuscadorIndex,
      },
      {
        path: '/buscadorCnpj',
        name: 'BuscadorCNPJ',
        component: BuscadorCNPJ,
      },
      {
        path: '/buscadorCep',
        name: 'BuscadorCEP',
        component: BuscadorCEP,
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;

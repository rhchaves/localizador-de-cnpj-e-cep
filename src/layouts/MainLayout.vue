<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Buscador
        </q-toolbar-title>

        <div>Buscador ??? v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"

      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"

      :width="250"
      :breakpoint="500"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>

        <EssentialRoute
          v-for="route in essentialRoutes"
          :key="route.title"
          v-bind="route"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialRoute from 'components/EssentialRoute.vue';

const routesList = [
  {
    title: 'Home',
    caption: 'Página principal',
    icon: 'home',
    route: '/',
  },
  {
    title: 'CNPJ',
    caption: 'Localizador de CNPJ',
    icon: 'search',
    route: '/buscadorCnpj',
  },
  {
    title: 'CEP',
    caption: 'Localizador de CEP',
    icon: 'search',
    route: '/buscadorCep',
  },
  {
    title: 'Ajuda',
    caption: '',
    icon: 'help',
    route: '/',
  },

];

export default {
  name: 'MainLayout',

  components: {
    EssentialRoute,
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialRoutes: routesList,
      miniState: true,
      drawer: false,
    };
  },
};
</script>

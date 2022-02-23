<template>
  <q-page class="flex flex-center">
    <h3>Buscador de CNPJ</h3>

    <div class="q-pa-md">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          outlined
          v-model="searchCnpj"
          label="Digite o cnpj"
          mask="##.###.###/####-##"
          unmasked-value
        >
        </q-input>
        23 065 011 0001 55
        <q-btn push color="primary" label="Buscar" type="submit"/>
      </q-form>
    </div>

    <BuscadorTable
      title="Tabela de Empresas por CNPJ"
      :columns="columns"
      :data="getListCnpj"
      selection="multiple"
    />

    <BuscadorLoading v-if="loadingCnpj"/>

  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BuscadorTable from 'components/BuscadorTable.vue';
import BuscadorLoading from 'components/BuscadorLoading.vue';

export default {
  name: 'BuscadorCNPJ',

  components: {
    BuscadorTable,
    BuscadorLoading,
  },

  data() {
    return {
      searchCnpj: '',
    };
  },

  computed: {
    ...mapGetters('buscadorCnpj', ['getListCnpj', 'loadingCnpj']),

    columns() {
      return [
        { label: 'CNPJ', field: 'cnpj' },
        { label: 'Nome', field: 'name' },
        { label: 'Cidade', field: 'city' },
        { label: 'Estado', field: 'state' },
      ];
    },
  },

  methods: {
    ...mapActions('buscadorCnpj', ['listCnpj']),

    onSubmit() {
      this.listCnpj(this.searchCnpj);
    },
  },
};
</script>

<template>
  <q-page class="flex flex-center">
    <h3>Buscador de CEP</h3>

    <div class="q-pa-md">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          outlined
          v-model="search"
          label="Digite o cep"
          mask="#####-###"
          unmasked-value
        >
        </q-input>
        {{ search }}
        <q-btn push color="primary" label="Buscar" type="submit"/>
      </q-form>
    </div>
    <BuscadorTable
      title="Tabela de Endereços por Cep"
      :columns="columns"
      :data="getListCep"
      selection="multiple"
    />
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BuscadorTable from 'components/BuscadorTable.vue';

export default {
  name: 'BuscadorCEP',

  components: {
    BuscadorTable,
  },

  data() {
    return {
      search: '',
      listCeps: [],
    };
  },

  computed: {
    ...mapGetters('buscadorCep', ['getListCep']),

    columns() {
      return [
        {
          field: 'cep',
          label: 'Cep',
        },
        {
          field: 'logradouro',
          label: 'Rua',
        },
        {
          field: 'bairro',
          label: 'Bairro',
        },
        {
          field: 'localidade',
          label: 'Cidade',
        },
        {
          field: 'uf',
          label: 'UF',
        },
      ];
    },
  },

  methods: {
    ...mapActions('buscadorCep', ['listCep']),

    onSubmit() {
      this.listCep(this.search);
    },
  },
};
</script>

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
          v-model="searchCep"
          label="Digite o cep"
          mask="#####-###"
          unmasked-value
        >
        </q-input>
        <q-btn push color="primary" label="Buscar" type="submit"/>
      </q-form>
    </div>

    <BuscadorTable
      v-if="getListCep.length"
      title="Tabela de Endereço por CEP"
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
      searchCep: '',
      listCeps: [],
    };
  },

  computed: {
    ...mapGetters('buscadorCep', ['getListCep']),

    columns() {
      return [
        {
          label: 'CEP',
          field: 'cep',
        },
        {
          label: 'Rua',
          field: 'logradouro',
        },
        {
          label: 'Bairro',
          field: 'bairro',
        },
        {
          label: 'Cidade',
          field: 'localidade',
        },
        {
          label: 'UF',
          field: 'uf',
        },
        {
          label: 'DDD',
          field: 'ddd',
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

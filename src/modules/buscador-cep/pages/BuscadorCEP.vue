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
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'BuscadorCEP',

  data() {
    return {
      search: '',
      listCeps: [],
    };
  },

  computed: {
    ...mapGetters('buscadorCep', ['getListCep']),

  },

  methods: {
    ...mapActions('buscadorCep', ['listCep']),

    onSubmit() {
      this.listCep(this.search);
    },
  },
};
</script>

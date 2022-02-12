<template>
  <q-page class="flex flex-center">
    <h3>Buscador de CEP</h3>

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="search"
        label="Digite o cep"
        mask="#####-###"
        unmasked-value
      >
      </q-input>
      {{ search }}
      <q-btn push color="primary" label="Push" type="submit"/>
    </q-form>

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

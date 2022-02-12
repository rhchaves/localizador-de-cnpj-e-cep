<template>
  <q-page>

    <div class="q-pa-md">
      <q-table
        :title="title"
        :data="data"
        :columns="columns"
        :row-key="rowKey"
        :selected-rows-label="getSelectedString"
        :selection="selection"
        :selected.sync="selected"
      />
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'BuscadorTable',

  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    rowKey: {
      type: String,
      required: false,
      default: 'name',
    },
    selection: {
      type: String,
      required: false,
      default: 'single',
    },
  },

  data() {
    return {
      selected: [],

    };
  },
  methods: {
    getSelectedString() {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`;
    },
  },
};
</script>

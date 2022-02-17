<template>
    <div class="q-pa-md q-gutter-md">
    <q-inner-loading
      :showing= 'true'
      :label="label"
      label-class="text-primary"
      label-style="font-size: 1.1em"
      color="primary"
      size="3em"
      :thickness="5"
    />
  </div>
</template>

<script>
export default {
  name: 'BuscadorLoading',

  props: {
    label: {
      type: String,
      required: false,
      default: 'Por favor, aguarde...',
    },
  },

};
</script>

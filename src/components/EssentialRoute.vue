<template>
  <q-item
    clickable
    tag="a"
    :to="route"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialRoute',

  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },

    caption: {
      type: String,
      required: false,
      default: '',
    },

    route: {
      type: String,
      required: false,
      default: '#',
    },

    icon: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<template>
  <div class="card">
    <h1>{{ keep.name }}</h1>
    <img :src="keep.img" />
    <p>{{ keep.description }}</p>
    <h4>{{ keep.creator.email }}</h4>
  </div>
</template>

<script>
export default {
  name: "keep-details",
  computed: {
    keep() {
      return this.$store.state.activeKeep;
    },
  },
};
</script>

<style>
</style>
<template>
  <div>
    <h1>Hello I am a new keep form</h1>
    <form @submit.prevent="createKeep">
      <input type="text" v-model="keepData.name" placeholder="Keep Name..." />
      <input
        type="text"
        v-model="keepData.description"
        placeholder="New Keep Description..."
      />
      <input
        type="text"
        v-model="keepData.img"
        placeholder="New Keep Image URL..."
      />
      <button type="submit" class="btn btn-primary"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "new-keep-form",
  data() {
    return {
      keepData: {
        views: 0,
        shares: 0,
        keeps: 0,
      },
    };
  },
  computed: {
    profile() {
      return this.$store.state.searchedProfile;
    },
  },
  methods: {
    createKeep() {
      this.$store.dispatch("createKeep", this.keepData);
      $("#modalcreateKeep").modal("hide");
    },
  },
};
</script>

<style>
</style>
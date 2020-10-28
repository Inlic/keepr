<template>
  <div>
    <h1>New Keep</h1>
    <form @submit.prevent="createKeep">
      <div class="form-group">
        <input
          class="form-control"
          type="text"
          v-model="keepData.name"
          placeholder="Keep Name..."
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="text"
          v-model="keepData.description"
          placeholder="New Keep Description..."
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="text"
          v-model="keepData.img"
          placeholder="New Keep Image URL..."
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
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
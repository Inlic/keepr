<template>
  <div class="container-fluid mx-4">
    <div class="row card navbar-text">
      <div class="col-12 text-center">
        <img
          class="align-self-center"
          :src="profile.picture"
          style="max-height: 50px; max-width: 50px; border-radius: 50px"
        />
      </div>
      <div class="col-12">
        <h6>{{ profile.name }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profileComponent",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>

<style>
</style>
<template>
  <div>
    <h1>Hello I am a new vault form</h1>
    <form @submit.prevent="createVault">
      <input type="text" v-model="vaultData.name" placeholder="Vault Name..." />
      <input
        type="text"
        v-model="vaultData.description"
        placeholder="New Vault Description..."
      />
      <input type="checkbox" v-model="vaultData.isprivate" />
      <button type="submit" class="btn btn-primary"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "new-vault-form",
  data() {
    return {
      vaultData: {},
    };
  },
  computed: {
    profile() {
      return this.$store.state.searchedProfile;
    },
  },
  methods: {
    createVault() {
      this.$store.dispatch("createVault", this.vaultData);
      $("#modalcreateVault").modal("hide");
    },
  },
};
</script>

<style>
</style>
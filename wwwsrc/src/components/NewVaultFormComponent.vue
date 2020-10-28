<template>
  <div>
    <h1>New Vault</h1>
    <form @submit.prevent="createVault">
      <div class="form-group">
        <input
          class="form-control"
          type="text"
          v-model="vaultData.name"
          placeholder="Vault Name..."
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="text"
          v-model="vaultData.description"
          placeholder="New Vault Description..."
        />
      </div>
      <div class="form-check">
        <input
          id="Check1"
          class="form-check-input"
          type="checkbox"
          v-model="vaultData.isPrivate"
        />
        <label class="form-check-label" for="Check1">Private?</label>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
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
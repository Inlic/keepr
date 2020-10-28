<template>
  <div class="row">
    <div class="col-12 col-md-6">
      <img :src="keep.img" />
    </div>
    <div class="col-12 col-md-6">
      <h1>{{ keep.name }}</h1>
      <p>{{ keep.description }}</p>
      <h5>
        Views: {{ keep.views }} | Shares: {{ keep.shares }} | Keeps:
        {{ keep.keeps }}
      </h5>
      <div v-if="keep.creator">
        <i
          v-if="keep.creator.id == profile.id"
          class="fa fa-trash"
          aria-hidden="true"
          @click.stop="deleteKeep"
        ></i>
        | {{ keep.creator.email }} |
        <img class="detailsimg p-2" :src="keep.creator.picture" />
      </div>
      <div>
        <div v-if="$auth.isAuthenticated" class="input-group">
          <select class="custom-select" v-model="vaultKeep.VaultId">
            <option v-for="vault in myVaults" :key="vault.id" :value="vault.id">
              {{ vault.name }}
            </option>
          </select>
          <div class="input-group-append">
            <button
              class="btn btn-primary"
              type="button"
              @click="createVaultKeep"
            >
              Add to Vault
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "keep-details",
  data() {
    return {
      vaultKeep: {
        VaultId: "",
      },
    };
  },
  computed: {
    keep() {
      return this.$store.state.activeKeep;
    },
    profile() {
      return this.$store.state.profile;
    },
    myVaults() {
      return this.$store.state.profileVaults;
    },
  },
  methods: {
    deleteKeep() {
      this.$store.dispatch("deleteKeep", this.keep.id);
      $("#modal" + this.keep.id).modal("hide");
    },
    createVaultKeep() {
      this.$store.dispatch("createVaultKeep", {
        keepid: this.keep.id,
        vaultid: this.vaultKeep.VaultId,
        keeps: this.keep.keeps,
      });
    },
  },
};
</script>

<style>
.fa.fa-trash {
  color: var(--danger);
  cursor: pointer;
}
.detailsimg {
  max-height: 50px;
  max-width: 50px;
  cursor: pointer;
  border-radius: 25px;
}
</style>
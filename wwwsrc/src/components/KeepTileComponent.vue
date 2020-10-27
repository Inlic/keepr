<template>
  <div class="keep-tile-component">
    <div
      class="card"
      data-toggle="modal"
      :data-target="'#' + modalId"
      @click="setActive"
    >
      <h1 v-if="vaultTileProp">
        <i
          class="fa fa-trash"
          aria-hidden="true"
          @click.stop="removeKeepFromVault"
        ></i>
      </h1>
      <h1>{{ keepTileProp.name }}</h1>
      <img :src="keepTileProp.img" />
      <p>{{ keepTileProp.description }}</p>
      <h4>{{ keepTileProp.creator.name }}</h4>
      <img :src="keepTileProp.creator.picture" @click.stop="viewProfile" />
    </div>
    <modal-component :id="modalId" color="bg-danger">
      <template v-slot:body>
        <keep-details-component />
      </template>
    </modal-component>
  </div>
</template>

<script>
import modalComponent from "./ModalComponent";
import keepDetailsComponent from "./KeepDetailsComponent";
export default {
  name: "keep-tile-component",
  props: ["keepTileProp", "vaultTileProp"],
  data() {
    return {};
  },
  computed: {
    modalId() {
      return "modal" + this.keepTileProp.id;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    setActive() {
      this.$store.dispatch("setActiveKeep", this.keepTileProp);
      this.$store.dispatch("getProfileVaults", this.profile.id);
    },
    viewProfile() {
      this.$router.push({
        name: "Profile",
        params: { profileId: this.keepTileProp.creator.id },
      });
    },
    removeKeepFromVault() {
      this.$store.dispatch("removeKeepFromVault", {
        vaultid: this.vaultTileProp.id,
        keepid: this.keepTileProp.id,
      });
    },
  },
  components: {
    modalComponent,
    keepDetailsComponent,
  },
};
</script>

<style>
</style>
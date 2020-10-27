<template>
  <div class="keep-tile-component">
    <div
      class="card"
      data-toggle="modal"
      :data-target="'#' + modalId"
      @click="setActive"
    >
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
  props: ["keepTileProp"],
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
    },
    viewProfile() {
      this.$router.push({
        name: "Profile",
        params: { profileId: this.keepTileProp.creator.id },
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
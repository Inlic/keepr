<template>
  <div class="card">
    <h1>{{ keep.name }}</h1>
    <img :src="keep.img" />
    <p>{{ keep.description }}</p>
    <div>
      <h5>
        Views: {{ keep.views }} Shares: {{ keep.shares }} Keeps:
        {{ keep.keeps }}
      </h5>
    </div>
    <div v-if="keep.creator">
      <h4>{{ keep.creator.email }}</h4>

      <i
        v-if="keep.creator.id == profile.id"
        class="fa fa-trash"
        aria-hidden="true"
        @click.stop="deleteKeep"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "keep-details",
  computed: {
    keep() {
      return this.$store.state.activeKeep;
    },
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    deleteKeep() {
      this.$store.dispatch("deleteKeep", this.keep.id);
      $("#modal" + this.keep.id).modal("hide");
    },
  },
};
</script>

<style>
.fa.fa-trash {
  color: var(--danger);
  cursor: pointer;
}
</style>
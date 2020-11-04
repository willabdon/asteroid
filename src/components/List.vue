<template>
  <perfect-scrollbar>
  <div class="list d-flex justify-content-center flex-wrap">
    <span v-if="!list"> No Results </span>
    <AsteroidCard v-else v-for="asteroid in list" :key="asteroid.id" :asteroid="asteroid"/>
  </div>
  </perfect-scrollbar>
</template>

<script>

const AsteroidCard = () =>
  import(/* webpackChunkName: "NavBar" */ "./AsteroidCard.vue");

export default {
  components: {
    AsteroidCard
  },
  props: ["active", "list"]
};
</script>

<style scoped>
  .list {
    overflow-y: auto;
  }

</style>

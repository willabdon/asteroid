<template>
  <div class="d-flex justify-content-center h-100">
    <div class="container h-100 display">
      <NavBar :active="'list'"/>
    </div>
  </div>
</template>

<script>

const NavBar = () =>
  import(/* webpackChunkName: "NavBar" */ "../components/NavBar.vue");

export default {
  components: {
    NavBar
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style scoped>
.display {
  background-color: rgba(234, 241, 235, 0.171);
}

label {
  color: white;
}
</style>
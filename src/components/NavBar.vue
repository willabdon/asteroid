<template>
  <div class="navbar d-flex justify-content-center">
    <div class="d-flex justify-content-center">
      <router-link to="/">
        <span :class="active == 'Home' ? 'active' : ''"
          ><b-icon-list-stars class="mr-1"></b-icon-list-stars> List</span
        >
      </router-link>
      <router-link to="/search">
        <span :class="active == 'Search' ? 'active' : ''"
          ><b-icon-search class="mr-1"></b-icon-search> Search
        </span>
      </router-link>
      <router-link to="/nearest">
        <span :class="active == 'Nearest' ? 'active' : ''"
          ><b-icon-bullseye class="mr-1"></b-icon-bullseye> Nearest
        </span>
      </router-link>
      <router-link to="/favourite">
        <span :class="active == 'Favourite' ? 'active' : ''"
          ><b-icon-star-fill class="mr-1"></b-icon-star-fill>Favourites</span
        >
      </router-link>
    </div>
    <UserIcon class="ml-auto mr-4"/>
  </div>
</template>

<script>
const UserIcon = () =>
  import(/* webpackChunkName: "NavBar" */ "./UserIcon.vue");

export default {
  components: {
    UserIcon
  },
  props: ["active"],
};
</script>

<style scoped>
.navbar {
  padding: 0 !important;
  border-bottom: 5px solid #fe6415;
}

.navbar span {
  padding: 15px 20px;
  min-width: 100px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #efe1d2;
}

.navbar span:focus,
.navbar span:hover {
  background-color: #fe6415;
  border-bottom: 10px solid #fe6415;
}

.navbar .active {
  border-bottom: 10px solid #fe6415;
}

.navbar a {
  text-decoration: none;
}
</style>

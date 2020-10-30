<template>
  <div class="navbar d-flex justify-content-center">
    <span :class="active == 'list' ? 'active' : ''"
      ><b-icon-list-stars class="mr-1"></b-icon-list-stars> List</span
    >
    <span class="mx-3" :class="active == 'search' ? 'active' : ''"
      ><b-icon-search class="mr-1"></b-icon-search> Search
    </span>
    <span :class="active == 'favourites' ? 'active' : ''"
      ><b-icon-star-fill class="mr-1"></b-icon-star-fill>Favourites</span
    >
  </div>
</template>

<script>
export default {
  props: ["active"],
};
</script>

<style scoped>
.navbar {
  color: white;
}

.navbar span {
  padding: 10px 20px;
  min-width: 100px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.navbar span:focus,
.navbar span:hover {
  background-color: #19c027;
}

.navbar .active {
  border-bottom: 2px solid #19c027;
}
</style>

<template>
  <div id="app">
    <UserIcon />
    <router-view/>
    <footer> <small>&copy; Copyright 2020, Willian Abdon</small> </footer> 
  </div>
</template>

<script>

const UserIcon = () =>
  import(/* webpackChunkName: "NavBar" */ "./components/UserIcon.vue");

export default {
  components: {
    UserIcon
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:rgba(0, 0, 0, 0.85);
  height: 100vh;
}

#app:after {
  content: "";
  background: url('./assets/planet.jpg');
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

footer {
  position: fixed;
  bottom: 2px;
  width: 100%;
  color: rgb(168, 168, 168);
}
</style>

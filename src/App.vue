<template>
  <div id="app">
    <router-view/>
    <footer> <small>&copy; Copyright 2020, Willian Abdon</small> </footer> 
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(32,35,42);
  background: linear-gradient(68deg, rgba(32,35,42,1) 1%, rgba(42,49,57,1) 30%, rgba(32,35,42,1) 100%);
  height: 100vh;
  color: #EFE1D2;
}

.card-body {
  background-color: #252C34;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #FE6415;
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

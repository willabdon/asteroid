<template>
  <div class="d-flex h-100">
    <div class="container h-100 display d-flex flex-column pb-5">
      <NavBar :active="actualRoute" />
      <Search
        v-if="actualRoute === 'Search'"
        class="mt-3"
        v-on:search="handleSearch"
      />
      <div v-else-if="actualRoute === 'Nearest'">
        <small
          >Select some dates and we'll display a list of asteroids based on
          their closest approach date to Earth</small
        >
        <DateFilter v-on:filter="handleDateFilter" :error="filterError" />
      </div>
      <span v-if="!asteroidList.length && isFetched" class="mt-3">
        No Result
      </span>
      <div v-if="fetching" class="mt-4">
        <b-spinner label="Loading..."></b-spinner>
      </div>
      <List v-else class="mt-3" :list="asteroidList" />
    </div>
  </div>
</template>

<script>
const NavBar = () =>
  import(/* webpackChunkName: "NavBar" */ "../components/NavBar.vue");

const List = () =>
  import(/* webpackChunkName: "List" */ "../components/List.vue");

const Search = () =>
  import(/* webpackChunkName: "Search" */ "../components/Search.vue");

const DateFilter = () =>
  import(/* webpackChunkName: "DateFilter" */ "../components/DateFilter.vue");

import { fetch, Method } from "../service/api";
import firebase from "firebase";

export default {
  components: {
    NavBar,
    List,
    Search,
    DateFilter,
  },
  data() {
    return {
      actualRoute: null,
      asteroidList: [],
      filterError: "",
      isFetched: false,
      fetching: false,
    };
  },
  computed: {
    favouritesSynced() {
      return this.$store.getters.favouritesSynced;
    },
  },
  beforeMount() {
    if (!this.favouritesSynced) {
      this.$store.dispatch("syncFavourites");
    }
  },
  watch: {
    $route() {
      this.asteroidList = [];
      this.actualRoute = this.$router.currentRoute.name;
      this.filterError = "";
      this.isFetched = false;

      if (this.actualRoute === "Home") this.fetchList();
      if (this.actualRoute === "Favourite") this.fetchFavourites();
    },
  },
  mounted() {
    this.actualRoute = this.$router.currentRoute.name;

    if (this.actualRoute === "Home") this.fetchList();
    if (this.actualRoute === "Favourite") this.fetchFavourites();
  },
  methods: {
    async handleSearch(value) {
      this.fetching = true;
      try {
        const response = await fetch({
          url: "/search",
          method: Method.GET,
          params: {
            id: value,
          },
        });
        this.asteroidList = response;
      } catch (error) {
        this.asteroidList = [];
      }
      this.isFetched = true;
      this.fetching = false;
    },
    async handleDateFilter({ start, end }) {
      this.fetching = true;
      try {
        const response = await fetch({
          url: "/nearest",
          method: Method.GET,
          params: {
            start: start,
            end: end,
          },
        });
        this.asteroidList = response;
        this.filterError = "";
      } catch (error) {
        this.filterError = error.response.data.error;
        this.asteroidList = [];
      }
      this.isFetched = true;
      this.fetching = false;
    },
    async fetchList() {
      this.fetching = true;
      const response = await fetch({
        url: "/list",
        method: Method.GET,
      });
      this.asteroidList = response;
      this.isFetched = true;
      this.fetching = false;
    },
    async fetchFavourites() {
      this.fetching = true;
      const idToken = await firebase.auth().currentUser.getIdToken(true);

      const response = await fetch({
        url: "/favourite",
        method: Method.GET,
        headers: {
          AuthToken: idToken,
        },
      });
      this.asteroidList = response;
      this.isFetched = true;
      this.fetching = false;
    },
  },
};
</script>

<style scoped>
.container {
  border-right: 1px solid #2a3139;
  border-left: 1px solid #2a3139;
}
</style>
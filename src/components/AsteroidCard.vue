<template>
  <div class="mb-4 mx-3">
    <b-card style="max-width: 21rem; min-width: 21rem; min-height: 15rem">
      <div class="d-flex justify-content-between">
        <h4 class="card-title mr-auto">{{ asteroid.name }}</h4>
        <div v-if="isAuthenticated">
          <b-spinner label="Spinning" v-if="request" small type="grow"></b-spinner>
          <div v-else>
            <b-icon-bookmark-star-fill
              class="mt-1"
              v-if="favourite"
              v-on:click="removeFavourite"
            />
            <b-icon-bookmark-star
              class="mt-1"
              v-else
              v-on:click="addFavourite"
            />
          </div>          
        </div>
      </div>
      <div class="asteroid-details">
        <div>
          <span>ID:</span>
          <span v-if="asteroid.asteroid_id">{{ asteroid.asteroid_id }}</span>
          <span v-else> - </span>
        </div>
        <div>
          <span>Close Approach Date:</span>
          <span v-if="asteroid.close_approach">{{
            asteroid.close_approach
          }}</span>
          <span v-else> - </span>
        </div>
        <div>
          <span>Distance:</span>
          <span v-if="asteroid.distance">{{ asteroid.velocity }} (mph)</span>
          <span v-else> - </span>
        </div>
        <div>
          <span>Velocity:</span>
          <span v-if="asteroid.velocity">{{ asteroid.velocity }} (mph)</span>
          <span v-else> - </span>
        </div>
        <div>
          <span>Diameter:</span>
          <span>{{ asteroid.diameter }} (ft)</span>
        </div>
        <div>
          <span>PHA:</span>
          <span v-if="asteroid.pha">Yes</span>
          <span v-else>No</span>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { fetch, Method } from "../service/api";
import firebase from "firebase";
import lodash from "lodash";

export default {
  props: ["asteroid"],
  data() {
    return {
      favourite: false,
      request: false
    };
  },
  mounted() {
    this.checkFavourite();
  },
  watch: {
    favourites() {
      this.checkFavourite();
    },
  },
  methods: {
    async addFavourite() {
      this.request = true
      const idToken = await firebase.auth().currentUser.getIdToken(true);

      const response = await fetch({
        url: "/favourite/add",
        method: Method.POST,
        data: {
          ...this.asteroid,
        },
        headers: {
          AuthToken: idToken,
        },
      });

      await this.$store.dispatch("addFavourite", response);
    },
    async removeFavourite() {
      this.request = true
      const idToken = await firebase.auth().currentUser.getIdToken(true);

      const response = await fetch({
        url: "/favourite/remove",
        method: Method.POST,
        data: {
          ...this.asteroid,
        },
        headers: {
          AuthToken: idToken,
        },
      });

      await this.$store.dispatch("removeFavourite", response);
    },
    checkFavourite() {
      if (
        lodash.find(this.favourites, { asteroid_id: this.asteroid.asteroid_id })
      ) {
        this.favourite = true;
      } else {
        this.favourite = false;
      }
      this.request = false
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
    favourites() {
      return this.$store.getters.favourites;
    },
  },
};
</script>

<style scoped>
.asteroid-details {
  display: flex;
  flex-direction: column;
  justify-items: initial;
}

.asteroid-details div {
  display: flex;
  justify-content: space-between;
}

.asteroid-details div span:nth-child(1) {
  font-weight: 700;
}

.card-title {
  color: #d8723d;
}
</style>

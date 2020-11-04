<template>
  <div class="user-icon" v-if="show() && user.name">
    <span>{{ user.name[0] }}</span>
  </div>
  <div class="sign-in" v-else>
    <router-link to="/login">
      <span>Sign In</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["active"],
  computed: {    
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    show() {
      const exclude = ["Sign Up", "Login"];
      return !exclude.includes(this.$router.currentRoute.name);
    }
  }
};
</script>

<style scoped>
.user-icon {
  color: #fe6415;
  font-weight: 700;
  right: 12%;
  background-color: rgb(219, 219, 219);
  padding: 10px 15px;
  border-radius: 50%;
}
.sign-in a{
  font-size: 0.7rem;
  color:  #fe6415;
}

.sign-in a:hover,
.sign-in a:focus {
  text-decoration: none;
  color: #fd874c;
}
</style>

<template>
  <div class="d-flex justify-content-center align-items-center h-100">
    <b-card-group class="h-50">
      <b-card class="login-card">
        <img src="../assets/asteroid.png" alt="Asteroid Logo" width="100" class="mb-2"/>
        <b-card-text>Welcome to Asteroid, please do login to save your favourite asteroids.</b-card-text>
        <div class="mb-2">
          <b-form-input
            :type="'email'"
            v-model="email"
            placeholder="Email"
          ></b-form-input>
        </div>
        <div class="mb-4">
          <b-form-input
            :type="'password'"
            v-model="password"
            placeholder="Password"
          ></b-form-input>
        </div>
        <b-card-text>Don't have an account yet ? <router-link to="/signup">Sign up here!</router-link></b-card-text>
        <b-button href="#" variant="success">Login</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },

  },
};
</script>

<style scoped>
  .login-card {
    border-radius: 10px;
    border: 5px solid #19c027;
    
  }

</style>


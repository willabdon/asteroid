<template>
  <div class="d-flex justify-content-center align-items-center h-100">
    <b-card-group class="h-50">
      <b-card class="login-card">
        <img src="../assets/asteroid.png" alt="Asteroid Logo" width="100" class="mb-2"/>
        <b-card-text>Welcome to Asteroid, after registering you can save your favourite asteroids.</b-card-text>
        <div class="mb-2">
          <b-form-input
            :type="'text'"
            v-model="name"
            placeholder="Name"
          ></b-form-input>
        </div>
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
        <b-card-text>Already have an account? <router-link to="/login">Sign in here!</router-link></b-card-text>
        <b-button href="#" variant="success">Sign Up</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
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


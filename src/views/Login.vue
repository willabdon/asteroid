<template>
  <div class="d-flex justify-content-center align-items-center h-100">
    <b-card-group class="h-50">
      <b-card class="login-card">
        <img
          src="../assets/asteroid.png"
          alt="Asteroid Logo"
          width="100"
          class="mb-2"
        />
        <b-card-text
          >Welcome to Asteroid, please do login to save your favourite
          asteroids.</b-card-text
        >
        <ValidationObserver ref="observer">
          <b-form
            slot-scope="{ validate }"
            @submit.prevent="validate().then(login)"
          >
            <ValidationProvider rules="required|email" name="Email">
              <b-form-group slot-scope="{ valid, errors }">
                <b-form-input
                  type="email"
                  v-model="email"
                  placeholder="Email"
                  required
                  :state="errors[0] ? false : valid ? true : null"
                ></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider rules="required" name="Password" vid="password">
              <b-form-group slot-scope="{ valid, errors }">
                <b-form-input
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  required
                  :state="errors[0] ? false : valid ? true : null"
                ></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <span class="text-danger" v-if="notFound">
                  Email or Password Invalid
            </span>
            <b-card-text class="mt-2"
              >Don't have an account yet ?
              <router-link to="/signup">Sign up here!</router-link></b-card-text
            >
            <b-button variant="primary" type="submit">Login</b-button>
          </b-form>
        </ValidationObserver>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      notFound: false
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      }).then(() => {
        this.notFound = false
      }).catch(() => {
        this.notFound = true
      })
    },
  },
};
</script>

<style scoped>
.login-card {
  border-radius: 10px;
  border: 5px solid #fe6415;
}
</style>


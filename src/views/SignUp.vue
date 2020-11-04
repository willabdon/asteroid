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
          >Welcome to Asteroid, after registering you can save your favourite
          asteroids.</b-card-text
        >
        <ValidationObserver ref="observer">
          <b-form
            slot-scope="{ validate }"
            @submit.prevent="validate().then(signup)"
          >
            <ValidationProvider rules="required" name="Name">
              <b-form-group slot-scope="{ valid, errors }">
                <b-form-input
                  type="text"
                  v-model="name"
                  placeholder="Name"
                  required
                  :state="errors[0] ? false : valid ? true : null"
                ></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider rules="required|email" name="Email">
              <b-form-group slot-scope="{ valid, errors }">
                <b-form-input
                  type="email"
                  v-model="email"
                  placeholder="Email"
                  :state="errors[0] ? false : valid ? true : null"
                ></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider rules="required|password:@confirm" name="Password" vid="password">
              <b-form-group slot-scope="{ valid, errors }">
                <b-form-input
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  :state="errors[0] ? false : valid ? true : null"
                ></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider rules="required" name="confirm" vid="confirm">
              <b-form-group slot-scope="{ valid, errors }">
                <b-form-input
                  type="password"
                  v-model="confirm"
                  placeholder="Confirm Password"
                  :state="errors[0] ? false : valid ? true : null"
                ></b-form-input>
                <b-form-invalid-feedback>
                  {{ errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>
            <b-card-text
              >Already have an account?
              <router-link to="/login">Sign in here!</router-link></b-card-text
            >
            <b-button variant="primary" type="submit">Sign Up</b-button>
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
      name: "",
      email: "",
      password: "",
      confirm: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    signup() {
      this.$store.dispatch("signup", {
        email: this.email,
        password: this.password,
        name: this.name,
      });
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


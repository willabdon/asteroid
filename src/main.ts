import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

let app: Vue
auth.onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

extend('required', required)
extend('email', email)
extend('password', {
  params: ['target'],
  // eslint-disable-next-line
  validate(value, { target }: any ) {
    return value === target;
  },
  message: 'Password confirmation does not match'
});
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(PerfectScrollbar)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

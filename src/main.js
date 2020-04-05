import Vue from 'vue'
import '@/assets/css/style.sass'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebaseVue from "./firebase"
import VuePureLightbox from 'vue-pure-lightbox'
import styles from 'vue-pure-lightbox/dist/VuePureLightbox.css'

Vue.use(firebaseVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  VuePureLightbox,
  styles,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


/* import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome)

library.add(faUserSecret)

library.add(faFontAwesome)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon) */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

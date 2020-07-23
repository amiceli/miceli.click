import Vue from 'vue';
import Eagle from 'eagle.js';
import App from './App.vue';
import router from './router';
import 'wenk';
import 'animate.css';

Vue.use(Eagle);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

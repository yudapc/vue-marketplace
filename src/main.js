import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router';  
import 'ant-design-vue/dist/antd.css';
import store from './store/index.js'

Vue.config.productionTip = false

Vue.use(Antd);

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')

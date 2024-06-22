import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
// import '/static/css/style.css';
// import '/static/css/animate.css';
// import '/static/css/swiper.min.css';

import GeminiScrollbar from 'vue-gemini-scrollbar' //滚动条优化
import service from '@/utils/fetch'


Vue.use(GeminiScrollbar)

Vue.prototype.service = service; //注册全局service

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  template:'<App/>',
  components: {
    App
  }
});

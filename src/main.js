// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
$.ajax({
  type: "get",
  async: false,
  url: "http://s.music.163.com/search/get",
  data: {
    type: 1,
    s: '喜欢你',
    limit: 10
  },
  dataType: "jsonp",
  success: function(data) {
    console.log(data)
  },
  error: function() {
    alert('fail');
  }
});

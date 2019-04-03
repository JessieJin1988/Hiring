// var say = require('./util');
// say();
import getData from './util';
import Vue from 'vue';

import './style/common.scss';
import App from './App.vue';

import './style/common.scss';

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
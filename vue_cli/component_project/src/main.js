import Vue from 'vue'
import App from './App.vue'
import CountersComponent from '@/components/CountersComponent';

Vue.config.productionTip = false
//global component
Vue.component('counters', CountersComponent);

new Vue({
  render: h => h(App),
}).$mount('#app')

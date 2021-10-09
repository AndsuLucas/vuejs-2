import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import NavComponent from '@/components/website/NavComponent';
import AppBarComponent from '@/components/website/AppBarComponent';
import ContentComponent from '@/components/website/ContentComponent';
import FooterComponent from '@/components/website/FooterComponent';

Vue.config.productionTip = false
Vue.component('nav-component', NavComponent);
Vue.component('appbar-component', AppBarComponent);
Vue.component('content-component', ContentComponent);
Vue.component('footer-component', FooterComponent);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

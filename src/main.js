import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import ContactDetailComponent from './components/ContactDetailComponent.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: HelloWorld},
    {path: '/contact/:id', name: 'detail', component: ContactDetailComponent}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

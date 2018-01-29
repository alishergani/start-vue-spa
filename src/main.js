import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contacts from './pages/Contacts.vue'
import Posts from './pages/Posts.vue'
import PostItem from './pages/PostItem.vue'


Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
	{ path: '/', component: Home},
	{ path: '/about', component: About},
	{ path: '/contacts', component: Contacts},
	{ path: '/posts', component: Posts},
	{ path: '/posts/:id', name: 'post', component: PostItem}
];
const router = new VueRouter({
	routes: routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})

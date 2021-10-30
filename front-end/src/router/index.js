import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Login from '../views/Login.vue'
import AddQuestions from  '../views/addQuestions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Game',
    name: 'Game',
    component: Game

  },
  {
    path: '/Login',
    name: 'Login',
    component: Login

  },
  {
    path: '/AddQuestions',
    name: 'AddQuestions',
    component: AddQuestions

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

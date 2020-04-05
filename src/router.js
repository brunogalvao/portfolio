import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Skill from './views/Skill.vue'
import Project from './views/Project.vue'
import About from './views/About.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/skill',
      name: 'skill',
      component: Skill
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    }
  ]
})

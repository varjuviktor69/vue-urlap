import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddUser from '../views/Post/AddUser.vue'
import AllUsers from '../views/Get/AllUsers.vue'
import UserByID from '../views/Get/UserByID.vue'
import Delete from '../views/Delete/Delete.vue'
import Put from '../views/Put/Put.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/adduser',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/allusers',
    name: 'AllUsers',
    component: AllUsers
  },
  {
    path: '/userbyid',
    name: 'UserByID',
    component: UserByID
  },
  {
    path: '/delete',
    name: 'Delete',
    component: Delete
  },
  {
    path: '/put',
    name: 'Put',
    component: Put
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

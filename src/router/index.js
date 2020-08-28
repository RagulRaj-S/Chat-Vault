import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Signup from '@/components/Signup'
import Chat from '@/components/Chat'
import firebase from 'firebase'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Index',
      component: Index,
      props:true,
      beforeEnter: (to,from,next) => {
        var user = firebase.auth().currentUser;
        if (user == null) {
          next({ name: 'Signup'})
        }
        else{
          next()
        }
      }
    },
    {
      path: '/',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/chat/:id',
      name: 'Chat',
      component: Chat,
      props:true,
      beforeEnter: (to,from,next) => {
        var user = firebase.auth().currentUser;
        if (user == null) {
          next({ name: 'Signup'})
        }
        else{
          next()
        }
      }
    }
  ]
})

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Resume from '../views/user/resume.vue';
import Welcome from '../views/welcome.vue';
import Delivery from '../views/user/deliver.vue'
import Success from '../views/user/success.vue'
import Search from '../views/user/search.vue';
import User from '../views/user/user.vue'
import Fill from '../views/interviewer/fill.vue'
import Check from '../views/interviewer/check.vue'
import Change from '../views/interviewer/change.vue'
import Login from '../views/interviewer/login.vue'
import Interviewer from '../views/interviewer.vue'
import Read from '../views/interviewer/read.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Welcome },
  { 
    path: '/user', 
    component: User,
    redirect: '/user/delivery',
    children: [
      { path: 'delivery', component: Delivery },
      { path: 'search', component: Search },
      { path: 'resume', component: Resume },

    ]
  },
  { 
    path: '/interviewer', 
    component: Interviewer,
    children: [
      { path: 'success', component: Success },
      { path: 'fill', component: Fill },
      { path: 'check', component: Check },
      { path: 'change', component: Change },
      { path: 'read', component: Read }
    ]
  },
  { path: '/login', component: Login },
  { path: '/success', component: Success },
  { path: '/fill', component: Fill },
  { path: '/check', component: Check },
  { path: '/change', component: Change },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

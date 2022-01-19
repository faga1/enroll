import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Resume from '../views/user/resume.vue';
import Welcome from '../views/welcome.vue';
import Delivery from '../views/user/deliver.vue'
import Success from '../views/user/success.vue'
import Search from '../views/user/search.vue';
import User from '../views/user/user.vue'
import Fill from '../views/interviewer/fill.vue'
import Check from '../views/interviewer/check.vue'
import Change from '../views/interviewer/change.vue'
import Admin from '../views/admin/admin.vue'
import Data from '../views/admin/data.vue'
import InterviewerMag from '../views/admin/interviewerMag.vue'
import projectMag from '../views/admin/projectMag.vue'
import ResumeMag from '../views/admin/resumeMag.vue'
import ChangeInterview from '../views/admin/changeInterview.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Welcome },
  { path: '/resume', component: Resume },
  { 
    path: '/user', 
    component: User,
    redirect: '/user/delivery',
    children: [
      { path: 'delivery', component: Delivery },
      { path: 'search', component: Search }
    ]
  },
  { path: '/success', component: Success },
  { path: '/fill', component: Fill },
  { path: '/check', component: Check },
  { path: '/change', component: Change },
  { 
    path: '/admin', 
    component: Admin,
    children: [
      { path: 'data', component: Data },
      { path: 'interviewerMag', component: InterviewerMag },
      { path: 'projectMag', component: projectMag },
      { path: 'resumeMag', component: ResumeMag },
      { path: 'changeInterview', component: ChangeInterview },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

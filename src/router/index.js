import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/index.vue';
import UserManagement from '@/views/user-management/index.vue';
import FinancialManagement from '@/views/financial-management/index.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/user-management',
    component: UserManagement,
  },
  {
    path: '/financial-management',
    component: FinancialManagement,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

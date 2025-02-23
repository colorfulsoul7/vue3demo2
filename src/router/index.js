import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/index.vue';
import UserManagement from '@/views/user-management/index.vue';
import FinancialManagement from '@/views/financial-management/index.vue';

export const routes = [
  {
    path: '/',
    component: Home,
    name: '主页'
  },
  {
    path: '/user-management',
    component: UserManagement,
    name: '用户管理'
  },
  {
    path: '/financial-management',
    component: FinancialManagement,
    name: '财务管理'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

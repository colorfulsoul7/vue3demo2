import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/index.vue';
import UserManagement from '@/views/user-management/index.vue';
import FinancialManagement from '@/views/financial-management/index.vue';
import AdministratorInfo from '@/views/administrator-info/index.vue';

export const routes = [
  {
    path: '/',
    name:'主页',
    component: Home,
  },
  {
    path: '/user-management',
    name:'用户管理',
    component: UserManagement,
  },
  {
    path: '/financial-management',
    name:'财务管理',
    component: FinancialManagement,
  },
  { path: '/administrator-ifo', 
    name:'管理员信息',
    component: AdministratorInfo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

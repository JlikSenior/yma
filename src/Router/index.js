import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../Home/HomePage.vue';
import CustomerManagement from '../CustomerManagement/CustomerManagement.vue';
import TechManagement from '../TechManagement/TechManagement.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/customer-management',
    name: 'CustomerManagement',
    component: CustomerManagement
  },
  {
    path: '/tech-management',
    name: 'TechManagement',
    component: TechManagement
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

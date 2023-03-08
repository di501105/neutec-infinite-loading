import { createRouter, createWebHistory } from 'vue-router';

const { BASE_URL } = import.meta.env;

const routerHistory = createWebHistory(BASE_URL);
const router = createRouter({
  history: routerHistory,
  routes: [],
});

export default router;

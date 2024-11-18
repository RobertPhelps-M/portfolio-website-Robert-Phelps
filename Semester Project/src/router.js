import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import PortfolioPage from './components/PortfolioPage.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/portfoliopage', name: 'Portfolio', component: PortfolioPage },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

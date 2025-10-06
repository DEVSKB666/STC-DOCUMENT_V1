import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import Users from '../pages/Usermanager.vue';
import Documents from '../pages/Documents.vue';
import Profile from '../pages/Profile.vue';
import Admin from '../pages/Admin.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import { useAuthStore } from '../store/auth';

const routes = [
  { path: '/', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/documents', component: Documents, meta: { requiresAuth: true } },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/admin', component: Admin, meta: { requiresAuth: true } },
  { path: '/users', component: Users, meta: { requiresAuth: true } },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];
const router = createRouter({ history: createWebHistory(), routes });
router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isAuthed) return next('/login');
  next();
});
export default router;

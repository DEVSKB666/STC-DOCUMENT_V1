<template>
  <section>
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl mt-3 font-semibold">Admin</h2>
      <span class="badge">Local-only settings</span>
    </div>
    <div class="card card-pad">
      <div class="flex items-center justify-between mb-4">
        <p class="text-gray-600 mb-4">Manage users (localStorage only).</p>
        <button class="btn-primary" @click="reset">รีเซ็ตข้อมูล</button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="u in users"
          :key="u.id"
          class="flex items-center justify-between border rounded-xl p-3 mb-2 bg-white"
        >
          <div>
            <p class="font-medium">{{ u.username }}</p>
            <p class="text-xs text-gray-500">{{ u.email }}</p>
          </div>
          <span class="text-xs px-2 py-1 rounded-lg bg-brand-100 text-gray-900">
            {{ u.role }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../store/auth';
const auth = useAuthStore();
const users = ref([]);
function load() {
  users.value = auth.listUsers();
}
function reset() {
  localStorage.removeItem('stc_docs');
  localStorage.removeItem('stc_users');
  localStorage.removeItem('stc_user');
  localStorage.removeItem('stc_token');
  auth.$reset?.();
  window.location.reload();
}
onMounted(load);
</script>

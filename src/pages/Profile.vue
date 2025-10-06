<template>
  <section class="max-w-7xl">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-2xl mt-3 font-semibold mb-4">EditProfile</h2>
      <div class="badge">
        <span class="h-2 w-2 rounded-full bg-brand-400"></span>
        แก้ไขข้อมูลส่วนตัว
      </div>
    </div>
    <div class="card card-pad shadow-md">
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm text-gray-500">Username</label>
          <input v-model="form.username" class="input" />
        </div>
        <div>
          <label class="block text-sm text-gray-500">Email</label>
          <input v-model="form.email" class="input" />
        </div>
      </div>
      <div class="mt-4">
        <label class="block text-sm text-gray-500">New Password</label>
        <input v-model="form.password" type="password" class="input" />
      </div>
      <div class="mt-4 flex justify-center">
        <button @click="save" class="btn-primary w-full">บันทึกข้อมูล</button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '../store/auth';
const auth = useAuthStore();
const form = reactive({
  username: auth.user?.username || '',
  email: auth.user?.email || '',
  password: '',
});
function save() {
  const LS_USERS = 'stc_users';
  const users = JSON.parse(localStorage.getItem(LS_USERS) || '[]');
  const idx = users.findIndex((u) => u.username === auth.user?.username);
  if (idx !== -1) {
    users[idx].username = form.username || users[idx].username;
    users[idx].email = form.email || users[idx].email;
    if (form.password) users[idx].password = form.password;
    localStorage.setItem(LS_USERS, JSON.stringify(users));
    auth.user = {
      ...auth.user,
      username: users[idx].username,
      email: users[idx].email,
    };
    localStorage.setItem('stc_user', JSON.stringify(auth.user));
    alert('Profile updated');
  } else alert('User not found');
}
</script>

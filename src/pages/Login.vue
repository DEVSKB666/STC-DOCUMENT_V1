<template>
  <div class="flex items-center justify-center bg-gray-50 p-4">
    <div class="card card-pad w-full max-w-md">
      <div class="flex items-center gap-2 mb-4">
        <span class="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-brand-400 text-gray-900 font-bold">S</span>
        <h2 class="text-xl font-semibold">เข้าสู่ระบบ</h2>
      </div>
      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label class="block mb-2 text-sm text-gray-600">Username</label>
          <input v-model="form.username" class="input" required/>
        </div>
        <div>
          <label class="block mb-2 text-sm text-gray-600">Password</label>
          <input v-model="form.password" type="password" class="input" required/>
        </div>
        <button class="btn-primary w-full">Continue</button>
      </form>
      <p class="text-xs text-gray-500 mt-3">Tip: admin / admin</p>
      <p class="text-xs text-gray-500 mt-1">ไม่มีบัญชี? <RouterLink to="/register" class="underline">Register</RouterLink></p>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '../store/auth'
const router = useRouter(); const auth = useAuthStore()
const form = reactive({ username: '', password: '' })
async function submit(){ try { await auth.login(form); router.push('/') } catch(e){ alert('Login failed') } }
</script>

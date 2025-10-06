<template>
  <div class="flex items-center justify-center bg-gray-50 p-4">
    <div class="card card-pad w-full max-w-md">
      <div class="flex items-center gap-2 mb-4">
        <span class="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-brand-400 text-gray-900 font-bold">S</span>
        <h2 class="text-xl font-semibold">สร้างบัญชี</h2>
      </div>
      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label class="block mb-2 text-sm text-gray-600">Username</label>
          <input v-model="form.username" class="input" required/>
        </div>
        <div>
          <label class="block mb-2 text-sm text-gray-600">Email</label>
          <input v-model="form.email" type="email" class="input" required/>
        </div>
        <div>
          <label class="block mb-2 text-sm text-gray-600">Password</label>
          <input v-model="form.password" type="password" class="input" required/>
        </div>
        <button class="btn-primary w-full">Create account</button>
      </form>
      <p class="text-xs text-gray-500 mt-3">มีบัญชีอยู่แล้ว? <RouterLink to="/login" class="underline">Login</RouterLink></p>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useAuthStore } from '../store/auth'
const router = useRouter(); const auth = useAuthStore()
const form = reactive({ username: '', email: '', password: '' })
async function submit(){ try { await auth.register(form); alert('Registered! Login now.'); router.push('/login') } catch(e){ alert(e?.message || 'Failed') } }
</script>

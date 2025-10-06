<template>
  <aside
    class="fixed top-14 bottom-0 left-0 z-40 w-64 bg-white border-r border-gray-200 shadow-sm transform transition-transform duration-300 ease-in-out"
    :class="open ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="flex flex-col h-full">
      <div class="p-4 border-b border-gray-100">
        <div class="p-3 bg-yellow-50 text-yellow-700 rounded-xl text-sm border border-yellow-100">
            STC Document
        </div>
      </div>

      <nav class="flex-1 px-3 space-y-1 mt-2">
        <RouterLink
          v-for="link in links"
          :key="link.name"
          :to="link.to"
          class="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-yellow-100 transition"
          :class="{ 'bg-yellow-100 font-semibold': $route.path === link.to }"
          @click="handleLinkClick"
        >
          {{ link.name }}
        </RouterLink>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({ open: Boolean })
const emit = defineEmits(['close'])

const links = [
  { name: 'หน้าหลัก', to: '/' },
  { name: 'ส่งเอกสาร', to: '/documents' },
  { name: 'ผู้ใช้งาน', to: '/users' },
  { name: 'แก้ไขข้อมูลส่วนตัว', to: '/profile' },
  { name: 'Admin', to: '/admin' },
]

// ✅ ปิดเฉพาะบน mobile
function handleLinkClick() {
  if (window.innerWidth < 768) {
    emit('close')
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
    <!-- Header -->
    <header
      class="fixed top-0 left-0 w-full h-14 bg-white border-b z-50 flex items-center justify-between px-2 shadow-sm"
    >
      <button
        class="p-2 rounded-lg hover:bg-black-100 transition-colors"
        @click="sidebarOpen = !sidebarOpen"
        aria-label="Toggle sidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-gray-700"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>

      <div class="flex items-center gap-2">
        <span
          class="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-yellow-400 text-gray-900 font-bold"
          >S</span
        >
        <span class="font-semibold text-gray-800">STC Document</span>
      </div>

      <button
        class="ml-auto flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow transition"
        @click="logout"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
          />
        </svg>
        Logout
      </button>
    </header>

    <!-- Sidebar -->
    <Sidebar :open="sidebarOpen" @close="sidebarOpen = false" />

    <!-- Overlay -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black/40 z-30 md:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- Main -->
    <div
      class="flex-1 flex transition-all duration-300"
      :class="sidebarOpen ? 'md:pl-64' : 'md:pl-0'"
    >
      <main class="flex-1 pt-16 px-6 md:px-8 mx-auto w-full max-w-6xl">
        <router-view />
      </main>
    </div>

    <footer class="shadow-lg border-yellow-200 bg-white py-4">
      <div
        class="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-600"
      >
        <p></p>
        <p class="text-yellow-600 font-medium">
          STC DOCUMENT 💛 <span class="font-semibold">VERSION 1.0</span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Sidebar from './components/Sidebar.vue';
const sidebarOpen = ref(true);
onMounted(() => {
  if (window.matchMedia('(max-width: 768px)').matches)
    sidebarOpen.value = false;
});

function logout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}
</script>

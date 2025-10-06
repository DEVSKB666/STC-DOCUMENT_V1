<template>
  <section>
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-2xl mt-3 font-semibold">Dashboard</h2>
      <div class="badge">
        <span class="h-2 w-2 rounded-full bg-brand-400"></span>
        แดชบอร์ด
      </div>
    </div>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="kpi relative rounded-xl p-5">
        <span class="absolute top-3 right-3 text-brand-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>
        </span>
        <p class="text-sm text-gray-600">ผู้ใช้งาน</p>
        <p class="mt-1 text-3xl font-bold">{{ docs.items.length }}</p>
      </div>
      <div class="kpi relative">
        <span class="absolute top-3 right-3 text-brand-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>
        </span>
        <p class="text-sm text-gray-600">ผู้ใช้งานที่ถูกยกเลิกการใช้งาน</p>
        <p class="mt-1 text-3xl font-bold">{{ docs.items.length }}</p>
      </div>
      <div class="kpi relative">
        <span class="absolute top-3 right-3 text-brand-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
            />
          </svg>
        </span>
        <p class="text-sm text-gray-600">จำนวนการส่งเอกสาร</p>
        <p class="mt-1 text-3xl font-bold">{{ docs.items.length }}</p>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-md p-6 mt-3 mb-3">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-lg font-semibold text-gray-800">
          จัดการผู้ใช้งาน
          <p class="text-sm text-gray-400">User Manager</p>
        </h4>
      </div>
      <div class="relative overflow-x-auto rounded-lg">
        <table class="w-full text-sm text-left text-gray-700">
          <thead class="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th scope="col" class="px-6 py-3 rounded-tl-lg">ลำดับ</th>
              <th scope="col" class="px-6 py-3">เอกสาร</th>
              <th scope="col" class="px-6 py-3">ผู้ส่ง</th>
              <th scope="col" class="px-6 py-3">ผู้รับ</th>
              <th scope="col" class="px-6 py-3">สถานะ</th>
              <th scope="col" class="px-6 py-3">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b hover:bg-gray-50 transition">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                1
              </th>
              <td class="px-6 py-4">Microsoft</td>
              <td class="px-6 py-4">Admin</td>
              <td class="px-6 py-4">User</td>
              <td class="px-6 py-4">ส่งแล้ว</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted } from 'vue';
import { useDocStore } from '../store/docs';
import { useAuthStore } from '../store/auth';
const docs = useDocStore();
const auth = useAuthStore();
onMounted(() => docs.fetchDocuments());
</script>

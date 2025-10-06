<template>
  <section>
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-2xl mt-3 font-semibold">Users Active</h2>
      <div class="badge">
        <span class="h-2 w-2 rounded-full bg-brand-200"></span>
        จัดการผู้ใช้งาน
      </div>
    </div>

    <div class="card card-pad rounded-xl shadow-md p-6 mt-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-semibold text-gray-800">จัดการผู้ใช้งาน</h2>
        <button
          @click="openAddUser"
          class="flex items-center gap-2 px-4 py-2 bg-brand-400 hover:bg-brand-500 text-white font-semibold rounded-lg shadow transition"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          เพิ่มผู้ใช้
        </button>
      </div>
      <div class="relative overflow-x-auto rounded-lg">
        <table class="w-full text-sm text-left text-gray-700">
          <thead class="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th scope="col" class="px-6 py-3 rounded-tl-lg">ลำดับ</th>
              <th scope="col" class="px-6 py-3">ไอดีผู้ใช้</th>
              <th scope="col" class="px-6 py-3">ชื่อผู้ใช้</th>
              <th scope="col" class="px-6 py-3">อีเมล์</th>
              <th scope="col" class="px-6 py-3">สถานะ</th>
              <th scope="col" class="px-6 py-3">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, idx) in users"
              :key="user.id"
              class="bg-white border-b hover:bg-gray-50 transition"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {{ idx + 1 }}
              </th>
              <td class="px-6 py-4">{{ user.id }}</td>
              <td class="px-6 py-4">{{ user.name }}</td>
              <td class="px-6 py-4">{{ user.email }}</td>
              <td class="px-6 py-4">
                <span
                  :class="[
                    'inline-block px-2 py-1 rounded text-xs font-semibold',
                    user.status === 'ยืนยันแล้ว'
                      ? 'bg-green-100 text-green-700 rounded-lg'
                      : user.status === 'รอยืนยัน'
                      ? 'bg-yellow-100 text-yellow-700 rounded-lg'
                      : 'bg-gray-100 text-gray-700',
                  ]"
                >
                  {{ user.status }}
                </span>
              </td>
              <td class="px-6 py-4 flex gap-2">
                <button
                  @click="openEditUser(idx)"
                  class="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                >
                  Edit
                </button>
                <button
                  @click="deleteUser(idx)"
                  class="inline-block px-3 py-1 text-xs font-semibold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Popup Add/Edit User -->
    <div
      v-if="showAddUser"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <div class="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button
          @click="closeUserForm"
          class="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h3 class="text-xl font-semibold mb-4 text-gray-800">
          {{ editIndex === null ? 'เพิ่มผู้ใช้งาน' : 'แก้ไขผู้ใช้งาน' }}
        </h3>
        <form @submit.prevent="saveUser" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >ไอดีผู้ใช้</label
            >
            <input
              v-model="form.id"
              type="text"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-brand-400 focus:border-brand-400"
              required
              :readonly="editIndex !== null"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >ชื่อผู้ใช้</label
            >
            <input
              v-model="form.name"
              type="text"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-brand-400 focus:border-brand-400"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >อีเมล์</label
            >
            <input
              v-model="form.email"
              type="email"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-brand-400 focus:border-brand-400"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >สถานะ</label
            >
            <select
              v-model="form.status"
              class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-brand-400 focus:border-brand-400"
              required
            >
              <option value="">เลือกสถานะ</option>
              <option value="ยืนยันแล้ว">ยืนยันแล้ว</option>
              <option value="รอยืนยัน">รอยืนยัน</option>
            </select>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-4 py-2 bg-brand-400 hover:bg-brand-500 text-white rounded-lg font-semibold transition"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showAddUser = ref(false);
const editIndex = ref(null);
const form = ref({
  id: '',
  name: '',
  email: '',
  status: '',
});

// โหลด users จาก localStorage หรือใช้ค่าเริ่มต้น
const users = ref([]);

onMounted(() => {
  const saved = localStorage.getItem('users');
  if (saved) {
    users.value = JSON.parse(saved);
  } else {
    users.value = [
      {
        id: '001',
        name: 'Admin',
        email: 'admin@email.com',
        status: 'ยืนยันแล้ว',
      },
    ];
    localStorage.setItem('users', JSON.stringify(users.value));
  }
});

function openAddUser() {
  editIndex.value = null;
  form.value = { id: '', name: '', email: '', status: '' };
  showAddUser.value = true;
}

function openEditUser(idx) {
  editIndex.value = idx;
  form.value = { ...users.value[idx] };
  showAddUser.value = true;
}

function closeUserForm() {
  showAddUser.value = false;
  editIndex.value = null;
  form.value = { id: '', name: '', email: '', status: '' };
}

function saveUser() {
  if (editIndex.value === null) {
    users.value.push({ ...form.value });
  } else {
    users.value[editIndex.value] = { ...form.value };
  }
  localStorage.setItem('users', JSON.stringify(users.value));
  closeUserForm();
}

function deleteUser(idx) {
  if (confirm('ต้องการลบผู้ใช้นี้ใช่หรือไม่?')) {
    users.value.splice(idx, 1);
    localStorage.setItem('users', JSON.stringify(users.value));
  }
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>

<template>
  <section>
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl mt-3 font-semibold">Documents</h2>
      <div class="badge">
        <span class="h-2 w-2 rounded-full bg-brand-400"></span>
        ส่งเอกสาร
      </div>
    </div>
    <!-- Card Form -->
    <div class="card card-pad mb-6 shadow-md">
      <form @submit.prevent="upload" class="space-y-4">
        <div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
            >เลือกผู้ใช้งาน</label
          >
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>เลือกผู้รับเอกสาร</option>
            <option value="1">1</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-900 mb-1"
            >แนบเอกสาร</label
          >
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2"
            id="file_input"
            type="file"
          />
        </div>
        <div class="flex justify-center w-full">
          <button
            class="w-full max-w-xs px-4 py-2 bg-brand-400 text-white rounded-xl hover:bg-brand-500 transition"
            :disabled="!canUpload"
          >
            ส่งเอกสาร
          </button>

        </div>
      </form>
    </div>
    <div v-if="docs.loading" class="text-gray-500">Loading...</div>
    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <article v-for="d in docs.items" :key="d.id" class="card card-pad">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="font-semibold truncate">{{ d.title || d.filename }}</h3>
            <p class="text-sm text-gray-500">
              Uploaded: {{ d.created_at || '-' }}
            </p>
          </div>
          <span class="h-2 w-2 rounded-full bg-brand-400 mt-2"></span>
        </div>
        <div class="mt-3 flex gap-2">
          <a :href="d.url" target="_blank" class="btn-ghost">Open</a>
          <button @click="remove(d.id)" class="btn-danger">Delete</button>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useDocStore } from '../store/docs';

// เพิ่ม mock รายชื่อผู้ใช้ (ควรเปลี่ยนเป็นดึงจาก API จริง)
const users = ref([
  { id: 1, name: 'สมชาย' },
  { id: 2, name: 'สมหญิง' },
  { id: 3, name: 'John Doe' },
]);
const selectedUser = ref('');

const docs = useDocStore();
const fileInput = ref(null);
onMounted(() => docs.fetchDocuments());

const canUpload = computed(
  () => fileInput.value?.files?.length && selectedUser.value
);

async function upload() {
  if (!fileInput.value?.files?.length || !selectedUser.value) return;
  // ส่ง selectedUser.value ไปกับไฟล์ด้วย (ปรับตาม API)
  await docs.uploadDocument(fileInput.value.files[0], selectedUser.value);
  fileInput.value.value = '';
  selectedUser.value = '';
}
async function remove(id) {
  if (confirm('Delete this document?')) await docs.deleteDocument(id);
}
</script>

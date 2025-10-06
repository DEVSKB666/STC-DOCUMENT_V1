<template>
  <RouterLink
    :to="to"
    class="group flex items-center gap-3 px-3 py-2 rounded-xl transition-colors"
    :class="isActive ? 'bg-brand-100 text-gray-900' : 'text-gray-700 hover:bg-brand-50 hover:text-gray-900'"
  >
    <span class="inline-flex items-center justify-center h-8 w-8 rounded-lg"
          :class="isActive ? 'bg-brand-200' : 'bg-gray-100 group-hover:bg-brand-100'">
      <component :is="Icon" class="h-4 w-4" />
    </span>
    <span class="font-medium">{{ label }}</span>
  </RouterLink>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
const props = defineProps({ to: [String, Object], label: String, icon: { type: String, default: 'dot' } })
const route = useRoute()
const currentPath = computed(() => (typeof props.to === 'string' ? props.to : props.to.path || props.to))
const isActive = computed(() => route.path === currentPath.value)
const icons = {
  home:  { template: '<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"h-4 w-4\"><path d=\"M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.5Z\"/></svg>' },
  doc:   { template: '<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"h-4 w-4\"><path d=\"M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z\"/><path d=\"M14 3v6h6\"/></svg>' },
  user:  { template: '<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"h-4 w-4\"><circle cx=\"12\" cy=\"7\" r=\"4\"/><path d=\"M4 21a8 8 0 0 1 16 0\"/></svg>' },
  shield:{ template: '<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" class=\"h-4 w-4\"><path d=\"M12 3l7 4v5c0 5-3.6 8.7-7 9-3.4-.3-7-4-7-9V7l7-4Z\"/></svg>' },
  dot:   { template: '<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"h-2.5 w-2.5\"><circle cx=\"12\" cy=\"12\" r=\"4\"/></svg>' }
}
const Icon = computed(() => icons[props.icon] || icons.dot)
</script>

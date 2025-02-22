<script setup>
import { computed } from 'vue';
import DeviceAccessPreview from './DeviceAccessPreview.vue';
import Category from './preview/Category.vue';
import EditTask from './preview/EditTask.vue';
import RemindersPreview from './RemindersPreview.vue';
import SyncCloudPreview from './SyncCloudPreview.vue';
import TaskManagementPreview from './TaskManagementPreview.vue';

const props = defineProps({
  selectedItemId: {
    type: String,
    required: true
  }
});

const previewComponents = {
  'sync-cloud': SyncCloudPreview,
  'task-management': TaskManagementPreview,
  'edit-tasks': EditTask,
  'categories': Category,
  'reminders': RemindersPreview
};

const currentPreviewComponent = computed(() => {
  return previewComponents[props.selectedItemId] || null;
});
</script>

<template>
  <div>
    <div class="sticky top-20">
      <div class="relative ">
        <!-- Imagen de fondo -->
        <img width="400" height="400" src="/image/peak-bg.png"
          class="rounded-xl object-contain aspect-square w-full h-full" />

        <!-- Elemento superpuesto (esquina inferior derecha) -->
        <div class="absolute bottom-0 right-0 w-[90%] h-[90%] bg-gray-900/50 rounded-tl-xl rounded-br-xl aspect-square">
        </div>

        <!-- Componente dinámico -->
        <component :is="currentPreviewComponent"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>

  </div>
</template>
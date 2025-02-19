<template>
  <button @click="downloadApk"
    :class="['flex gap-1.5 items-center font-semibold bg-violet-500 shadow-xs justify-center text-white p-2 rounded-lg hover:bg-violet-600', className]">
    <p>Descargar</p>
    <Icon name="heroicons:arrow-down-tray-16-solid" size="16" />
  </button>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  }
});
</script>
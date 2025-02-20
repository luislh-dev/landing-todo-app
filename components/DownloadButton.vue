<template>
  <button @click="handleDownload"
    :class="['flex gap-1.5 items-center font-semibold bg-fuchsia-600 shadow-xs justify-center text-white p-2 rounded-3xl hover:bg-fuchsia-600/80', className]">
    Descargar
  </button>
</template>

<script setup>
import JSConfetti from 'js-confetti';

defineProps({
  className: {
    type: String,
    default: ''
  }
});

let jsConfetti;

onMounted(() => {
  jsConfetti = new JSConfetti();
});

const handleDownload = () => {
  jsConfetti.addConfetti();
  downloadApk();
};

</script>
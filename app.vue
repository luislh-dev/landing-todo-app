<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'es'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Todo App` : 'Todo App';
  },
  meta: [
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'description', content: 'Todo App es una aplicación de gestión de tareas que te permite organizar tu día a día de forma eficiente. Con Todo App, podrás añadir tareas, categorizarlas, establecer recordatorios y sincronizar tus datos en la nube.' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

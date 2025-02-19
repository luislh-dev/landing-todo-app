<template>
  <section class="container-default py-4 my-2 lg:my-20">
    <div class="flex flex-wrap lg:flex-nowrap gap-6 items-center w-full">
      <!-- Contenedor de texto -->
      <div class="w-full lg:w-1/2 ">
        <h1 class="text-4xl font-bold text-gray-800">¡Bienvenido a TodoApp!</h1>
        <p class="text-lg text-gray-600 mt-2">La aplicación de tareas que necesitas para organizar tu día a día.</p>
        <div class="mt-4">
          <DownloadButton class="w-40" />
        </div>
      </div>
      <!-- Contenedor de imagen -->
      <div class="w-full lg:w-1/2 flex justify-end">
        <NuxtImg src="/hero.svg" alt="TodoApp" height="778" width="555" class="max-w-full" />
      </div>
    </div>
  </section>
</template>

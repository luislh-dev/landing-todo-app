<template>
  <section class="container-default">
    <div class="flex flex-wrap lg:flex-nowrap gap-6 w-full">
      <!-- Prewiew -->
      <div class="w-full lg:w-1/2">
        <div class="flex justify-end sticky top-32 w-[600px] h-[600px]">
          <img width="500" height="500" src="/image/peak-bg.png" 
          class="rounded-xl object-cover w-full h-full"/>
        </div>
      </div>

      <!-- Caracteristicas -->
      <div class="w-full lg:w-1/2 mt-20">
        <div class="space-y-10 mx-auto max-w-lg">
          <h2 class="text-4xl font-bold text-gray-800">Gestiona, estructura y completa tus tareas</h2>
          <p class="text-lg text-gray-500 font-medium">
            No te dejes engañar por el diseño minimalista de TodoApp: la aplicación cuenta con todas las
            herramientas necesarias para crear y optimizar cualquier flujo de trabajo.
          </p>
          <AccordionFeature />
        </div>
      </div>
    </div>
  </section>
</template>
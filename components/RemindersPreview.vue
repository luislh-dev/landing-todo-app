<template>
  <div
    class="bg-white p-4 xl:p-6 rounded-xl shadow-lg w-[360px] lg:w-[400px] 2xl:w-[580px] text-sm lg:text-base 2xl:text-2xl space-y-2">
    <div class="text-gray-900">Asistir al dentista.</div>
    <!-- Texto de la fecha y hora -->
    <div class="text-gray-500 responsive-text">Vie, 21 de feb. de
      2025, 10:00
      a.m.</div>

    <!-- Etiqueta de recordar-->
    <div
      class="flex items-center gap-2 responsive-text text-gray-500 border max-w-min whitespace-nowrap p-0.5 rounded-xl">
      <Icon name="heroicons:bell-alert-solid" class="h-3 w-3 lg:h-4 lg:w-4 2xl:h-5 2xl:w-5" />
      <div>40m antes</div>
      <Icon name="heroicons:x-mark-solid" class="h-3 w-3 lg:h-4 lg:w-4 2xl:h-5 2xl:w-5" />
    </div>
    <div class="flex items-center justify-between gap-2 responsive-text">
      <div class="flex items-center gap-4">
        <div class="py-1 px-4 text-white bg-blue-600 rounded-full">Salud</div>
        <div class="flex items-center" aria-hidden="true">
          <Icon name="heroicons:bars-3-bottom-left-16-solid" class="h-5 w-5 lg:h-6 lg:w-6 2xl:h-7 2xl:w-7" />
        </div>
        <div class="flex items-center" aria-hidden="true">
          <Icon name="heroicons:clock" class="h-5 w-5 lg:h-6 lg:w-6 2xl:h-7 2xl:w-7" />
        </div>
      </div>
      <div class="text-fuchsia-700 ">Agregar</div>
    </div>
  </div>
</template>

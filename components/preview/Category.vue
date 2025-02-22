<template>
  <div>
    <div
      class="bg-white p-6 rounded-xl shadow-lg w-[360px] lg:w-[400px] 2xl:w-[580px] text-sm lg:text-base 2xl:text-2xl space-y-2 lg:space-y-4">
      <div class="text-gray-900">Asistir al dentista.</div>
      <div class="flex items-center justify-between gap-2 text-xs lg:text-base 2xl:text-lg">
        <div class="flex items-center gap-4 relative">
          <div class="py-1 px-4 text-white bg-blue-600 rounded-full cursor-default">
            Sin Categoría
          </div>

          <div class="absolute top-10 left-0 bg-white shadow-lg rounded-lg w-40 text-gray-900 p-1 lg:p-2 z-10">
            <div class="p-2">Trabajo</div>
            <div class="p-2">Personal</div>
            <div class="p-2 relative bg-gray-200 rounded-lg">
              Salud
              <div class="absolute inset-0 left-4 flex items-center justify-center">
                <div
                  class="w-7 h-7 lg:w-8 lg:h-8 2xl:w-9 2xl:h-9 border-2 border-fuchsia-400 rounded-full bg-transparent">
                </div>
              </div>
            </div>
            <div class="p-2">Hogar</div>
          </div>

          <div class="flex items-center" aria-hidden="true">
            <Icon name="heroicons:bars-3-bottom-left-16-solid" class="h-5 w-5 lg:h-6 lg:w-6 2xl:h-7 2xl:w-7" />
          </div>
          <div class="flex items-center" aria-hidden="true">
            <Icon name="heroicons:clock" class="h-5 w-5 lg:h-6 lg:w-6 2xl:h-7 2xl:w-7" />
          </div>
        </div>
        <div class="text-fuchsia-700">Agregar</div>
      </div>
    </div>
  </div>
</template>

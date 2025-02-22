<template>
  <div>
    <div
      class="bg-white p-4 lg:p-6 rounded-xl shadow-lg w-[360px] lg:w-[400px] 2xl:w-[580px] responsive-text-xl space-y-2 lg:space-y- text-slate-600">
      <div>
        <div class="flex items-center gap-2 justify-between">
          <div class="flex items-center gap-2">
            <Icon name="heroicons:tag-16-solid" class="text-green-400" />
            <p>Salud</p>
          </div>
          <Icon name="heroicons:chevron-down-16-solid" />
        </div>
        <div class="text-black">
          Asistir al dentista
        </div>
        <div class="flex items-center gap-2">
          <Icon name="heroicons:bars-3-bottom-left-16-solid" />
          <div class="flex items-center">
            <span class="responsive-text">el doctor se llama r</span>
            <span class="text-lg lg:text-xl 2xl:text-2xl text-fuchsia-500">|</span>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200" />

      <div class="flex items-center gap-2 justify-between">
        <div class="flex items-center gap-2">
          <Icon name="heroicons:calendar-16-solid" />
          <span class="responsive-text">Vie, 21 de feb. de 2025, 10:00 a.m.</span>
        </div>
        <Icon name="heroicons:chevron-down-16-solid" />
      </div>
    </div>
  </div>
</template>

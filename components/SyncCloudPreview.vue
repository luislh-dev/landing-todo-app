<template>
  <div>
    <div
      class="bg-white p-6 rounded-lg shadow-lg w-[360px] lg:w-[400px] 2xl:w-[580px] space-y-2 text-sm lg:text-base 2xl:text-2xl">
      <div class="flex items-center justify-between pb-4">
        <div class="flex items-center gap-2">
          <Icon name="heroicons:arrow-path-16-solid" class="text-fuchsia-600" />
          <h3 class="font-bold text-gray-800">Sincronización automática</h3>
        </div>
        <!-- toggle decorativo-->
        <div className="relative inline-flex items-center">
          <div className="w-14 h-8 bg-fuchsia-600 rounded-full">
            <div
              className="absolute left-8 top-2 w-4 h-4 bg-white rounded-full transition-all duration-300 ease-in-out">
            </div>
          </div>
        </div>
      </div>
      <div class="h-[15px] bg-gray-200 rounded-lg" />
      <div class="h-[15px] bg-gray-200 rounded-lg" />
      <div class="h-[15px] w-[300px] bg-gray-200 rounded-lg" />
    </div>
  </div>
</template>
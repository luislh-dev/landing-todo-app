<template>
  <div>
    <div
      class="bg-white p-6 rounded-lg shadow-lg w-[360px] lg:w-[400px] 2xl:w-[580px] space-y-2 text-sm lg:text-base 2xl:text-2xl">
      <div class="flex items-center justify-between pb-1 lg:pb-2 2xl:pb-3">
        <div class="flex items-center gap-2">
          <Icon name="heroicons:arrow-path-16-solid" class="text-fuchsia-600" />
          <div class="font-bold text-gray-800">Sincronización automática</div>
        </div>
        <!-- toggle decorativo-->
        <div className="relative inline-flex items-center">
          <div className="w-9 h-5 lg:w-12 lg:h-6 2xl:w-16 2xl:h-8 bg-fuchsia-600 rounded-full">
            <div
              className="absolute left-5 lg:left-7 2xl:left-10 top-1 lg:top-1 2xl:top-2 w-3 lg:w-4 2xl:w-4 h-3 lg:h-4 2xl:h-4 bg-white rounded-full transition-all duration-300 ease-in-out">
            </div>
          </div>
        </div>
      </div>
      <div class="h-2 lg:h-3 2xl:h-[15px] bg-gray-200 rounded-lg" />
      <div class="h-2 lg:h-3 2xl:h-[15px] bg-gray-200 rounded-lg" />
      <div class="h-2 lg:h-3 2xl:h-[15px] w-1/2 bg-gray-200 rounded-lg" />
    </div>
  </div>
</template>
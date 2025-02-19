<template>
  <header class="sticky top-0 text-sm bg-white">
    <div class="container-default py-4 flex justify-between items-center">
      <nav>
        <ul class="flex gap-4">
          <li>
            <a href="#caracteristicas" class="p-2 rounded-lg hover:bg-gray-300/25">Características</a>
          </li>
          <li>
            <a href="#vistas" class="p-2 rounded-lg hover:bg-gray-300/25">Vistas</a>
          </li>
        </ul>
      </nav>

      <NuxtLink href="/">
        <img src="/logo.svg" alt="TodoApp" />
      </NuxtLink>

      <button @click="downloadApk"
        class="flex gap-1.5 items-center justify-center text-violet-600 hover:bg-violet-600/10 p-2 rounded-lg">
        <p>Descargar</p>
        <Icon name="heroicons:arrow-down-tray-16-solid" size="16" />
      </button>
    </div>
  </header>
</template>
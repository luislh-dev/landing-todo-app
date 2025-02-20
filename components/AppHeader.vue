<template>
  <header class="text-sm">
    <div class="container-default py-4 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <NuxtLink href="/">
          <img src="/logo.svg" alt="TodoApp" />
        </NuxtLink>
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
      </div>

      <DownloadButton class="w-32" />
    </div>
  </header>
</template>

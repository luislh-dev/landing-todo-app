<template>
  <footer class="border-t border-gray-200 mt-20">
    <div class="container-default mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row gap-6 items-center justify-center">

        <!-- Derechos de autor -->
        <p class="text-gray-600 text-sm order-2 md:order-1 text-center md:text-left md:w-1/3">
          &copy; 2025 TodoApp. Todos los derechos reservados
        </p>

        <!-- Créditos de desarrollo -->
        <div class="flex items-center justify-center gap-2 order-1 md:order-2 md:w-1/3">
          <div class="flex items-center gap-1 bg-slate-200 px-3 py-1.5 rounded-lg">
            <span class="text-gray-600 text-sm">Hecho con</span>
            <Icon name="bx:bxl-vuejs" class="h-5 w-5 text-green-600 hover:text-green-700 transition-colors"
              aria-label="Vue.js" />
            <span class="text-gray-600 text-sm">por</span>
            <a class="text-gray-700 font-medium text-sm underline" href="https://luislh.dev" aria-label="Luislh"
              target="_blank" rel="noopener noreferrer">Luislh</a>
          </div>
        </div>

        <!-- Enlace GitHub -->
        <div class="order-3 md:order-3 md:w-1/3 flex items-center justify-center md:justify-end gap-2">
          <p class="text-gray-600 text-sm">Repositorio en</p>
          <a class="p-1 hover:bg-gray-300/50 rounded-xl transition-colors flex items-center"
            href="https://github.com/luislh-dev/Todo-App" target="_blank" rel="noopener noreferrer"
            aria-label="Repositorio en GitHub">
            <Icon name="bxl:github" class="h-6 w-6 text-gray-700" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
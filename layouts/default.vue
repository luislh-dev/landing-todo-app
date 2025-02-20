<template>
  <div class="bg-hero-pattern bg-cover bg-center min-h-screen flex flex-col">
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
  <AppFooter />
</template>

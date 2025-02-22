<template>
  <div class="flex flex-col gap-10 items-center">
    <!-- Navegación de tabs -->
    <nav class="flex gap-4">
      <button v-for="(tab, index) in tabs" :key="index"
        class="py-3 px-6 p-4 rounded-xl border border-gray-200 shadow-md flex  items-center"
        :class="activeTab === index ? 'bg-fuchsia-500 text-white cursor-default' : 'text-gray-600 bg-white'"
        @click="setActiveTab(index)">
        <Icon :name="tab.icon" class="mr-2 w-5 h-5" />
        {{ tab.title }}
      </button>
    </nav>

    <!-- Contenido de tabs -->
    <div>
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
        <img :src="tab.image" alt="Imagen de fondo" class="rounded-xl " />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsHorizontal',
  data() {
    return {
      activeTab: 0,
      tabs: [
      { title: 'Calendario',  icon: 'heroicons:calendar-days-solid', image: '/image/main.webp' },
        { title: 'Lista', icon: 'heroicons:queue-list-solid', image: '/image/list.webp' }
      ]
    }
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index
    }
  }
}
</script>

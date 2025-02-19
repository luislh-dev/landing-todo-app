<script setup>
import { ref } from 'vue';

const openItem = ref('sync-cloud');

const accordionItems = [
  {
    id: 'sync-cloud',
    title: 'Sincronización en la nube',
    content: 'Mantén tus datos actualizados automáticamente a través de Google Drive. La sincronización es en tiempo real y te permite tener toda tu información respaldada de forma segura en la nube.',
    icon: 'heroicons:cloud-16-solid'
  },
  {
    id: 'device-access',
    title: 'Acceso desde dispositivos',
    content: 'Actualmente el servicio está optimizado y disponible exclusivamente para dispositivos móviles Android. Trabajamos continuamente para expandir la compatibilidad con otras plataformas en el futuro.',
    icon: 'heroicons:device-phone-mobile-16-solid'
  },
  {
    id: 'task-management',
    title: 'Gestión de tareas',
    content: 'Agregar tareas es muy sencillo: solo pulsa el botón "+", escribe la descripción y organízala en las categorías que prefieras. Personaliza las categorías según tus necesidades para mantener todo organizado de manera eficiente.',
    icon: 'heroicons:clipboard-document-list-16-solid'
  },
  {
    id: 'reminders',
    title: 'Sistema de recordatorios',
    content: 'Establece recordatorios para tus tareas importantes. Configura alarmas personalizadas, elige la frecuencia (única vez, diaria, semanal o mensual) y recibe notificaciones directamente en tu dispositivo Android cuando sea el momento.',
    icon: 'heroicons:bell-alert-16-solid'
  }
];

const toggleAccordion = (id) => {
  // Si intentamos cerrar el elemento actualmente abierto, no hacemos nada
  if (openItem.value === id) {
    return;
  }
  // Si clickeamos en otro elemento, lo abrimos
  openItem.value = id;
};
</script>

<template>
  <div class="text-lg space-y-2">
    <div v-for="(item, index) in accordionItems" :key="index">
      <button :class="[openItem !== item.id ? 'hover:bg-gray-200' : 'cursor-default']"
        class="group flex gap-x-4 text-start w-full p-4 bg-gray-100 rounded-xl" @click="toggleAccordion(item.id)">
        <div class="flex-shrink-0">
          <span class="text-gray-600 size-4.5">
            <Icon :name="item.icon" />
          </span>
        </div>

        <div class="min-w-0 flex-1 ">
          <div :class="openItem === item.id ? 'block' : 'flex items-baseline'">
            <span class="font-semibold shrink-0 mr-2">
              {{ item.title }}
            </span>

            <span :class="[
              openItem === item.id
                ? 'text-gray-600 whitespace-normal mt-1'
                : 'opacity-0 group-hover:opacity-100 truncate inline'
            ]" class="transition-opacity duration-200">
              {{ item.content }}
            </span>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
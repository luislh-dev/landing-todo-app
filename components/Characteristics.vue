<template>
  <section class="w-full py-32 relative " id="caracteristicas">
    <div class="gradient-overlay" />

    <div class="container-default">
      <div class="flex gap-10 w-full">
        <!-- Preview dinámico -->
        <PreviewSection :selectedItemId="openItem" class="hidden lg:block" />

        <!-- Características -->
        <div class="w-full lg:w-1/2 ">
          <div class="space-y-10 mx-auto max-w-lg relative">
            <h2 class="text-4xl font-bold text-gray-800">Gestiona, estructura y completa tus tareas</h2>
            <p class="text-lg text-gray-500 font-medium">
              No te dejes engañar por el diseño minimalista de TodoApp: la aplicación cuenta con todas las
              herramientas necesarias para crear y optimizar cualquier flujo de trabajo.
            </p>
            <AccordionFeature @select-item="handleSelectItem" :openItem="openItem" :accordionItems="accordionItems" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue';

// Estado reactivo para el ítem seleccionado
const openItem = ref('sync-cloud');

const accordionItems = [
  {
    id: 'sync-cloud',
    title: 'Sincronización en la nube',
    content: 'Mantén tus datos actualizados automáticamente a través de Google Drive. La sincronización es en tiempo real y te permite tener toda tu información respaldada de forma segura en la nube.',
    icon: 'heroicons:cloud-16-solid',
    previewComponent: 'SyncCloudPreview'
  },
  {
    id: 'device-access',
    title: 'Acceso desde dispositivos',
    content: 'Actualmente el servicio está optimizado y disponible exclusivamente para dispositivos móviles Android. Trabajamos continuamente para expandir la compatibilidad con otras plataformas en el futuro.',
    icon: 'heroicons:device-phone-mobile-16-solid',
    previewComponent: 'DeviceAccessPreview'
  },
  {
    id: 'task-management',
    title: 'Gestión de tareas',
    content: 'Agregar tareas es muy sencillo: solo pulsa el botón "+", escribe la descripción y organízala en las categorías que prefieras. Personaliza las categorías según tus necesidades para mantener todo organizado de manera eficiente.',
    icon: 'heroicons:clipboard-document-list-16-solid',
    previewComponent: 'TaskManagementPreview'
  },
  {
    id: 'reminders',
    title: 'Sistema de recordatorios',
    content: 'Establece recordatorios para tus tareas importantes. Configura alarmas personalizadas, elige la frecuencia (única vez, diaria, semanal o mensual) y recibe notificaciones directamente en tu dispositivo Android cuando sea el momento.',
    icon: 'heroicons:bell-alert-16-solid',
    previewComponent: 'RemindersPreview'
  }
];

// Función para manejar la selección de un ítem
const handleSelectItem = (itemId) => {
  openItem.value = itemId;
};
</script>

<style scoped>
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.9) 10%,
      rgba(255, 255, 255, 0.9) 90%,
      rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
}
</style>

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
    id: 'task-management',
    title: 'Añadir tareas',
    content: 'Agregar tareas es muy sencillo, solo pulsa el botón "+" y empieza a escribir.',
    icon: 'heroicons:plus-circle-16-solid',
    previewComponent: 'TaskManagementPreview'
  },
  {
    id: 'categories',
    title: 'Categorías',
    content: 'Organiza tus tareas en categorías personalizadas. Asigna un color a cada categoría para identificarlas rápidamente y filtrarlas según tus necesidades.',
    icon: 'heroicons:tag-16-solid',
    previewComponent: 'TaskManagementPreview'
  },
  {
    id: 'reminders',
    title: 'Sistema de recordatorios',
    content: 'Establece recordatorios para tus tareas importantes. Configura alarmas personalizadas, elige la frecuencia (única vez, diaria, semanal o mensual) y recibe notificaciones directamente en tu dispositivo Android cuando sea el momento.',
    icon: 'heroicons:bell-alert-16-solid',
    previewComponent: 'RemindersPreview'
  },
  {
    id: 'edit-tasks',
    title: 'Editar tareas',
    content: 'Edita tus tareas en cualquier momento. Cambia el nombre, la descripción, la fecha de vencimiento, la categoría y el estado de la tarea con un solo clic.',
    icon: 'heroicons:pencil-16-solid',
    previewComponent: 'PreviewEditTask'
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

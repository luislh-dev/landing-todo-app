<script setup>
const props = defineProps({
  accordionItems: {
    type: Array,
    required: true
  },
  openItem: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['select-item']);

const toggleAccordion = (id) => {
  emit('select-item', id);

};
</script>

<template>
  <div class="text-lg space-y-4">
    <div v-for="(item, index) in accordionItems" :key="index">
      <button :class="[openItem !== item.id ? '' : 'cursor-default']"
        class="group flex gap-x-4 text-start w-full p-4 rounded-xl border border-gray-200 shadow-md"
        @click="toggleAccordion(item.id)">
        <div class="flex-shrink-0">
          <span class="text-gray-600 size-4.5">
            <Icon :name="item.icon" :class="[openItem === item.id ? 'text-fuchsia-500' : 'text-gray-400']" />
          </span>
        </div>

        <div class="min-w-0 flex-1">
          <div :class="openItem === item.id ? 'block' : 'flex items-baseline'">
            <span class="font-semibold shrink-0 mr-2">
              {{ item.title }}
            </span>

            <span :class="[
              openItem === item.id
                ? 'whitespace-normal mt-1'
                : 'opacity-0 group-hover:opacity-100 truncate inline'
            ]" class="transition-opacity duration-200 text-gray-500 ">
              {{ item.content }}
            </span>
          </div>
        </div>
      </button>
      <div :class="openItem === item.id ? 'block' : 'hidden lg:block'">
        <PreviewSection :selectedItemId="openItem" class="lg:hidden block -mt-2" />
      </div>
    </div>
  </div>
</template>
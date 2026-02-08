<script setup>
import { ref } from 'vue'

const props = defineProps({
  filters: {
    type: Array,
    default: () => []
  },
  selectedFilters: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:selectedFilters'])

const expandedSections = ref([0, 1])

const toggleSection = (index) => {
  const i = expandedSections.value.indexOf(index)
  if (i > -1) {
    expandedSections.value.splice(i, 1)
  } else {
    expandedSections.value.push(index)
  }
}

const toggleFilter = (option) => {
  const newFilters = [...props.selectedFilters]
  if (newFilters.includes(option)) {
    newFilters.splice(newFilters.indexOf(option), 1)
  } else {
    newFilters.push(option)
  }
  emit('update:selectedFilters', newFilters)
}
</script>

<template>
  <aside class="w-64 flex-shrink-0">
    <h2 class="text-lg font-bold text-gray-800 mb-6">Filter by:</h2>
    
    <div class="space-y-6">
      <div v-for="(filter, index) in filters" :key="filter.title">
        <h3 
          class="text-sm font-semibold text-gray-800 mb-3 flex items-center justify-between cursor-pointer hover:text-primary transition"
          @click="toggleSection(index)"
        >
          {{ filter.title }}
          <svg 
            class="w-4 h-4 text-gray-400 transition-transform"
            :class="{ 'rotate-180': expandedSections.includes(index) }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </h3>
        
        <div v-if="expandedSections.includes(index)" class="space-y-2">
          <label 
            v-for="option in filter.options" 
            :key="option"
            class="flex items-center gap-2 cursor-pointer"
            :class="{ 'font-semibold text-gray-800': selectedFilters.includes(option) }"
          >
            <input 
              type="checkbox" 
              :checked="selectedFilters.includes(option)"
              class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              @change="toggleFilter(option)"
            >
            <span class="text-sm text-gray-600">{{ option }}</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Price Range -->
    <div class="mt-8 pt-8 border-t border-gray-100">
      <h3 class="text-sm font-semibold text-gray-800 mb-4">Price range</h3>
      <div class="flex gap-3">
        <input 
          type="number" 
          placeholder="Min"
          class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
        >
        <input 
          type="number" 
          placeholder="Max"
          class="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
        >
      </div>
    </div>

    <!-- Reset Filters -->
    <button 
      class="mt-6 w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-primary hover:text-primary transition"
      @click="$emit('reset')"
    >
      Reset all filters
    </button>
  </aside>
</template>

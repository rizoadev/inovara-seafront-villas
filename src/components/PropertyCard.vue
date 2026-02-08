<script setup>
import { ref } from 'vue'

const props = defineProps({
  property: { type: Object, required: true }
})

const emit = defineEmits(['favorite'])

const isFavorite = ref(false)

const toggleFavorite = (e) => {
  e.stopPropagation()
  isFavorite.value = !isFavorite.value
  emit('favorite', props.property.id)
}
</script>

<template>
  <div class="group cursor-pointer" @click="$router.push(`/property/${property.id}`)">
    <!-- Property Image -->
    <div class="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
      <img 
        :src="property.image" 
        :alt="property.name"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      >
      <div class="absolute top-3 right-3" @click="toggleFavorite">
        <button class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition">
          <svg 
            class="w-5 h-5" 
            :class="isFavorite ? 'text-primary fill-primary' : 'text-gray-400'"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
      </div>
      <div class="absolute bottom-3 left-3">
        <span class="bg-white/90 px-3 py-1 rounded text-sm font-medium text-gray-800">
          €{{ property.price.toLocaleString() }} per night
        </span>
      </div>
      <!-- Navigation Arrows -->
      <div class="absolute inset-y-0 left-2 flex items-center opacity-0 group-hover:opacity-100 transition">
        <button class="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow" @click.stop>
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
      </div>
      <div class="absolute inset-y-0 right-2 flex items-center opacity-0 group-hover:opacity-100 transition">
        <button class="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow" @click.stop>
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Property Info -->
    <div>
      <p class="text-xs text-gray-500 mb-1">{{ property.location }}</p>
      <h3 class="text-base font-semibold text-gray-800 mb-2">{{ property.name }}</h3>
      <div class="flex items-center gap-4 text-sm text-gray-600">
        <span v-if="property.guests" class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          {{ property.guests }} guests
        </span>
        <span v-if="property.bedrooms" class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
          </svg>
          {{ property.bedrooms }} bedrooms
        </span>
        <span v-if="property.bathrooms" class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
          </svg>
          {{ property.bathrooms }} bathrooms
        </span>
      </div>
    </div>
  </div>
</template>

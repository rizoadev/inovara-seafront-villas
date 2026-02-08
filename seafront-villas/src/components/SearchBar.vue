<script setup>
import { ref } from 'vue'

const location = ref('')
const checkIn = ref('')
const checkOut = ref('')
const budget = ref('')
const guests = ref('')

const emit = defineEmits(['search'])
</script>

<template>
  <div class="border-b border-gray-200 bg-white">
    <div class="max-w-7xl mx-auto px-4 py-4">
      <!-- Desktop: Horizontal layout -->
      <div class="hidden md:flex items-center gap-3">
        <div class="flex-1">
          <input 
            v-model="location"
            type="text" 
            placeholder="Search destination"
            class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-800 bg-white focus:outline-none focus:border-primary"
          >
        </div>
        <div class="flex-1">
          <input 
            v-model="checkIn"
            type="text" 
            placeholder="Check-in - Check-out"
            class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-800 bg-white focus:outline-none focus:border-primary"
          >
        </div>
        <div class="flex-1">
          <input 
            v-model="budget"
            type="text" 
            placeholder="Budget"
            class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-800 bg-white focus:outline-none focus:border-primary"
          >
        </div>
        <div class="flex-1">
          <input 
            v-model="guests"
            type="text" 
            placeholder="Guests"
            class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-800 bg-white focus:outline-none focus:border-primary"
          >
        </div>
        <button 
          class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition font-medium flex items-center gap-2 whitespace-nowrap"
          @click="$emit('search', { location, checkIn, checkOut, budget, guests })"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <span class="hidden lg:inline">Search</span>
        </button>
      </div>

      <!-- Mobile: Stacked layout -->
      <div class="md:hidden space-y-3">
        <input 
          v-model="location"
          type="text" 
          placeholder="Where to?"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-800 bg-white focus:outline-none focus:border-primary"
        >
        <div class="grid grid-cols-2 gap-3">
          <input 
            v-model="checkIn"
            type="text" 
            placeholder="Dates"
            class="px-4 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-800 bg-white focus:outline-none focus:border-primary"
          >
          <input 
            v-model="guests"
            type="text" 
            placeholder="Guests"
            class="px-4 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-800 bg-white focus:outline-none focus:border-primary"
          >
        </div>
        <button 
          class="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition font-medium flex items-center justify-center gap-2"
          @click="$emit('search', { location, checkIn, checkOut, budget, guests })"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          Search
        </button>
      </div>
    </div>
  </div>
</template>

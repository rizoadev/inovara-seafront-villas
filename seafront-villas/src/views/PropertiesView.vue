<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import SearchBar from '../components/SearchBar.vue'
import { ref, computed } from 'vue'

const properties = ref([
  { id: 1, name: 'Villa de la Palme', location: 'Gassin, French Riviera', price: 5354, type: 'Private villa', environment: 'Sea view', amenities: ['Private swimming pool', 'Garden'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80' },
  { id: 2, name: 'Maison Bahia', location: 'Cannes, French Riviera', price: 4200, type: 'Private villa', environment: 'Garden', amenities: ['Private swimming pool', 'Spa'], guests: 6, bedrooms: 3, bathrooms: 3, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: 3, name: 'Le Petit Chateau', location: 'Saint-Tropez', price: 8900, type: 'Chateau', environment: 'Sea view', amenities: ['Private swimming pool', 'Tennis court'], guests: 10, bedrooms: 5, bathrooms: 5, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
  { id: 4, name: 'Villa Azura', location: 'Antibes', price: 6100, type: 'Private villa', environment: 'Beachfront', amenities: ['Private swimming pool', 'Gym'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { id: 5, name: 'Residence Celeste', location: 'Nice', price: 3800, type: 'Apartment', environment: 'Sea view', amenities: ['Gym', 'Spa'], guests: 4, bedrooms: 2, bathrooms: 2, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80' },
  { id: 6, name: 'Villa Serenity', location: 'Monaco', price: 12500, type: 'Penthouse', environment: 'Sea view', amenities: ['Private swimming pool', 'Spa'], guests: 12, bedrooms: 6, bathrooms: 6, image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80' },
  { id: 7, name: 'Penthouse Marine', location: 'Cannes', price: 7500, type: 'Penthouse', environment: 'Sea view', amenities: ['Gym', 'Spa'], guests: 6, bedrooms: 3, bathrooms: 3, image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80' },
  { id: 8, name: 'Villa Belle Epoque', location: 'Antibes', price: 9200, type: 'Private villa', environment: 'Garden', amenities: ['Private swimming pool', 'Tennis court'], guests: 10, bedrooms: 5, bathrooms: 4, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80' },
  { id: 9, name: 'Chateau Riviera', location: 'Cannes', price: 15000, type: 'Chateau', environment: 'Sea view', amenities: ['Private swimming pool', 'Spa', 'Gym'], guests: 14, bedrooms: 7, bathrooms: 7, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { id: 10, name: 'Villa Provence', location: 'Gassin', price: 4800, type: 'Private villa', environment: 'Garden', amenities: ['Private swimming pool', 'Garden'], guests: 6, bedrooms: 3, bathrooms: 3, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80' },
  { id: 11, name: 'Sea View Apartment', location: 'Nice', price: 2900, type: 'Apartment', environment: 'Sea view', amenities: ['Spa'], guests: 2, bedrooms: 1, bathrooms: 1, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80' },
  { id: 12, name: 'Villa Luxe', location: 'Saint-Tropez', price: 11500, type: 'Private villa', environment: 'Beachfront', amenities: ['Private swimming pool', 'Spa'], guests: 10, bedrooms: 5, bathrooms: 5, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: 13, name: 'Mediterranean Villa', location: 'Antibes', price: 5500, type: 'Private villa', environment: 'Sea view', amenities: ['Private swimming pool', 'Garden'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
  { id: 14, name: 'Coastal Retreat', location: 'Cannes', price: 3900, type: 'Apartment', environment: 'Sea view', amenities: ['Gym'], guests: 4, bedrooms: 2, bathrooms: 2, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { id: 15, name: 'Royal Chateau', location: 'Monaco', price: 25000, type: 'Chateau', environment: 'Sea view', amenities: ['Private swimming pool', 'Spa', 'Gym', 'Tennis court'], guests: 16, bedrooms: 8, bathrooms: 8, image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80' },
  { id: 16, name: 'Villa Belle Mer', location: 'Nice', price: 6500, type: 'Private villa', environment: 'Beachfront', amenities: ['Private swimming pool'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80' },
  { id: 17, name: 'Sunset Villa', location: 'Gassin', price: 7200, type: 'Private villa', environment: 'Sea view', amenities: ['Private swimming pool', 'Spa'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80' },
  { id: 18, name: 'Ocean View Penthouse', location: 'Cannes', price: 9800, type: 'Penthouse', environment: 'Sea view', amenities: ['Gym', 'Spa'], guests: 6, bedrooms: 3, bathrooms: 3, image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80' },
  { id: 19, name: 'Villa des Roses', location: 'Antibes', price: 4500, type: 'Private villa', environment: 'Garden', amenities: ['Private swimming pool', 'Garden'], guests: 6, bedrooms: 3, bathrooms: 3, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: 20, name: 'Beachfront Paradise', location: 'Saint-Tropez', price: 14000, type: 'Private villa', environment: 'Beachfront', amenities: ['Private swimming pool', 'Spa'], guests: 12, bedrooms: 6, bathrooms: 6, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { id: 21, name: 'Cozy Studio', location: 'Nice', price: 1500, type: 'Apartment', environment: 'City view', amenities: [], guests: 2, bedrooms: 1, bathrooms: 1, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80' },
  { id: 22, name: 'Luxury Manor', location: 'Monaco', price: 18000, type: 'Chateau', environment: 'Sea view', amenities: ['Private swimming pool', 'Spa', 'Gym', 'Tennis court'], guests: 12, bedrooms: 6, bathrooms: 6, image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80' },
  { id: 23, name: 'Villa Marina', location: 'Cannes', price: 5800, type: 'Private villa', environment: 'Beachfront', amenities: ['Private swimming pool'], guests: 6, bedrooms: 3, bathrooms: 3, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80' },
  { id: 24, name: 'Grand Terrace', location: 'Antibes', price: 4200, type: 'Penthouse', environment: 'Sea view', amenities: ['Gym'], guests: 4, bedrooms: 2, bathrooms: 2, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
  { id: 25, name: 'Countryside Villa', location: 'Gassin', price: 3500, type: 'Private villa', environment: 'Garden', amenities: ['Garden'], guests: 4, bedrooms: 2, bathrooms: 2, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: 26, name: 'Modern Loft', location: 'Nice', price: 3200, type: 'Apartment', environment: 'City view', amenities: ['Gym'], guests: 4, bedrooms: 2, bathrooms: 2, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80' },
  { id: 27, name: 'Seaside Mansion', location: 'Saint-Tropez', price: 16500, type: 'Private villa', environment: 'Beachfront', amenities: ['Private swimming pool', 'Spa', 'Tennis court'], guests: 14, bedrooms: 7, bathrooms: 7, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { id: 28, name: 'Villa Prestige', location: 'Monaco', price: 22000, type: 'Penthouse', environment: 'Sea view', amenities: ['Private swimming pool', 'Spa', 'Gym'], guests: 10, bedrooms: 5, bathrooms: 5, image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80' },
  { id: 29, name: 'Garden Suite', location: 'Cannes', price: 2800, type: 'Apartment', environment: 'Garden', amenities: ['Garden'], guests: 2, bedrooms: 1, bathrooms: 1, image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80' },
  { id: 30, name: 'Historic Villa', location: 'Antibes', price: 6800, type: 'Private villa', environment: 'Garden', amenities: ['Private swimming pool', 'Garden'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80' },
  { id: 31, name: 'Ocean Breeze', location: 'Nice', price: 5500, type: 'Private villa', environment: 'Sea view', amenities: ['Private swimming pool'], guests: 6, bedrooms: 3, bathrooms: 3, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: 32, name: 'Riverside Chateau', location: 'Gassin', price: 11000, type: 'Chateau', environment: 'Garden', amenities: ['Private swimming pool', 'Tennis court'], guests: 10, bedrooms: 5, bathrooms: 5, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { id: 33, name: 'Sunrise Apartment', location: 'Cannes', price: 3600, type: 'Apartment', environment: 'Sea view', amenities: ['Spa'], guests: 4, bedrooms: 2, bathrooms: 2, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80' },
  { id: 34, name: 'Villa Horizon', location: 'Saint-Tropez', price: 9500, type: 'Private villa', environment: 'Sea view', amenities: ['Private swimming pool', 'Spa'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
  { id: 35, name: 'Elite Penthouse', location: 'Monaco', price: 19500, type: 'Penthouse', environment: 'Sea view', amenities: ['Private swimming pool', 'Gym', 'Spa'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80' },
  { id: 36, name: 'Medow View Villa', location: 'Antibes', price: 5200, type: 'Private villa', environment: 'Garden', amenities: ['Private swimming pool', 'Garden'], guests: 6, bedrooms: 3, bathrooms: 3, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80' },
  { id: 37, name: 'Coastal Villa', location: 'Nice', price: 6200, type: 'Private villa', environment: 'Beachfront', amenities: ['Private swimming pool'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80' },
  { id: 38, name: 'Royal Villa', location: 'Cannes', price: 13000, type: 'Private villa', environment: 'Sea view', amenities: ['Private swimming pool', 'Spa', 'Gym'], guests: 12, bedrooms: 6, bathrooms: 6, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: 39, name: 'Mountain View', location: 'Gassin', price: 4800, type: 'Chateau', environment: 'Garden', amenities: ['Garden', 'Tennis court'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { id: 40, name: 'Azure Suite', location: 'Saint-Tropez', price: 4100, type: 'Apartment', environment: 'Sea view', amenities: ['Spa'], guests: 4, bedrooms: 2, bathrooms: 2, image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80' },
  { id: 41, name: 'Villa Estate', location: 'Monaco', price: 28000, type: 'Chateau', environment: 'Sea view', amenities: ['Private swimming pool', 'Spa', 'Gym', 'Tennis court'], guests: 20, bedrooms: 10, bathrooms: 10, image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80' },
  { id: 42, name: 'Peaceful Haven', location: 'Antibes', price: 3800, type: 'Private villa', environment: 'Garden', amenities: ['Garden'], guests: 4, bedrooms: 2, bathrooms: 2, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80' },
  { id: 43, name: 'Grand Villa', location: 'Nice', price: 7800, type: 'Private villa', environment: 'Sea view', amenities: ['Private swimming pool', 'Spa'], guests: 10, bedrooms: 5, bathrooms: 5, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80' },
  { id: 44, name: 'Beach Villa', location: 'Cannes', price: 8500, type: 'Private villa', environment: 'Beachfront', amenities: ['Private swimming pool'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: 45, name: 'Luxury Apartment', location: 'Saint-Tropez', price: 5500, type: 'Apartment', environment: 'Sea view', amenities: ['Gym', 'Spa'], guests: 4, bedrooms: 2, bathrooms: 2, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { id: 46, name: 'Villa Paradise', location: 'Gassin', price: 9200, type: 'Private villa', environment: 'Garden', amenities: ['Private swimming pool', 'Tennis court'], guests: 10, bedrooms: 5, bathrooms: 5, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
  { id: 47, name: 'Seaview Suite', location: 'Antibes', price: 3200, type: 'Penthouse', environment: 'Sea view', amenities: ['Gym'], guests: 2, bedrooms: 1, bathrooms: 1, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80' },
  { id: 48, name: 'Private Retreat', location: 'Monaco', price: 14500, type: 'Private villa', environment: 'Sea view', amenities: ['Private swimming pool', 'Spa'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80' },
  { id: 49, name: 'Classic Villa', location: 'Nice', price: 4600, type: 'Private villa', environment: 'Garden', amenities: ['Private swimming pool', 'Garden'], guests: 6, bedrooms: 3, bathrooms: 3, image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80' },
  { id: 50, name: 'Exclusive Penthouse', location: 'Cannes', price: 11200, type: 'Penthouse', environment: 'Sea view', amenities: ['Private swimming pool', 'Gym', 'Spa'], guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80' }
])

const filters = ref([
  { title: 'Property type', options: ['Private villa', 'Apartment', 'Penthouse', 'Chateau'], key: 'type' },
  { title: 'Environment', options: ['Sea view', 'Garden', 'Beachfront', 'City view'], key: 'environment' },
  { title: 'Well-being & Sport', options: ['Private swimming pool', 'Spa', 'Gym', 'Tennis court'], key: 'amenities' }
])

const selectedFilters = ref({ type: [], environment: [], amenities: [] })
const sortBy = ref('recommended')
const currentPage = ref(1)
const itemsPerPage = 12
const showFilters = ref(false)

const sortOptions = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' }
]

const filteredProperties = computed(() => {
  let result = [...properties.value]
  if (selectedFilters.value.type.length > 0) result = result.filter(p => selectedFilters.value.type.includes(p.type))
  if (selectedFilters.value.environment.length > 0) result = result.filter(p => selectedFilters.value.environment.includes(p.environment))
  if (selectedFilters.value.amenities.length > 0) result = result.filter(p => selectedFilters.value.amenities.some(a => p.amenities.includes(a)))
  if (sortBy.value === 'price-low') result.sort((a, b) => a.price - b.price)
  if (sortBy.value === 'price-high') result.sort((a, b) => b.price - a.price)
  return result
})

const paginatedProperties = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredProperties.value.slice(start, start + itemsPerPage)
})

const totalPages = computed(() => Math.ceil(filteredProperties.value.length / itemsPerPage))

const toggleFilter = (key, value) => {
  const idx = selectedFilters.value[key].indexOf(value)
  if (idx > -1) selectedFilters.value[key].splice(idx, 1)
  else selectedFilters.value[key].push(value)
  currentPage.value = 1
}

const isFilterSelected = (key, value) => selectedFilters.value[key].includes(value)

const resetFilters = () => { selectedFilters.value = { type: [], environment: [], amenities: [] }; currentPage.value = 1 }
const goToPage = (page) => { currentPage.value = page }
</script>

<template>
  <div class="bg-white">
    <Navbar />
    <SearchBar />
    
    <main class="max-w-7xl mx-auto px-4 py-6">
      <!-- Mobile Filter Toggle & Sort -->
      <div class="flex items-center justify-between mb-4 md:hidden">
        <button @click="showFilters = !showFilters" class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
          </svg>
          Filters
        </button>
        <select v-model="sortBy" class="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary">
          <option v-for="option in sortOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
      </div>

      <!-- Mobile Filters Panel -->
      <div v-if="showFilters" class="md:hidden mb-4 p-4 bg-gray-50 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="font-bold text-gray-800">Filters</h2>
          <button @click="resetFilters" class="text-sm text-primary">Reset</button>
        </div>
        <div v-for="filter in filters" :key="filter.title" class="mb-4">
          <h3 class="text-sm font-semibold text-gray-800 mb-2">{{ filter.title }}</h3>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="option in filter.options" 
              :key="option"
              @click="toggleFilter(filter.key, option)"
              class="px-3 py-1 rounded-full text-xs font-medium transition"
              :class="isFilterSelected(filter.key, option) ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-gray-600'"
            >
              {{ option }}
            </button>
          </div>
        </div>
      </div>

      <div class="flex gap-6">
        <!-- Desktop Sidebar Filters -->
        <aside class="hidden md:block w-64 flex-shrink-0">
          <div class="sticky top-4">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-lg font-bold text-gray-800">Filter by:</h2>
              <button @click="resetFilters" class="text-sm text-primary hover:text-secondary">Reset</button>
            </div>
            <div class="space-y-6">
              <div v-for="filter in filters" :key="filter.title">
                <h3 class="text-sm font-semibold text-gray-800 mb-3">{{ filter.title }}</h3>
                <div class="space-y-2">
                  <label v-for="option in filter.options" :key="option" class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" :checked="isFilterSelected(filter.key, option)" @change="toggleFilter(filter.key, option)" class="w-4 h-4 rounded border-gray-300 text-primary cursor-pointer">
                    <span class="text-sm text-gray-600" :class="{ 'font-semibold text-gray-800': isFilterSelected(filter.key, option) }">{{ option }}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <!-- Property Grid -->
        <div class="flex-1">
          <!-- Desktop Sort -->
          <div class="hidden md:flex justify-between items-center mb-4">
            <p class="text-gray-600">{{ filteredProperties.length }} properties found</p>
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600">Sort by:</label>
              <select v-model="sortBy" class="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary">
                <option v-for="option in sortOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
              </select>
            </div>
          </div>
          
          <!-- Properties Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div v-for="property in paginatedProperties" :key="property.id" class="group cursor-pointer" @click="$router.push(`/property/${property.id}`)">
              <div class="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                <img :src="property.image" :alt="property.name" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <div class="absolute top-2 right-2">
                  <button class="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </button>
                </div>
                <div class="absolute bottom-2 left-2">
                  <span class="bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-800">€{{ property.price.toLocaleString() }}</span>
                </div>
              </div>
              <p class="text-xs text-gray-500 mb-1">{{ property.location }}</p>
              <h3 class="text-sm lg:text-base font-semibold text-gray-800 mb-1">{{ property.name }}</h3>
              <div class="flex items-center gap-2 text-xs text-gray-600">
                <span>{{ property.guests }} guests</span>
                <span>•</span>
                <span>{{ property.bedrooms }} beds</span>
                <span>•</span>
                <span>{{ property.bathrooms }} baths</span>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="flex justify-center items-center gap-2 mt-6">
            <button v-for="page in Math.min(totalPages, 5)" :key="page" @click="goToPage(page)" class="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition" :class="currentPage === page ? 'bg-primary text-white' : 'border border-gray-200 hover:border-primary'">{{ page }}</button>
            <span v-if="totalPages > 5" class="text-gray-400">...</span>
            <button v-if="totalPages > 5" @click="goToPage(totalPages)" class="w-8 h-8 rounded-lg flex items-center justify-center text-sm border border-gray-200 hover:border-primary">{{ totalPages }}</button>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

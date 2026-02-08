<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'

const featuredProperties = ref([
  { id: 1, name: 'Villa de la Palme', location: 'Gassin, French Riviera', price: 5354, guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80' },
  { id: 2, name: 'Maison Bahia', location: 'Cannes, French Riviera', price: 4200, guests: 6, bedrooms: 3, bathrooms: 3, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: 3, name: 'Le Petit Chateau', location: 'Saint-Tropez, France', price: 8900, guests: 10, bedrooms: 5, bathrooms: 5, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
  { id: 4, name: 'Villa Azura', location: 'Antibes, France', price: 6100, guests: 8, bedrooms: 4, bathrooms: 4, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' }
])

const destinations = ref([
  { name: 'Cannes', image: 'https://images.unsplash.com/photo-1523699289804-55347c09047d?w=600&q=80', properties: 24 },
  { name: 'Saint-Tropez', image: 'https://images.unsplash.com/photo-1559599238-308793637427?w=600&q=80', properties: 18 },
  { name: 'Nice', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80', properties: 32 },
  { name: 'Monaco', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80', properties: 12 }
])
</script>

<template>
  <div class="bg-white">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative h-[50vh] md:h-[70vh] flex items-center">
      <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Luxury Villa" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative max-w-7xl mx-auto px-4 md:px-6 text-center text-white">
        <h1 class="text-3xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 md:mb-6">Discover Your Dream Villa</h1>
        <p class="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90">Exclusive luxury properties along the French Riviera</p>
        <router-link to="/properties" class="inline-block px-6 py-3 md:px-8 md:py-4 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition">Explore Properties</router-link>
      </div>
    </section>

    <!-- Featured Properties -->
    <section class="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div class="flex flex-col sm:flex-row justify-between items-end mb-6 md:mb-8 gap-4">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">Featured Properties</h2>
          <p class="text-gray-500 text-sm md:text-base">Handpicked luxury villas</p>
        </div>
        <router-link to="/properties" class="text-primary hover:text-secondary font-medium text-sm md:text-base">View all properties →</router-link>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div v-for="property in featuredProperties" :key="property.id" class="group cursor-pointer" @click="$router.push(`/property/${property.id}`)">
          <div class="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
            <img :src="property.image" :alt="property.name" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <div class="absolute top-2 right-2">
              <button class="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition">
                <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </button>
            </div>
            <div class="absolute bottom-2 left-2">
              <span class="bg-white/90 px-2 py-1 rounded text-xs md:text-sm font-medium text-gray-800">€{{ property.price.toLocaleString() }}</span>
            </div>
          </div>
          <p class="text-xs text-gray-500 mb-1">{{ property.location }}</p>
          <h3 class="text-sm md:text-base font-semibold text-gray-800 mb-1 md:mb-2">{{ property.name }}</h3>
          <div class="flex items-center gap-2 text-xs md:text-sm text-gray-600">
            <span>{{ property.guests }} guests</span>
            <span class="hidden sm:inline">·</span>
            <span class="hidden sm:inline">{{ property.bedrooms }} beds</span>
            <span class="hidden sm:inline">·</span>
            <span>{{ property.bathrooms }} baths</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations -->
    <section class="bg-gray-50 py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Popular Destinations</h2>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <div v-for="dest in destinations" :key="dest.name" class="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer">
            <img :src="dest.image" :alt="dest.name" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-3 left-3 text-white">
              <h3 class="text-sm md:text-xl font-semibold">{{ dest.name }}</h3>
              <p class="text-xs opacity-80">{{ dest.properties }} properties</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-900 py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">Ready to Find Your Perfect Villa?</h2>
        <p class="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">Contact our expert team today</p>
        <router-link to="/contact" class="inline-block px-6 py-3 md:px-8 md:py-4 bg-primary text-white rounded-lg hover:bg-secondary font-semibold transition">Contact Us</router-link>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import PropertyCard from '../components/PropertyCard.vue'
import { ref } from 'vue'

const destinations = ref([
  {
    name: 'French Riviera',
    description: 'The iconic coastline from Saint-Tropez to Monaco, home to the world\'s most glamorous beaches and villages.',
    image: 'https://images.unsplash.com/photo-1523699289804-55347c09047d?w=800&q=80',
    properties: 45
  },
  {
    name: 'Cannes',
    description: 'Famous for its film festival, luxury boutiques, and pristine beaches along the Mediterranean.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    properties: 24
  },
  {
    name: 'Saint-Tropez',
    description: 'The legendary fishing village turned jet-set destination with stunning bay views and vibrant nightlife.',
    image: 'https://images.unsplash.com/photo-1559599238-308793637427?w=800&q=80',
    properties: 18
  },
  {
    name: 'Nice',
    description: 'The jewel of the French Riviera, blending French elegance with Mediterranean charm.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    properties: 32
  },
  {
    name: 'Monaco',
    description: 'The principality of luxury, hosting the famous Grand Prix and world-class casinos.',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80',
    properties: 12
  },
  {
    name: 'Antibes',
    description: 'A perfect blend of history and modern luxury, home to the famous Cap d\'Antibes.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    properties: 16
  }
])
</script>

<template>
  <div>
    <Navbar />
    
    <main class="max-w-7xl mx-auto px-6 py-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Destinations</h1>
        <p class="text-gray-500 max-w-2xl mx-auto">
          Discover our exclusive properties across the most sought-after destinations
        </p>
      </div>

      <!-- Destinations Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a 
          v-for="dest in destinations" 
          :key="dest.name"
          href="#"
          class="group"
        >
          <div class="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
            <img 
              :src="dest.image" 
              :alt="dest.name"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            >
            <div class="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
              {{ dest.properties }} properties
            </div>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition">{{ dest.name }}</h3>
          <p class="text-gray-500 text-sm">{{ dest.description }}</p>
        </a>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import PropertyCard from '../components/PropertyCard.vue'
import { ref } from 'vue'

const properties = ref([
  {
    id: 1,
    name: 'Villa de la Palme',
    location: 'Gassin, French Riviera, France',
    price: 4500000,
    guests: 8,
    bedrooms: 4,
    bathrooms: 4,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80'
  },
  {
    id: 2,
    name: 'Maison Bahia',
    location: 'Cannes, French Riviera, France',
    price: 3200000,
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
  },
  {
    id: 3,
    name: 'Le Petit Château',
    location: 'Saint-Tropez, France',
    price: 8900000,
    guests: 10,
    bedrooms: 5,
    bathrooms: 5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
  },
  {
    id: 4,
    name: 'Villa Azura',
    location: 'Antibes, France',
    price: 5100000,
    guests: 8,
    bedrooms: 4,
    bathrooms: 4,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
  }
])
</script>

<template>
  <div>
    <Navbar />
    
    <main class="max-w-7xl mx-auto px-6 py-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Houses for Sale</h1>
        <p class="text-gray-500 max-w-2xl mx-auto">
          Discover exclusive properties available for purchase on the French Riviera
        </p>
      </div>

      <!-- Featured Properties for Sale -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PropertyCard 
          v-for="property in properties" 
          :key="property.id" 
          :property="property"
        />
      </div>

      <!-- CTA -->
      <div class="bg-gray-900 rounded-2xl p-12 mt-16 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Looking to Sell Your Property?</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
          Our expert team can help you find the right buyers for your luxury property
        </p>
        <a href="/contact" class="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-secondary transition font-semibold">
          Contact Us for a Valuation
        </a>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'

const galleryImages = ref([
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80',
  'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&q=80',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&q=80',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80'
])
</script>

<template>
  <div class="bg-white">
    <Navbar />
    
    <main class="max-w-7xl mx-auto px-6 py-6">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Our Gallery</h1>
        <p class="text-gray-500">Explore our collection of stunning luxury villas</p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(image, index) in galleryImages" :key="index" class="aspect-square rounded-lg overflow-hidden group cursor-pointer">
          <img :src="image" :alt="`Gallery image ${index + 1}`" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
        </div>
      </div>

      <!-- Load More -->
      <div class="text-center mt-8">
        <button class="px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition font-medium">Load More Images</button>
      </div>
    </main>

    <Footer />
  </div>
</template>

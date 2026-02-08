<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Find a house', path: '/properties' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Houses for sale', path: '/for-sale' },
  { name: 'Blog', path: '/blog' },
  { name: 'About us', path: '/about' },
  { name: 'Contact us', path: '/contact' }
]

const currentRoute = ref('/')

const setActive = (path) => {
  currentRoute.value = path
}
</script>

<template>
  <div class="bg-white relative">
    <!-- Utility Bar - Hidden on mobile -->
    <div class="border-b border-gray-100 hidden md:block">
      <div class="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2 text-gray-500 cursor-pointer hover:text-gray-700 transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <span class="text-sm">What are you looking for?</span>
        </div>

        <router-link to="/" class="flex flex-col items-center">
          <svg class="w-6 h-6 lg:w-8 lg:h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span class="font-serif text-lg lg:text-xl font-bold tracking-wider text-gray-800">SEAFRONT VILLAS</span>
        </router-link>

        <div class="flex items-center gap-4">
          <span class="text-sm text-gray-600 cursor-pointer hover:text-primary transition hidden lg:inline">EN / EUR</span>
          <button class="text-gray-400 hover:text-primary transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
          <button class="text-gray-400 hover:text-primary transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="border-b border-gray-100 relative">
      <div class="max-w-7xl mx-auto px-4 lg:px-6">
        <!-- Mobile Logo & Menu Button -->
        <div class="flex items-center justify-between py-3 md:hidden">
          <router-link to="/" class="flex items-center gap-2">
            <svg class="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span class="font-serif font-bold text-gray-800">SEAFRONT</span>
          </router-link>
          <button @click="isMenuOpen = !isMenuOpen" class="p-2 bg-white shadow rounded-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex justify-center gap-4 lg:gap-8 py-4">
          <li v-for="link in navLinks" :key="link.path">
            <router-link 
              :to="link.path"
              class="text-xs lg:text-sm font-medium text-gray-600 hover:text-gray-900 transition pb-1"
              :class="{ 'text-gray-900 border-b-2 border-primary': currentRoute === link.path }"
              @click="setActive(link.path)"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isMenuOpen"
      class="fixed inset-0 bg-white z-50 md:hidden"
    >
      <div class="pt-16 px-6">
        <div class="flex justify-between items-center mb-8">
          <span class="font-serif text-xl font-bold text-gray-800">MENU</span>
          <button @click="isMenuOpen = false" class="p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <ul class="space-y-4">
          <li v-for="link in navLinks" :key="link.path">
            <router-link 
              :to="link.path"
              class="block text-lg font-medium text-gray-800 hover:text-primary transition py-3 border-b border-gray-100"
              @click="isMenuOpen = false; setActive(link.path)"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
        <div class="mt-8 pt-8 border-t border-gray-100">
          <p class="text-sm text-gray-500 mb-4">Contact: +33 4 00 00 00 00</p>
          <p class="text-sm text-gray-500">EN / EUR</p>
        </div>
      </div>
    </div>
  </div>
</template>

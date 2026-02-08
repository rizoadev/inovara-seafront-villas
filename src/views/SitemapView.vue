<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router'

const mainPages = [
  { name: 'Home', path: '/', description: 'Discover luxury villas along the French Riviera' },
  { name: 'Properties', path: '/properties', description: 'Browse our exclusive collection of villas' },
  { name: 'Gallery', path: '/gallery', description: 'Explore stunning property images' },
  { name: 'Destinations', path: '/destinations', description: 'Prime locations from Cannes to Monaco' },
  { name: 'For Sale', path: '/for-sale', description: 'Properties available for purchase' },
  { name: 'About Us', path: '/about', description: 'Learn about SEAFRONT VILLAS' },
  { name: 'Reviews', path: '/reviews', description: 'What our clients say' },
  { name: 'Contact', path: '/contact', description: 'Get in touch with our team' }
]

const blogPages = [
  { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
  { name: 'Blog Posts', path: '/blog', description: 'Browse all articles' }
]

const legalPages = [
  { name: 'Terms & Conditions', path: '/terms', description: 'Our booking terms and conditions' },
  { name: 'Privacy Policy', path: '/privacy', description: 'How we protect your data' }
]
</script>

<template>
  <div>
    <Navbar />
    
    <!-- Hero -->
    <section class="relative py-16 bg-gray-900">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Sitemap</h1>
        <p class="text-gray-400">
          Find your way around SEAFRONT VILLAS
        </p>
      </div>
    </section>

    <!-- Sitemap Content -->
    <section class="max-w-4xl mx-auto px-6 py-12">
      
      <!-- Main Pages -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-primary">
          Main Pages
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RouterLink 
            v-for="page in mainPages" 
            :key="page.path"
            :to="page.path"
            class="group p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition border border-gray-100 hover:border-primary/30"
          >
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-semibold text-gray-800 group-hover:text-primary transition">
                  {{ page.name }}
                </h3>
                <p class="text-sm text-gray-500 mt-1">{{ page.description }}</p>
              </div>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-primary transition transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- Blog -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-primary">
          Blog & News
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RouterLink 
            v-for="page in blogPages" 
            :key="page.path"
            :to="page.path"
            class="group p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition border border-gray-100 hover:border-primary/30"
          >
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-semibold text-gray-800 group-hover:text-primary transition">
                  {{ page.name }}
                </h3>
                <p class="text-sm text-gray-500 mt-1">{{ page.description }}</p>
              </div>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-primary transition transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- Legal -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-primary">
          Legal & Information
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RouterLink 
            v-for="page in legalPages" 
            :key="page.path"
            :to="page.path"
            class="group p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition border border-gray-100 hover:border-primary/30"
          >
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-semibold text-gray-800 group-hover:text-primary transition">
                  {{ page.name }}
                </h3>
                <p class="text-sm text-gray-500 mt-1">{{ page.description }}</p>
              </div>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-primary transition transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- XML Sitemap Info -->
      <div class="bg-gray-50 rounded-lg p-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800 mb-2">XML Sitemap</h3>
            <p class="text-gray-600 text-sm mb-4">
              For search engines, we also provide an XML sitemap at:
            </p>
            <code class="bg-gray-800 text-primary px-3 py-2 rounded text-sm block inline">
              {{ $route.fullPath.replace('/sitemap', '/sitemap.xml') }}
            </code>
          </div>
        </div>
      </div>

    </section>

    <Footer />
  </div>
</template>

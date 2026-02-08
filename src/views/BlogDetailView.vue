<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'

const post = ref({
  id: 1,
  title: 'Top 10 Luxury Villas in Saint-Tropez for 2024',
  excerpt: 'Discover our handpicked selection of the most exclusive villas in Saint-Tropez, from beachfront estates to hilltop retreats.',
  content: `Saint-Tropez has long been the playground of the rich and famous, and 2024 sees an exceptional crop of luxury villas hitting the market. From beachfront estates with private access to the crystal-clear waters of the Mediterranean to hilltop retreats offering panoramic views of the bay, here's our curated selection of the most exclusive properties.

## 1. Villa Belle Epoque

This stunning Belle Epoque villa combines period charm with modern luxury. Features include a private infinity pool, manicured gardens, and direct beach access.

## 2. Le Jardin Secret

Nestled in the hills above Saint-Tropez, this contemporary masterpiece offers breathtaking views and complete privacy. The property features a spa, gym, and outdoor kitchen.

## 3. Maison de la Mer

True to its name, this beachfront villa offers unparalleled access to the Mediterranean. Wake up to the sound of waves and enjoy sunset cocktails on your private terrace.

## 4. Le Petit Palais

A medieval fortress turned luxury retreat, this property offers history, character, and every modern amenity including a heated pool and wine cellar.

## 5. Villa des Roses

Surrounded by fragrant gardens, this villa is perfect for those seeking tranquility without sacrificing luxury. The property includes a guest house perfect for visiting friends and family.`,
  image: 'https://images.unsplash.com/photo-1559599238-308793637427?w=1200&q=80',
  date: 'January 15, 2024',
  category: 'Travel Guide',
  author: 'Marie Laurent',
  readTime: '8 min read'
})

const relatedPosts = ref([
  { id: 2, title: 'Hidden Gems: Secret Villas of the French Riviera', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80' },
  { id: 3, title: 'Monaco Grand Prix: Stay in Style', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&q=80' },
  { id: 4, title: 'Wellness Retreats: Villas with Spa', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80' }
])
</script>

<template>
  <div class="bg-white">
    <Navbar />
    
    <main class="max-w-4xl mx-auto px-6 py-8">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <router-link to="/" class="hover:text-primary transition">Home</router-link>
        <span>/</span>
        <router-link to="/blog" class="hover:text-primary transition">Blog</router-link>
        <span>/</span>
        <span class="text-gray-800 truncate">{{ post.title }}</span>
      </div>

      <!-- Article -->
      <article>
        <!-- Header -->
        <div class="text-center mb-8">
          <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">{{ post.category }}</span>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{{ post.title }}</h1>
          <div class="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>{{ post.date }}</span>
            <span>•</span>
            <span>{{ post.readTime }}</span>
            <span>•</span>
            <span>By {{ post.author }}</span>
          </div>
        </div>

        <!-- Featured Image -->
        <div class="aspect-video rounded-xl overflow-hidden mb-8">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
        </div>

        <!-- Content -->
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-600 mb-6 font-medium">{{ post.excerpt }}</p>
          <div v-html="post.content.replace(/\n/g, '<br>')" class="text-gray-600 leading-relaxed"></div>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-100">
          <span class="text-sm text-gray-500 mr-2">Tags:</span>
          <router-link v-for="tag in ['Luxury', 'Saint-Tropez', 'Villas', 'French Riviera', 'Real Estate']" :key="tag" to="/blog" class="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-primary hover:text-white transition">
            {{ tag }}
          </router-link>
        </div>

        <!-- Share -->
        <div class="flex items-center gap-4 mt-6">
          <span class="text-sm text-gray-500">Share:</span>
          <button class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </button>
          <button class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
          </button>
          <button class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
          </button>
        </div>
      </article>

      <!-- Related Posts -->
      <section class="mt-12 pt-12 border-t border-gray-100">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <router-link v-for="related in relatedPosts" :key="related.id" :to="`/blog/${related.id}`" class="group">
            <div class="aspect-video rounded-lg overflow-hidden mb-3">
              <img :src="related.image" :alt="related.title" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            </div>
            <h3 class="font-semibold text-gray-800 group-hover:text-primary transition line-clamp-2">{{ related.title }}</h3>
          </router-link>
        </div>
      </section>

      <!-- Navigation -->
      <div class="flex justify-between items-center mt-12 pt-8 border-t border-gray-100">
        <router-link to="/blog" class="flex items-center gap-2 text-primary hover:text-secondary transition">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Blog
        </router-link>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'

const stats = ref([
  { value: '150+', label: 'Luxury Properties' },
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '98%', label: 'Satisfaction Rate' }
])

const team = ref([
  {
    name: 'Jean-Pierre Dubois',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80'
  },
  {
    name: 'Marie Laurent',
    role: 'Head of Sales',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80'
  },
  {
    name: 'Pierre Beaumont',
    role: 'Property Expert',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
  },
  {
    name: 'Sophie Martin',
    role: 'Client Relations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
  }
])
</script>

<template>
  <div>
    <Navbar />
    
    <!-- Hero -->
    <section class="relative py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Creating unforgettable experiences through exceptional properties since 2008
        </p>
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="text-center"
          >
            <p class="text-4xl md:text-5xl font-bold text-primary mb-2">{{ stat.value }}</p>
            <p class="text-gray-600">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div class="space-y-4 text-gray-600">
            <p>
              Founded in 2008, SEAFRONT VILLAS began with a simple mission: to connect discerning travelers with the most exceptional luxury properties along the French Riviera.
            </p>
            <p>
              What started as a small boutique agency has grown into the region's premier luxury villa rental and sales company, with a portfolio of over 150 handpicked properties.
            </p>
            <p>
              Our team of experienced professionals is dedicated to providing personalized service, ensuring every guest finds their perfect retreat and every buyer discovers their dream home.
            </p>
          </div>
        </div>
        <div class="relative">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
            alt="Our Story"
            class="rounded-xl shadow-lg"
          >
          <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
            <p class="text-3xl font-bold text-primary">15+</p>
            <p class="text-gray-600">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
            <p class="text-gray-500">We strive for excellence in every interaction, ensuring the highest standards of service.</p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Passion</h3>
            <p class="text-gray-500">We are passionate about luxury properties and dedicated to sharing our love of the French Riviera.</p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Trust</h3>
            <p class="text-gray-500">We build lasting relationships through transparency, honesty, and exceptional service.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="member in team" 
          :key="member.name"
          class="text-center"
        >
          <img 
            :src="member.image" 
            :alt="member.name"
            class="w-40 h-40 rounded-full object-cover mx-auto mb-4"
          >
          <h3 class="text-lg font-semibold text-gray-800">{{ member.name }}</h3>
          <p class="text-primary text-sm">{{ member.role }}</p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import SearchBar from '../components/SearchBar.vue'
import { ref } from 'vue'

const reviews = ref([
  {
    id: 1,
    name: 'Sarah M.',
    location: 'London, UK',
    avatar: 'SM',
    rating: 5,
    date: 'January 2024',
    property: 'Villa de la Palme',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    content: `Our stay at Villa de la Palme was absolutely perfect. The team at SEAFRONT VILLAS made everything seamless from booking to departure. The villa exceeded our expectations - the views are breathtaking and the private pool was a highlight. The concierge arranged a private chef for one evening who prepared an incredible dinner. We will definitely be back!`,
    tripType: 'Family Vacation'
  },
  {
    id: 2,
    name: 'Michael & James K.',
    location: 'New York, USA',
    avatar: 'MK',
    rating: 5,
    date: 'December 2023',
    property: 'Chateau Riviera',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    content: `We celebrated our 10th anniversary at Chateau Riviera and it was unforgettable. The estate is magnificent - we felt like royalty. The staff was incredibly attentive without being intrusive. The private beach access and boat trip arranged by the concierge were the highlights of our trip. Cannot recommend SEAFRONT VILLAS enough!`,
    tripType: 'Anniversary'
  },
  {
    id: 3,
    name: 'Emma L.',
    location: 'Sydney, Australia',
    avatar: 'EL',
    rating: 5,
    date: 'November 2023',
    property: 'Maison Bahia',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    content: `The most luxurious villa experience I've ever had. Maison Bahia is stunning, with every detail thoughtfully considered. The property manager was available 24/7 and helped us organize excursions to local vineyards. The spa facilities were incredible after long days of exploring. Already planning our return trip!`,
    tripType: 'Friends Getaway'
  },
  {
    id: 4,
    name: 'Hans & Inge M.',
    location: 'Amsterdam, Netherlands',
    avatar: 'HM',
    rating: 5,
    date: 'October 2023',
    property: 'Villa Serenity',
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    content: `We stayed at Villa Serenity for our honeymoon and it was paradise. The villa is beautiful, clean, and equipped with everything you could need. The wellness facilities are world-class - we did yoga every morning with sea views. The team arranged a surprise champagne sunset cruise for us. Truly magical experience.`,
    tripType: 'Honeymoon'
  },
  {
    id: 5,
    name: 'Chen Family',
    location: 'Singapore',
    avatar: 'CF',
    rating: 5,
    date: 'September 2023',
    property: 'Royal Chateau',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    content: `Our extended family of 12 stayed at Royal Chateau for a week and it was perfect. The chateau has ample space for everyone, and the staff made us feel so welcome. The kids loved the pool and the adults enjoyed the tennis court and wine cellar. SEAFRONT VILLAS handled every detail - airport transfers, grocery stocking, even birthday decorations. Outstanding service!`,
    tripType: 'Family Reunion'
  },
  {
    id: 6,
    name: 'Alexandre P.',
    location: 'Paris, France',
    avatar: 'AP',
    rating: 5,
    date: 'August 2023',
    property: 'Penthouse Marine',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
    content: `As a Parisian, I know the Côte d'Azur well, but this penthouse experience was exceptional. The views over the Croisette are spectacular, especially during the Film Festival. The apartment is beautifully decorated with high-end finishes. The rooftop terrace became our favorite spot for evening cocktails. Will definitely return.`,
    tripType: 'Business Trip'
  }
])

const featuredReview = ref(reviews.value[0])
</script>

<template>
  <div class="bg-white">
    <Navbar />
    <SearchBar />
    
    <main class="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <!-- Header -->
      <div class="text-center mb-10 md:mb-12">
        <h1 class="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Guest Reviews</h1>
        <p class="text-gray-500 text-sm md:text-base">Real experiences from our valued guests</p>
      </div>

      <!-- Featured Review -->
      <div class="mb-12 md:mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div class="relative aspect-[4/3] md:aspect-auto">
            <img :src="featuredReview.image" :alt="featuredReview.property" class="w-full h-full object-cover rounded-xl md:rounded-2xl">
            <div class="absolute bottom-4 left-4 bg-white/90 px-3 py-2 rounded-lg">
              <p class="text-sm font-semibold text-gray-800">{{ featuredReview.property }}</p>
            </div>
          </div>
          <div class="flex flex-col justify-center">
            <div class="flex items-center gap-2 mb-4">
              <div class="flex">
                <svg v-for="n in 5" :key="n" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span class="text-sm text-gray-500">{{ featuredReview.date }}</span>
            </div>
            <blockquote class="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              "{{ featuredReview.content }}"
            </blockquote>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                {{ featuredReview.avatar }}
              </div>
              <div>
                <p class="font-semibold text-gray-800">{{ featuredReview.name }}</p>
                <p class="text-sm text-gray-500">{{ featuredReview.location }}</p>
              </div>
            </div>
            <div class="mt-4 inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
              {{ featuredReview.tripType }}
            </div>
          </div>
        </div>
      </div>

      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="review in reviews.slice(1)" :key="review.id" class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
          <div class="flex items-center gap-2 mb-4">
            <div class="flex">
              <svg v-for="n in 5" :key="n" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <span class="text-xs text-gray-500">{{ review.date }}</span>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">{{ review.content }}</p>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm font-bold">
                {{ review.avatar }}
              </div>
              <div>
                <p class="font-medium text-gray-800 text-sm">{{ review.name }}</p>
                <p class="text-xs text-gray-500">{{ review.location }}</p>
              </div>
            </div>
          </div>
          <div class="mt-3 pt-3 border-t border-gray-200">
            <p class="text-xs text-primary font-medium">{{ review.property }}</p>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-12 md:mt-16 bg-gray-900 rounded-2xl p-8 md:p-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div>
            <p class="text-3xl md:text-4xl font-bold text-white mb-2">500+</p>
            <p class="text-gray-400 text-sm">Happy Guests</p>
          </div>
          <div>
            <p class="text-3xl md:text-4xl font-bold text-white mb-2">98%</p>
            <p class="text-gray-400 text-sm">5-Star Reviews</p>
          </div>
          <div>
            <p class="text-3xl md:text-4xl font-bold text-white mb-2">150+</p>
            <p class="text-gray-400 text-sm">Luxury Villas</p>
          </div>
          <div>
            <p class="text-3xl md:text-4xl font-bold text-white mb-2">15+</p>
            <p class="text-gray-400 text-sm">Years Experience</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 md:mt-16 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Ready to Create Your Own Review?</h2>
        <p class="text-gray-500 mb-6">Book your luxury villa experience today</p>
        <router-link to="/properties" class="inline-block px-8 py-4 bg-primary text-white rounded-lg hover:bg-secondary font-semibold transition">Browse Villas</router-link>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import PropertyGallery from '../components/PropertyGallery.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const propertiesData = {
  1: { 
    id: 1, 
    name: 'Villa de la Palme', 
    location: 'Gassin, French Riviera, France', 
    price: 5354, 
    guests: 8, 
    bedrooms: 4, 
    bathrooms: 4, 
    rating: 4.9,
    reviewCount: 47,
    description: 'Welcome to Villa de la Palme, an exceptional property nestled in the heart of the French Riviera. This stunning villa offers breathtaking views of the Mediterranean Sea and the surrounding landscape.', 
    amenities: ['Private swimming pool', 'Sea view', 'Garden', 'Fully equipped kitchen', 'Air conditioning', 'WiFi', 'Parking', 'Security system'], 
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80'],
    reviews: [
      { id: 1, author: 'Sarah M.', avatar: 'SM', country: 'United Kingdom', date: 'August 2023', rating: 5, tripType: 'Family Vacation', title: 'Absolutely stunning villa!', content: 'We spent two wonderful weeks at Villa de la Palme and couldn\'t have been happier. The views are spectacular, the pool is amazing, and the location is perfect for exploring the French Riviera.', helpful: 12 },
      { id: 2, author: 'James T.', avatar: 'JT', country: 'United States', date: 'July 2023', rating: 5, tripType: 'Anniversary', title: 'Perfect romantic getaway', content: 'Celebrated our anniversary here and it was magical. The sunset views from the terrace are unforgettable. Highly recommend!', helpful: 8 },
      { id: 3, author: 'Marie L.', avatar: 'ML', country: 'France', date: 'June 2023', rating: 4, tripType: 'Friends Reunion', title: 'Great stay with minor issues', content: 'Beautiful property with everything you need for a luxury stay. The only minor issue was occasional noise from nearby road, but otherwise perfect.', helpful: 5 }
    ]
  },
  2: { 
    id: 2, 
    name: 'Maison Bahia', 
    location: 'Cannes, French Riviera, France', 
    price: 4200, 
    guests: 6, 
    bedrooms: 3, 
    bathrooms: 3,
    rating: 4.8,
    reviewCount: 32,
    description: 'Maison Bahia is a beautiful Provencal villa located in the hills of Cannes.', 
    amenities: ['Private pool', 'Sea view', 'Garden', 'Kitchen', 'WiFi', 'Parking'], 
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'],
    reviews: [
      { id: 1, author: 'Peter H.', avatar: 'PH', country: 'Australia', date: 'September 2023', rating: 5, tripType: 'Family Vacation', title: 'Perfect family retreat', content: 'We loved every moment at Maison Bahia. The kids loved the pool and we enjoyed the peaceful location.', helpful: 6 }
    ]
  },
  3: { 
    id: 3, 
    name: 'Le Petit Chateau', 
    location: 'Saint-Tropez, France', 
    price: 8900, 
    guests: 10, 
    bedrooms: 5, 
    bathrooms: 5,
    rating: 5.0,
    reviewCount: 28,
    description: 'A magnificent château with stunning views over the Bay of Saint-Tropez.', 
    amenities: ['Private pool', 'Sea view', 'Wine cellar', 'Spa', 'Gym', 'Tennis court'], 
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80'],
    reviews: [
      { id: 1, author: 'Emma W.', avatar: 'EW', country: 'Singapore', date: 'August 2023', rating: 5, tripType: 'Friends Reunion', title: 'Once in a lifetime experience', content: 'This chateau exceeded all expectations. The tennis court and spa facilities made our trip unforgettable.', helpful: 15 }
    ]
  },
  4: { id: 4, name: 'Villa Azura', location: 'Antibes, France', price: 6100, guests: 8, bedrooms: 4, bathrooms: 4, rating: 4.7, reviewCount: 19, description: 'Modern luxury villa with direct beach access and panoramic sea views.', amenities: ['Beach access', 'Private pool', 'Sea view', 'Smart home', 'Spa'], images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80'], reviews: [] },
  5: { id: 5, name: 'Residence Celeste', location: 'Nice, France', price: 3800, guests: 4, bedrooms: 2, bathrooms: 2, rating: 4.6, reviewCount: 25, description: 'Elegant apartment in the heart of Nice with stunning city views.', amenities: ['City view', 'Kitchen', 'WiFi', 'Air conditioning'], images: ['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80'], reviews: [] },
  6: { id: 6, name: 'Villa Serenity', location: 'Monaco', price: 12500, guests: 12, bedrooms: 6, bathrooms: 6, rating: 4.9, reviewCount: 38, description: 'Ultra-luxury villa in Monaco with panoramic Mediterranean views.', amenities: ['Panoramic view', 'Private pool', 'Helipad', 'Concierge', 'Spa'], images: ['https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80', 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80'], reviews: [] }
}

const property = ref(null)
const isFavorite = ref(false)
const checkIn = ref('')
const checkOut = ref('')
const guests = ref(2)
const showAllReviews = ref(false)

onMounted(() => {
  const id = route.params.id
  if (propertiesData[id]) {
    property.value = propertiesData[id]
  } else {
    router.push('/properties')
  }
})

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

const renderStars = (rating) => {
  return Array(5).fill(0).map((_, i) => i < Math.round(rating))
}
</script>

<template>
  <div v-if="property" class="bg-white">
    <Navbar />
    
    <main class="max-w-7xl mx-auto px-6 py-8">
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <router-link to="/" class="hover:text-primary transition">Home</router-link>
        <span>/</span>
        <router-link to="/properties" class="hover:text-primary transition">Properties</router-link>
        <span>/</span>
        <span class="text-gray-800">{{ property.name }}</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <PropertyGallery :images="property.images" :propertyName="property.name" />

          <div class="mt-8">
            <div class="flex justify-between items-start">
              <div>
                <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ property.name }}</h1>
                <p class="text-gray-500 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                  {{ property.location }}
                </p>
              </div>
              <button class="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:border-primary transition" :class="{ 'border-primary': isFavorite }" @click="toggleFavorite">
                <svg class="w-6 h-6" :class="isFavorite ? 'text-primary fill-primary' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </button>
            </div>

            <div class="flex gap-6 mt-6 py-6 border-y border-gray-100">
              <div class="flex items-center gap-2 text-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <span class="font-semibold">{{ property.guests }}</span>
                <span class="text-sm">guests</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                </svg>
                <span class="font-semibold">{{ property.bedrooms }}</span>
                <span class="text-sm">bedrooms</span>
              </div>
              <div class="flex items-center gap-2 text-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                </svg>
                <span class="font-semibold">{{ property.bathrooms }}</span>
                <span class="text-sm">bathrooms</span>
              </div>
            </div>

            <div class="mt-8">
              <h2 class="text-xl font-bold text-gray-800 mb-4">About this property</h2>
              <p class="text-gray-600 leading-relaxed">{{ property.description }}</p>
            </div>

            <div class="mt-8">
              <h2 class="text-xl font-bold text-gray-800 mb-4">Amenities</h2>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="amenity in property.amenities" :key="amenity" class="flex items-center gap-3 text-gray-600">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {{ amenity }}
                </div>
              </div>
            </div>

            <!-- REVIEWS SECTION -->
            <div class="mt-12 pt-8 border-t border-gray-200">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <span>⭐ Guest Reviews</span>
                  <span v-if="property.rating" class="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-lg text-lg">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    {{ property.rating }}
                  </span>
                  <span class="text-gray-400 font-normal text-lg">({{ property.reviewCount }} reviews)</span>
                </h2>
                <router-link to="/reviews" class="text-primary hover:text-secondary font-medium transition">
                  View all reviews →
                </router-link>
              </div>

              <div v-if="property.reviews && property.reviews.length > 0" class="grid md:grid-cols-2 gap-6">
                <div v-for="review in (showAllReviews ? property.reviews : property.reviews.slice(0, 4))" :key="review.id" class="bg-gray-50 rounded-xl p-6">
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                        {{ review.avatar }}
                      </div>
                      <div>
                        <p class="font-semibold text-gray-800">{{ review.author }}</p>
                        <p class="text-sm text-gray-500">{{ review.country }} • {{ review.date }}</p>
                      </div>
                    </div>
                    <div class="flex">
                      <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-200'" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div class="mb-2">
                    <span class="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">{{ review.tripType }}</span>
                  </div>
                  
                  <h4 class="font-semibold text-gray-800 mb-2">{{ review.title }}</h4>
                  <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ review.content }}</p>
                  
                  <button class="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                    </svg>
                    Helpful ({{ review.helpful }})
                  </button>
                </div>
              </div>

              <div v-if="property.reviews && property.reviews.length > 4 && !showAllReviews" class="mt-6 text-center">
                <button @click="showAllReviews = true" class="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition">
                  Show all {{ property.reviews.length }} reviews
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
              </div>

              <div v-if="!property.reviews || property.reviews.length === 0" class="text-center py-12 bg-gray-50 rounded-xl">
                <div class="text-4xl mb-4">📝</div>
                <p class="text-gray-500">No reviews yet for this property.</p>
                <p class="text-sm text-gray-400 mt-2">Be the first to leave a review after your stay!</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="sticky top-8 bg-white rounded-xl border border-gray-200 p-6 shadow-lg">
            <div class="flex items-baseline gap-2 mb-6">
              <span class="text-3xl font-bold text-gray-800">€{{ property.price }}</span>
              <span class="text-gray-500">per night</span>
            </div>

            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-gray-600 mb-1">Check-in</label>
                  <input v-model="checkIn" type="date" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary">
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-1">Check-out</label>
                  <input v-model="checkOut" type="date" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary">
                </div>
              </div>

              <div>
                <label class="block text-sm text-gray-600 mb-1">Guests</label>
                <select v-model="guests" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary">
                  <option v-for="n in property.guests" :key="n" :value="n">{{ n }} guest{{ n > 1 ? 's' : '' }}</option>
                </select>
              </div>

              <button class="w-full py-4 bg-primary text-white rounded-lg hover:bg-secondary transition font-semibold text-lg">Book Now</button>
              <p class="text-center text-sm text-gray-500">You won't be charged yet</p>
            </div>

            <div class="mt-6 pt-6 border-t border-gray-100 space-y-3 text-sm">
              <div class="flex justify-between text-gray-600">
                <span>€{{ property.price }} x 5 nights</span>
                <span>€{{ (property.price * 5).toLocaleString() }}</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Cleaning fee</span>
                <span>€350</span>
              </div>
              <div class="flex justify-between text-gray-600">
                <span>Service fee</span>
                <span>€250</span>
              </div>
              <div class="flex justify-between font-bold text-gray-800 pt-3 border-t border-gray-100">
                <span>Total</span>
                <span>€{{ ((property.price * 5) + 350 + 250).toLocaleString() }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

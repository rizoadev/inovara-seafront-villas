<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const subjects = [
  'General Inquiry',
  'Property Booking',
  'Property Viewing',
  'Buying a Property',
  'Partnership',
  'Press & Media',
  'Other'
];

const isSubmitting = ref(false)

const submitForm = () => {
  isSubmitting.value = true
  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false
    alert('Thank you for your message! We will get back to you soon.')
    form.value = { name: '', email: '', phone: '', subject: '', message: '' }
  }, 1000)
}
</script>

<template>
  <div>
    <Navbar />
    
    <main class="max-w-7xl mx-auto px-6 py-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p class="text-gray-500 max-w-2xl mx-auto">
          Get in touch with our team for any questions or inquiries
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Contact Info -->
        <div class="lg:col-span-1">
          <div class="bg-gray-50 rounded-xl p-8">
            <h2 class="text-xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 mb-1">Phone</p>
                  <p class="text-gray-800 font-medium">+33 4 00 00 00 00</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 mb-1">Email</p>
                  <p class="text-gray-800 font-medium">hello@sefrontvillas.com</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 mb-1">Address</p>
                  <p class="text-gray-800 font-medium">Cannes, French Riviera<br>France</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500 mb-1">Office Hours</p>
                  <p class="text-gray-800 font-medium">Mon - Fri: 9:00 - 18:00<br>Sat: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <form @submit.prevent="submitForm" class="bg-white rounded-xl border border-gray-200 p-8">
            <h2 class="text-xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm text-gray-600 mb-2">Name *</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your name"
                >
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-2">Email *</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                >
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm text-gray-600 mb-2">Phone</label>
                <input 
                  v-model="form.phone"
                  type="tel" 
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="+33 6 00 00 00 00"
                >
              </div>
              <div>
                <label class="block text-sm text-gray-600 mb-2">Subject *</label>
                <select 
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                >
                  <option value="">Select a subject</option>
                  <option v-for="subject in subjects" :key="subject" :value="subject">{{ subject }}</option>
                </select>
              </div>
            </div>

            <div class="mb-6">
              <label class="block text-sm text-gray-600 mb-2">Message *</label>
              <textarea 
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button 
              type="submit"
              :disabled="isSubmitting"
              class="px-8 py-4 bg-primary text-white rounded-lg hover:bg-secondary transition font-semibold disabled:opacity-50"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>

      <!-- Map -->
      <div class="mt-16">
        <div class="bg-gray-100 rounded-xl overflow-hidden h-96">
          <img 
            src="https://images.unsplash.com/photo-1523699289804-55347c09047d?w=1200&q=80" 
            alt="Map"
            class="w-full h-full object-cover"
          >
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'

const acceptedTerms = ref(false)
const agreedDate = ref('')

const acceptTerms = () => {
  if (acceptedTerms.value) {
    agreedDate.value = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } else {
    agreedDate.value = ''
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div>
    <Navbar />
    
    <!-- Hero -->
    <section class="relative py-16 bg-gray-900">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
        <p class="text-gray-400">
          Please read our terms carefully before using our services
        </p>
      </div>
    </section>

    <!-- Terms Content -->
    <section class="max-w-4xl mx-auto px-6 py-12">
      <div class="prose prose-lg max-w-none text-gray-600">
        
        <!-- Introduction -->
        <div id="introduction" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
          <p>
            Welcome to SEAFRONT VILLAS. By accessing or using our website and services, 
            you agree to be bound by these Terms & Conditions. If you do not agree with 
            any part of these terms, please do not use our services.
          </p>
        </div>

        <!-- Services -->
        <div id="services" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">2. Services Provided</h2>
          <p class="mb-4">
            SEAFRONT VILLAS provides luxury villa rental and property sales services 
            along the French Riviera. Our services include:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Short-term luxury villa rentals</li>
            <li>Property sales consultation</li>
            <li>Concierge and travel planning services</li>
            <li>Property management services</li>
          </ul>
        </div>

        <!-- Booking Terms -->
        <div id="booking" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">3. Booking & Reservations</h2>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p class="text-blue-800">
              <strong>Important:</strong> A 30% deposit is required at the time of booking. 
              The remaining balance is due 60 days before arrival.
            </p>
          </div>
          <ul class="list-disc pl-6 space-y-2">
            <li>Minimum stay: 7 nights during peak season, 3 nights during off-peak</li>
            <li>Check-in: 4:00 PM | Check-out: 10:00 AM</li>
            <li>Cancellation more than 60 days before arrival: Full refund minus admin fee</li>
            <li>Cancellation 30-60 days before arrival: 50% refund</li>
            <li>Cancellation less than 30 days before arrival: No refund</li>
          </ul>
        </div>

        <!-- Guest Responsibilities -->
        <div id="responsibilities" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">4. Guest Responsibilities</h2>
          <p class="mb-4">Guests agree to:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Maintain the property in good condition</li>
            <li>Report any damages or issues immediately</li>
            <li>Respect neighboring properties and privacy</li>
            <li>Follow all house rules provided at check-in</li>
            <li>Not exceed the maximum occupancy stated in the booking</li>
            <li>Not smoke inside any of our properties</li>
            <li>Not host unauthorized events or parties</li>
          </ul>
        </div>

        <!-- Liability -->
        <div id="liability" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">5. Liability & Insurance</h2>
          <p class="mb-4">
            SEAFRONT VILLAS shall not be held liable for:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Any loss, theft, or damage to personal belongings</li>
            <li>Any injuries sustained on the property</li>
            <li>Any disruptions caused by maintenance, weather, or third parties</li>
            <li>Any indirect or consequential damages</li>
          </ul>
          <p class="mt-4">
            We strongly recommend that all guests obtain comprehensive travel insurance 
            that covers cancellations, medical emergencies, and personal belongings.
          </p>
        </div>

        <!-- Privacy -->
        <div id="privacy" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">6. Privacy & Data Protection</h2>
          <p>
            Your personal information is handled in accordance with our Privacy Policy. 
            We collect and process your data solely for the purpose of providing our services 
            and improving your experience. We do not share your information with third parties 
            without your consent, except as required by law.
          </p>
        </div>

        <!-- Intellectual Property -->
        <div id="ip" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">7. Intellectual Property</h2>
          <p>
            All content on this website, including images, text, logos, and designs, is the 
            property of SEAFRONT VILLAS or our partners and is protected by copyright laws. 
            Unauthorized use or reproduction of any content is strictly prohibited.
          </p>
        </div>

        <!-- Changes to Terms -->
        <div id="changes" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">8. Changes to Terms</h2>
          <p>
            SEAFRONT VILLAS reserves the right to modify these Terms & Conditions at any time. 
            Any changes will be effective immediately upon posting on this page. Your continued 
            use of our services after any modifications constitutes acceptance of the new terms.
          </p>
        </div>

        <!-- Contact -->
        <div id="contact" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">9. Contact Information</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us:
          </p>
          <div class="bg-gray-50 p-6 rounded-lg mt-4">
            <p><strong>SEAFRONT VILLAS</strong></p>
            <p>123 Coastal Road, French Riviera</p>
            <p>Email: info@seafrontvillas.com</p>
            <p>Phone: +33 4 93 XX XX XX</p>
          </div>
        </div>

        <!-- Acceptance -->
        <div class="bg-gray-50 p-6 rounded-lg mt-8">
          <label class="flex items-start space-x-3 cursor-pointer">
            <input 
              type="checkbox" 
              v-model="acceptedTerms"
              @change="acceptTerms"
              class="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
            >
            <span class="text-gray-700">
              I have read and agree to the Terms & Conditions
            </span>
          </label>
          
          <div v-if="acceptedTerms" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p class="text-green-800">
              ✓ Terms accepted on {{ agreedDate }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

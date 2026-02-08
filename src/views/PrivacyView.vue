<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    
    <!-- Hero -->
    <section class="relative py-16 bg-gray-900">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <p class="text-gray-400">
          How we protect and use your personal information
        </p>
      </div>
    </section>

    <!-- Privacy Content -->
    <section class="max-w-4xl mx-auto px-6 py-12">
      <div class="prose prose-lg max-w-none text-gray-600">
        
        <!-- Introduction -->
        <div id="introduction" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
          <p>
            At SEAFRONT VILLAS, we respect your privacy and are committed to protecting your 
            personal data. This Privacy Policy explains how we collect, use, and safeguard 
            your information when you visit our website or use our services.
          </p>
        </div>

        <!-- Data Collection -->
        <div id="collection" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
          <p class="mb-4">We may collect the following types of information:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, passport details</li>
            <li><strong>Booking Information:</strong> Villa preferences, travel dates, number of guests</li>
            <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely)</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on site</li>
            <li><strong>Communication Data:</strong> Messages, feedback, and inquiries sent to us</li>
          </ul>
        </div>

        <!-- How We Use -->
        <div id="usage" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
          <p class="mb-4">We use your information for the following purposes:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>To process and manage your villa bookings</li>
            <li>To communicate with you about your reservations</li>
            <li>To provide customer support and respond to inquiries</li>
            <li>To send you promotional materials about our services (with your consent)</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal obligations and prevent fraud</li>
          </ul>
        </div>

        <!-- Data Sharing -->
        <div id="sharing" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">4. Data Sharing & Disclosure</h2>
          <p class="mb-4">
            We do not sell or rent your personal information to third parties. We may share 
            your data only with:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Service Providers:</strong> Trusted partners who help us operate our business (payment processors, IT services)</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
            <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of our business</li>
          </ul>
        </div>

        <!-- Data Security -->
        <div id="security" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or 
            destruction. This includes SSL encryption, secure servers, and regular security 
            assessments. However, no method of transmission over the internet is 100% secure.
          </p>
        </div>

        <!-- Cookies -->
        <div id="cookies" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">6. Cookies & Tracking Technologies</h2>
          <p class="mb-4">Our website uses cookies and similar technologies to:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and performance</li>
            <li>Personalize content and advertisements</li>
          </ul>
          <p class="mt-4">
            You can disable cookies through your browser settings, but some features of our 
            website may not function properly.
          </p>
        </div>

        <!-- Your Rights -->
        <div id="rights" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">7. Your Rights</h2>
          <p class="mb-4">You have the following rights regarding your personal data:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
            <li><strong>Objection:</strong> Object to the processing of your data for marketing purposes</li>
          </ul>
          <p class="mt-4">
            To exercise these rights, please contact us at info@seafrontvillas.com
          </p>
        </div>

        <!-- Data Retention -->
        <div id="retention" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">8. Data Retention</h2>
          <p>
            We retain your personal data for as long as necessary to fulfill the purposes 
            outlined in this policy, typically for the duration of your business relationship 
            with us plus 5 years for legal and tax purposes. After this period, your data 
            will be securely deleted.
          </p>
        </div>

        <!-- Children's Privacy -->
        <div id="children" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">9. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not 
            knowingly collect personal information from children. If you believe we have 
            collected information from a child, please contact us immediately.
          </p>
        </div>

        <!-- International Transfers -->
        <div id="international" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than 
            your country of residence. These countries may have data protection laws that 
            are less protective than the laws of your country. By using our services, 
            you consent to the transfer of your information to these countries.
          </p>
        </div>

        <!-- Changes -->
        <div id="changes" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be 
            effective immediately upon posting on this page with the updated date. We 
            encourage you to review this policy periodically.
          </p>
        </div>

        <!-- Contact -->
        <div id="contact" class="mb-10">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, 
            please contact us:
          </p>
          <div class="bg-gray-50 p-6 rounded-lg mt-4">
            <p><strong>SEAFRONT VILLAS</strong></p>
            <p>123 Coastal Road, French Riviera</p>
            <p>Email: info@seafrontvillas.com</p>
            <p>Phone: +33 4 93 XX XX XX</p>
          </div>
        </div>

        <!-- Last Updated -->
        <div class="text-gray-400 text-sm mt-12 pt-6 border-t">
          <p>Last updated: February 2024</p>
        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

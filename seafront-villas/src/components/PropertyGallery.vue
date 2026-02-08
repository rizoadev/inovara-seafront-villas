<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
  propertyName: { type: String, default: 'Property' }
})

const emit = defineEmits(['image-click'])

const currentIndex = ref(0)
const showModal = ref(false)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const goTo = (index) => {
  currentIndex.value = index
}

const openModal = () => {
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = ''
}

const currentImage = computed(() => props.images[currentIndex.value])
</script>

<template>
  <div>
    <!-- Main Gallery -->
    <div class="relative">
      <!-- Main Image -->
      <div class="relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer" @click="openModal">
        <img 
          :src="currentImage" 
          :alt="propertyName"
          class="w-full h-full object-cover"
        >
        
        <!-- Navigation Arrows -->
        <button 
          v-if="images.length > 1"
          class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition"
          @click.stop="prev"
        >
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button 
          v-if="images.length > 1"
          class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition"
          @click.stop="next"
        >
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- View All Button -->
        <button class="absolute bottom-4 right-4 px-4 py-2 bg-white/90 rounded-lg text-sm font-medium hover:bg-white transition flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
          View all {{ images.length }} photos
        </button>
      </div>

      <!-- Thumbnails -->
      <div v-if="images.length > 1" class="flex gap-3 mt-4 overflow-x-auto pb-2">
        <button 
          v-for="(image, index) in images" 
          :key="index"
          class="flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition cursor-pointer"
          :class="currentIndex === index ? 'border-primary' : 'border-transparent hover:border-gray-300'"
          @click="goTo(index)"
        >
          <img :src="image" :alt="`${propertyName} ${index + 1}`" class="w-full h-full object-cover">
        </button>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showModal" class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" @click="closeModal">
          <!-- Close Button -->
          <button class="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition z-10" @click="closeModal">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Counter -->
          <div class="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full text-white">
            {{ currentIndex + 1 }} / {{ images.length }}
          </div>

          <!-- Prev Button -->
          <button 
            v-if="images.length > 1"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
            @click.stop="prev"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <!-- Main Image -->
          <img 
            :src="currentImage" 
            :alt="propertyName"
            class="max-w-[90vw] max-h-[85vh] object-contain"
            @click.stop
          >

          <!-- Next Button -->
          <button 
            v-if="images.length > 1"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
            @click.stop="next"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Thumbnails Bar -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-white/10 rounded-full max-w-[80vw] overflow-x-auto">
            <button 
              v-for="(image, index) in images" 
              :key="index"
              class="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 transition opacity-60 hover:opacity-100"
              :class="currentIndex === index ? 'border-primary opacity-100' : 'border-transparent'"
              @click.stop="goTo(index)"
            >
              <img :src="image" :alt="`${index + 1}`" class="w-full h-full object-cover">
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

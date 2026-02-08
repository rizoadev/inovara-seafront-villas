import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PropertiesView from '../views/PropertiesView.vue'
import PropertyDetailView from '../views/PropertyDetailView.vue'
import GalleryView from '../views/GalleryView.vue'
import DestinationsView from '../views/DestinationsView.vue'
import BlogView from '../views/BlogView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'
import ReviewsView from '../views/ReviewsView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ForSaleView from '../views/ForSaleView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/properties', name: 'properties', component: PropertiesView },
  { path: '/property/:id', name: 'property-detail', component: PropertyDetailView },
  { path: '/gallery', name: 'gallery', component: GalleryView },
  { path: '/destinations', name: 'destinations', component: DestinationsView },
  { path: '/blog', name: 'blog', component: BlogView },
  { path: '/blog/:id', name: 'blog-detail', component: BlogDetailView },
  { path: '/reviews', name: 'reviews', component: ReviewsView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/for-sale', name: 'for-sale', component: ForSaleView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router

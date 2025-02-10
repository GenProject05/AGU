<template>
  <nav class="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-xl">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo Section -->
        <div class="flex-shrink-0">
          <RouterLink to="/" class="flex items-center">
            <img
              src="@/assets/logo AGU.jpg"
              alt="logo"
              class="w-10 h-10 rounded-full transform hover:scale-110 transition-transform duration-300 shadow-md"
            />
            <span class="ml-3 text-white font-bold text-xl hidden sm:block">AGU</span>
          </RouterLink>
        </div>

        <!-- Navigation Links -->
        <div class="hidden sm:block">
          <div class="flex items-center space-x-8">
            <RouterLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="relative px-3 py-2 text-white text-sm font-medium transition-all duration-300 ease-in-out
                     hover:text-indigo-200 group"
              :class="{ 'text-indigo-200': $route.path === link.to }"
            >
              {{ link.text }}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0
                       group-hover:scale-x-100 transition-transform duration-300 origin-left"
                :class="{ 'scale-x-100': $route.path === link.to }"
              ></span>
            </RouterLink>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-indigo-200
                   hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2
                   focus:ring-inset focus:ring-white transition-colors duration-300"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              :class="{ 'hidden': isOpen, 'block': !isOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ 'block': isOpen, 'hidden': !isOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isOpen"
      class="sm:hidden bg-indigo-900 shadow-lg"
      v-click-outside="() => isOpen = false"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block px-3 py-2 rounded-md text-base font-medium text-white
                 hover:bg-indigo-700 hover:text-indigo-200 transition-colors duration-300"
          :class="{ 'bg-indigo-700 text-indigo-200': $route.path === link.to }"
          @click="isOpen = false"
        >
          {{ link.text }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/albums', text: 'Albums' },
  { to: '/about', text: 'About' },
  { to: '/login', text: 'Login' },
  { to: '/register', text: 'Register' },
]

// Click outside directive
const vClickOutside = {
  mounted(el: any, binding: any) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>

<style scoped>
.router-link-active {
  @apply text-indigo-200;
}

@keyframes slideDown {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.mobile-menu-enter-active {
  animation: slideDown 0.3s ease-out;
}

.mobile-menu-leave-active {
  animation: slideDown 0.3s ease-out reverse;
}
</style>

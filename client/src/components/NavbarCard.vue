<template>
  <nav class="bg-gradient-to-r from-yellow-600 to-indigo-600 shadow-lg py-4 px-6">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center">
        <RouterLink to="/">
          <img src="@/assets/logo AGU.jpg" alt="logo" class="w-11 h-11 rounded-full" />
        </RouterLink>
      </div>

      <!-- Navbar Links -->
      <ul class="flex items-center space-x-8">
        <li>
          <RouterLink
            to="/"
            class="text-white text-lg font-semibold hover:text-indigo-200 transition duration-300"
            active-class="text-indigo-200 border-b-4 border-indigo-300"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/albums"
            class="text-white text-lg font-semibold hover:text-indigo-200 transition duration-300"
            active-class="text-indigo-200 border-b-4 border-indigo-300"
          >
            Albums
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            class="text-white text-lg font-semibold hover:text-indigo-200 transition duration-300"
            active-class="text-indigo-200 border-b-4 border-indigo-300"
          >
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/login"
            class="text-white text-lg font-semibold hover:text-indigo-200 transition duration-300"
            active-class="text-indigo-200 border-b-4 border-indigo-300"
          >
            Login
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>

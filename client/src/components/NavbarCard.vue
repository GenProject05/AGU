<template>
  <nav class="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg py-4 px-6">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center">
        <img src="@/assets/logo AGU.jpg" alt="logo" class="w-14 h-14 rounded-full border-2 border-white" />
      </div>

      <!-- Navbar Links -->
      <ul class="flex items-center space-x-8">
        <li>
          <RouterLink
            to="/"
            class="text-white text-lg font-semibold hover:text-indigo-200 transition duration-300 relative"
            active-class="text-indigo-200 border-b-4 border-indigo-300"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/albums"
            class="text-white text-lg font-semibold hover:text-indigo-200 transition duration-300 relative"
            active-class="text-indigo-200 border-b-4 border-indigo-300"
          >
            Albums
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            class="text-white text-lg font-semibold hover:text-indigo-200 transition duration-300 relative"
            active-class="text-indigo-200 border-b-4 border-indigo-300"
          >
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/login"
            class="text-white text-lg font-semibold hover:text-indigo-200 transition duration-300 relative"
            active-class="text-indigo-200 border-b-4 border-indigo-300"
          >
            Login
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
</style>

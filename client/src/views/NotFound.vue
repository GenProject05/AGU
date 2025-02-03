<script setup lang="ts">
import NavbarCard from '@/components/NavbarCard.vue'
import FooterCard from '@/components/FooterCard.vue'
</script>

<template>
  <NavbarCard />

  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 class="text-7xl font-bold text-red-600">404</h1>
    <p class="text-2xl text-gray-600 mt-2">Oops! Halaman yang kamu cari tidak ditemukan.</p>
    <RouterLink
      to="/"
      class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
    >
      Kembali ke Home
    </RouterLink>
  </div>

  <FooterCard />
</template>

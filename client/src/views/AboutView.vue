<script setup lang="ts">
import FooterCard from '@/components/FooterCard.vue'
import NavbarCard from '@/components/NavbarCard.vue'
</script>

<template>
  <main>
    <NavbarCard />
    <section class="bg-white py-8">
      <div class="container mx-auto px-6 md:px-12">
        <div class="mb-16 text-center">
          <h2 class="text-3xl font-bold mb-4">Welcome to AGU</h2>
          <p class="text-gray-600">
            AGU stands for Ayam Goreng United, which is a simple name for a simple person.
          </p>
        </div>
      </div>
    </section>
    <FooterCard />
  </main>
</template>

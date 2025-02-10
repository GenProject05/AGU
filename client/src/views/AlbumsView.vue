<script setup lang="ts">
import NavbarCard from '@/components/NavbarCard.vue'
import FooterCard from '@/components/FooterCard.vue'
import AlbumsCard from '@/components/AlbumsCard.vue'
</script>
<template>
  <div class="bg-gray-100 w-screen">
    <NavbarCard />

    <main class="container mx-auto p-4">
      <h1 class="text-4xl font-bold mb-4">Albums</h1>

      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <li v-for="album in albums" :key="album.id" class="bg-white rounded-lg shadow-lg p-4">
          {{ album.title }}
        </li>
      </ul>
    </main>

    <FooterCard />
  </div>
</template>

<style scoped>
main {
  @media (min-width: 640px) {
    max-width: 1280px;
  }
}
</style>

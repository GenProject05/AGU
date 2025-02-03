<template>
  <div class="relative bg-gray-100 h-[400px] rounded-lg">
    <div class="absolute inset-0 bg-black opacity-40"></div>
    <div class="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
      <div>
        <h1 class="text-5xl font-bold mb-4">Selamat Datang di AGU!</h1>
        <p class="text-2xl mb-6">
          Temukan pengalaman baru dalam berinteraksi dengan media yang menyenangkan dan efektif.
        </p>
        <RouterLink
          to="/albums"
          class="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition duration-300"
          >Jelajahi Sekarang</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HeroCard',
}
</script>

<style scoped></style>

<template>
  <div class="relative bg-cover bg-center h-[400px] rounded-lg" :style="{ backgroundImage: 'url(https://source.unsplash.com/random/1600x900)' }">
    <div class="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
    <div class="relative z-10 flex items-center justify-center h-full text-center text-white px-8">
      <div>
        <h1 class="text-5xl font-extrabold mb-5">Selamat Datang di AGUS!</h1>
        <p class="text-xl mb-8">Temukan pengalaman baru dalam berinteraksi dengan media yang menyenangkan dan efektif.</p>
        <button class="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out">Jelajahi Sekarang</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroCard',
};
</script>

<style scoped>
</style>


<script setup lang="ts">
import NavbarCard from '@/components/NavbarCard.vue'
import FooterCard from '@/components/FooterCard.vue'
</script>

<template>
  <div>
    <NavbarCard />
    <p>Hello, World!</p>
    <FooterCard />
  </div>
</template>

<style scoped>
p {
  color: blue;
  font-size: 20px;
}
</style>

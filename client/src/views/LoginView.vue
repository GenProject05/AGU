<script setup lang="ts">
import NavbarCard from '@/components/NavbarCard.vue'
import FooterCard from '@/components/FooterCard.vue'
import LoginCard from '@/components/Login/widget/LoginCard.vue'
</script>

<template>
  <div>
    <NavbarCard />
    <LoginCard />
    <FooterCard />
  </div>
</template>

<style scoped>
p {
  color: blue;
  font-size: 20px;
}
</style>

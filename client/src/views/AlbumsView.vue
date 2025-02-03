<script setup lang="ts">
import { ref } from 'vue'
import FooterCard from '@/components/FooterCard.vue'
import NavbarCard from '@/components/NavbarCard.vue'

const albums = ref([
  { id: 1, title: 'Album 1' },
  { id: 2, title: 'Album 2' },
  { id: 3, title: 'Album 3' },
])
</script>

<template>
  <div>
    <NavbarCard />
    <h1>Albums</h1>
    <ul>
      <li v-for="album in albums" :key="album.id">
        {{ album.title }}
      </li>
    </ul>
    <FooterCard />
  </div>
</template>

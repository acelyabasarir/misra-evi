<template>
  <section class="page-hero">
    <div class="container">
      <h1>Şiirler</h1>
      <p>
        İçimde kalan seslerin, gecenin, şehrin ve suskunluğun kelimelere dönüştüğü yer.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="poems-grid">
        <PoemCard
          v-for="poem in poems"
          :key="poem.id"
          :poem="poem"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import PoemCard from '../components/PoemCard.vue'
import { poems } from '../data/poems'
</script>

<style scoped>
.poems-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 960px) {
  .poems-grid {
    grid-template-columns: 1fr;
  }
}
</style>
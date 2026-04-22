<template>
  <section v-if="poem" class="section">
    <div class="container detail-wrap">
      <article class="detail-card card">
        <p class="detail-meta">{{ poem.category }} • {{ poem.date }}</p>
        <h1>{{ poem.title }}</h1>
        <pre>{{ poem.content }}</pre>
      </article>
    </div>
  </section>

  <section v-else class="section">
    <div class="container">
      <h1>Şiir bulunamadı</h1>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { poems } from '../data/poems'

const route = useRoute()
const poem = poems.find((item) => item.slug === route.params.slug)
</script>

<style scoped>
.detail-wrap {
  max-width: 860px;
}

.detail-card {
  padding: 36px;
}

.detail-meta {
  color: var(--accent);
  margin-bottom: 16px;
}

.detail-card h1 {
  font-size: clamp(34px, 5vw, 58px);
  margin-bottom: 24px;
}

.detail-card pre {
  white-space: pre-wrap;
  font-family: Georgia, "Times New Roman", serif;
  color: var(--text-soft);
  line-height: 2;
  font-size: 20px;
}
</style>
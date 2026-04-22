<template>
  <article class="poem-card card">
    <div class="poem-top">
      <span class="poem-tag">{{ poem.category }}</span>
      <span class="poem-date">{{ poem.date }}</span>
    </div>

    <h3>{{ poem.title }}</h3>
    <p>{{ poem.preview }}</p>

    <router-link :to="`/siirler/${poem.slug}`" class="poem-link">
      Devamını Oku
    </router-link>
  </article>
</template>

<script setup>
defineProps({
  poem: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.poem-card {
  padding: 24px;
  transition: 0.25s ease;
}

.poem-card:hover {
  transform: translateY(-4px);
  border-color: rgba(200, 169, 107, 0.35);
}

.poem-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  gap: 10px;
}

.poem-tag {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(200, 169, 107, 0.12);
  color: var(--accent);
  font-size: 13px;
}

.poem-date {
  color: var(--text-soft);
  font-size: 13px;
}

.poem-card h3 {
  font-size: 28px;
  margin-bottom: 14px;
}

.poem-card p {
  color: var(--text-soft);
  line-height: 1.8;
  margin-bottom: 22px;
}

.poem-link {
  color: var(--accent);
  font-weight: 600;
}
</style>
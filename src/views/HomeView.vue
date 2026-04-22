<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-content">
        <span class="hero-badge">kişisel şiir arşivi</span>
        <h1>Misra Evi</h1>
        <p>
          Kelimelerin sessizce yerini bulduğu, duyguların mısralara dönüştüğü
          kişisel bir alan. Burada her şiir bir iz, her satır bir iç ses taşır.
        </p>

        <div class="hero-actions">
          <router-link to="/siirler" class="btn">Şiirleri Keşfet</router-link>
          <router-link to="/hakkinda" class="btn btn-outline">Hakkımda</router-link>
        </div>
      </div>

      <div class="hero-panel card">
        <p class="panel-label">günün mısrası</p>
        <blockquote>
          “İnsan bazen en çok sustuğu yerde
          kendini anlatır.”
        </blockquote>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="section-title">Öne Çıkan Şiirler</h2>
      <p class="section-text">
        İç ses, şehir ve melankoli arasında dolaşan seçili mısralar.
      </p>

      <div class="poem-list">
        <PoemCard
          v-for="poem in featuredPoems"
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

const featuredPoems = poems.slice(0, 3)
</script>

<style scoped>
.hero {
  padding: 90px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  align-items: stretch;
}

.hero-content {
  padding: 32px 0;
}

.hero-badge {
  display: inline-flex;
  margin-bottom: 18px;
  padding: 8px 14px;
  border: 1px solid rgba(200, 169, 107, 0.24);
  border-radius: 999px;
  color: var(--accent);
  font-size: 13px;
  text-transform: lowercase;
}

.hero-content h1 {
  font-size: clamp(48px, 7vw, 92px);
  line-height: 0.95;
  margin-bottom: 24px;
}

.hero-content p {
  max-width: 640px;
  font-size: 19px;
  line-height: 1.9;
  color: var(--text-soft);
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.hero-panel {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 320px;
}

.panel-label {
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  margin-bottom: 18px;
}

blockquote {
  font-size: clamp(24px, 3vw, 36px);
  line-height: 1.5;
}

.poem-list {
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 960px) {
  .hero-grid,
  .poem-list {
    grid-template-columns: 1fr;
  }
}
</style>
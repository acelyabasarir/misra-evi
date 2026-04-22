<template>
  <section class="page-hero">
    <div class="container">
      <h1>Hakkımda</h1>
      <p>
        Ben Açelya. Yazılım geliştirmeyi ve kelimelerle yeni alanlar kurmayı seviyorum.
        Misra Evi, şiirle kurduğum kişisel dünyanın dijital karşılığı.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container about-grid">
      <article class="card about-card">
        <h2>Yazı ile ilişkim</h2>
        <p>
          Şiir benim için yalnızca yazı değil; bir ruh hali, bir kayıt biçimi ve
          bazen de içimde konuşan sesi düzenleme şekli.
        </p>
      </article>

      <article class="card about-card">
        <h2>Misra Evi neden var?</h2>
        <p>
          Çünkü bazı duygular sosyal medya akışında kayboluyor. Ben de şiirlerimi
          daha sakin, daha kalıcı ve bana ait bir yerde toplamak istedim.
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.about-card {
  padding: 28px;
}

.about-card h2 {
  margin-bottom: 14px;
  font-size: 28px;
}

.about-card p {
  color: var(--text-soft);
  line-height: 1.9;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
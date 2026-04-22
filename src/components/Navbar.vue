<template>
  <header class="navbar-wrap">
    <div class="container navbar">
      <router-link to="/" class="brand">
        <span class="brand-mark">✦</span>
        <span>Misra Evi</span>
      </router-link>

      <nav class="nav-links">
        <router-link to="/">Ana Sayfa</router-link>
        <router-link to="/siirler">Şiirler</router-link>
        <router-link to="/hakkinda">Hakkımda</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar-wrap {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(15, 15, 20, 0.75);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.4px;
}

.brand-mark {
  color: var(--accent);
  font-size: 18px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-links a {
  color: var(--text-soft);
  font-size: 15px;
  transition: 0.25s ease;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: var(--accent);
}

@media (max-width: 700px) {
  .navbar {
    min-height: auto;
    padding: 18px 0;
    flex-direction: column;
    gap: 14px;
  }

  .nav-links {
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
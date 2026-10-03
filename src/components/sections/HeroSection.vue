<template>
  <section id="inicio" class="hero">
    <div class="hero-inner">
      <span class="kicker">{{ t('hero.kicker') }}</span>
      <div class="hero-line"></div>
      <h1>
        <template v-for="(concept, index) in copy.hero.concepts" :key="concept">
          <span v-if="index" class="hero-concept-sep" aria-hidden="true"></span>
          <span class="hero-concept">{{ concept }}</span>
        </template>
      </h1>
      <div class="hero-grid">
        <div>
          <p class="hero-lead">{{ t('hero.lead') }}</p>
          <p class="hero-support">{{ t('hero.support') }}</p>
          <a class="btn" :href="contactHref" @click.prevent="goContact">{{ t('hero.cta') }}</a>
        </div>
        <p class="hero-aside">{{ t('hero.aside') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import i18n from '@/mixins/i18n'

export default {
  name: 'HeroSection',
  mixins: [i18n],
  computed: {
    contactHref () {
      const path = this.locale === 'es' ? '/' : `/${this.locale}`
      return `${path}#contacto`
    }
  },
  methods: {
    goContact () {
      const path = this.locale === 'es' ? '/' : `/${this.locale}`
      this.$router.push({ path, hash: '#contacto' })
    }
  }
}
</script>

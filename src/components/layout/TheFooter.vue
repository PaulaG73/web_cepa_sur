<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand-block">
        <a class="brand footer-brand" :href="homeHref" @click.prevent="goTo('inicio')">
          <span class="brand-word">Cepa</span>
          <img class="brand-mark" src="/img/logo-mark.png" alt="">
          <span class="brand-word">Sur</span>
        </a>
        <a
          class="footer-link"
          :href="t('footer.linkedinUrl')"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
          </svg>
          {{ t('footer.linkedinLabel') }}
        </a>
      </div>

      <div class="footer-contact">
        <p class="footer-heading">{{ t('nav.contact') }}</p>
        <p class="footer-link">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
          </svg>
          {{ t('footer.phone') }}
        </p>
        <a class="footer-link" :href="`mailto:${t('footer.email')}`">
          {{ t('footer.email') }}
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-meta">© {{ year }} Cepa Sur. {{ t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<script>
import i18n from '@/mixins/i18n'

export default {
  name: 'TheFooter',
  mixins: [i18n],
  computed: {
    year () {
      return new Date().getFullYear()
    },
    localePath () {
      return this.locale === 'es' ? '/' : `/${this.locale}`
    },
    homeHref () {
      return `${this.localePath}#inicio`
    }
  },
  methods: {
    goTo (id) {
      this.$router.push({ path: this.localePath, hash: `#${id}` })
    }
  }
}
</script>

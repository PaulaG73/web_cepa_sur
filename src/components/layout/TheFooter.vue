<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand-block">
        <div class="footer-brand">Cepa Sur</div>
        <a
          class="footer-linkedin"
          :href="t('footer.linkedinUrl')"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t('footer.linkedinLabel') }}
        </a>
      </div>
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
    }
  }
}
</script>

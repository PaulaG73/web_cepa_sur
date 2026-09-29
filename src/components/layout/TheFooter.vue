<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div>
        <div class="footer-brand">Cepa Sur</div>
        <p class="footer-meta">{{ t('footer.tagline') }}</p>
      </div>
      <div class="footer-meta">
        <p>{{ t('footer.confidentiality') }}</p>
        <p>© {{ year }} Cepa Sur. {{ t('footer.rights') }}</p>
      </div>
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

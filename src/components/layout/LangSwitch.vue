<template>
  <nav class="lang-switch" aria-label="Language">
    <template v-for="(item, index) in languages" :key="item.code">
      <span v-if="index > 0" aria-hidden="true">|</span>
      <button
        type="button"
        :class="{ 'is-active': locale === item.code }"
        :aria-pressed="locale === item.code"
        @click="changeLocale(item.code)"
      >
        {{ item.label }}
      </button>
    </template>
  </nav>
</template>

<script>
import i18n from '@/mixins/i18n'

export default {
  name: 'LangSwitch',
  mixins: [i18n],
  data () {
    return {
      languages: [
        { code: 'es', label: 'ES' },
        { code: 'en', label: 'EN' },
        { code: 'pt', label: 'PT' }
      ]
    }
  },
  methods: {
    changeLocale (code) {
      const hash = this.$route.hash
      const path = code === 'es' ? '/' : `/${code}`
      this.$store.dispatch('setLocale', code)
      if (this.$route.path !== path || this.$route.hash !== hash) {
        this.$router.push({ path, hash })
      }
    }
  }
}
</script>

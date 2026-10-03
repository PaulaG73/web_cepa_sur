<template>
  <header :class="['site-header', { 'is-solid': isSolid }]">
    <div class="header-inner">
      <a class="brand" :href="homeHref" @click.prevent="goTo('inicio')">
        <span class="brand-word">Cepa</span>
        <img class="brand-mark" src="/img/logo-mark.png" alt="">
        <span class="brand-word">Sur</span>
      </a>

      <div class="site-nav">
        <ul class="nav-list">
          <li>
            <a class="nav-link" :href="sectionHref('inicio')" @click.prevent="goTo('inicio')">
              {{ t('nav.home') }}
            </a>
          </li>
          <li :class="['nav-drop', { 'is-open': openDrop === 'services' }]">
            <button type="button" @click="toggleDrop('services')">
              {{ t('nav.services') }}
            </button>
            <div class="nav-drop-menu">
              <a :href="sectionHref('gobierno-familiar')" @click.prevent="goTo('gobierno-familiar')">
                {{ t('nav.familyGov') }}
              </a>
              <a :href="sectionHref('gobierno-corporativo')" @click.prevent="goTo('gobierno-corporativo')">
                {{ t('nav.corpGov') }}
              </a>
            </div>
          </li>
          <li :class="['nav-drop', { 'is-open': openDrop === 'about' }]">
            <button type="button" @click="toggleDrop('about')">
              {{ t('nav.about') }}
            </button>
            <div class="nav-drop-menu">
              <a :href="sectionHref('empresa')" @click.prevent="goTo('empresa')">
                {{ t('nav.company') }}
              </a>
              <a :href="sectionHref('equipo')" @click.prevent="goTo('equipo')">
                {{ t('nav.team') }}
              </a>
            </div>
          </li>
          <li>
            <a class="nav-link" :href="sectionHref('contacto')" @click.prevent="goTo('contacto')">
              {{ t('nav.contact') }}
            </a>
          </li>
        </ul>
      </div>
      <LangSwitch />
    </div>
  </header>
</template>

<script>
import i18n from '@/mixins/i18n'
import LangSwitch from './LangSwitch.vue'

export default {
  name: 'TheNavbar',
  components: { LangSwitch },
  mixins: [i18n],
  data () {
    return {
      isSolid: false,
      openDrop: null
    }
  },
  computed: {
    localePath () {
      return this.locale === 'es' ? '/' : `/${this.locale}`
    },
    homeHref () {
      return `${this.localePath}#inicio`
    }
  },
  mounted () {
    this.onScroll()
    this.syncHeaderMetrics()
    window.addEventListener('scroll', this.onScroll, { passive: true })
    document.addEventListener('click', this.onDocumentClick)
    this.resizeObserver = new ResizeObserver(() => this.syncHeaderMetrics())
    this.resizeObserver.observe(this.$el)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
    document.removeEventListener('click', this.onDocumentClick)
    if (this.resizeObserver) this.resizeObserver.disconnect()
  },
  methods: {
    sectionHref (id) {
      return `${this.localePath}#${id}`
    },
    onScroll () {
      this.isSolid = window.scrollY > 24
    },
    syncHeaderMetrics () {
      const height = Math.ceil(this.$el.getBoundingClientRect().height)
      document.documentElement.style.setProperty('--nav-height', `${height}px`)
      document.documentElement.style.setProperty('--header-offset', `${height + 10}px`)
    },
    onDocumentClick (event) {
      if (!this.$el.contains(event.target)) {
        this.openDrop = null
      }
    },
    toggleDrop (name) {
      this.openDrop = this.openDrop === name ? null : name
    },
    goTo (id) {
      this.openDrop = null
      if (document.activeElement && this.$el.contains(document.activeElement)) {
        document.activeElement.blur()
      }
      this.$router.push({ path: this.localePath, hash: `#${id}` })
    }
  }
}
</script>

<template>
  <header :class="['site-header', { 'is-solid': isSolid, 'is-open': menuOpen }]">
    <div class="header-inner">
      <a class="brand" :href="homeHref" @click.prevent="goTo('inicio')">Cepa Sur</a>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="menuOpen"
        :aria-label="menuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
      </button>

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
        <LangSwitch />
      </div>
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
      menuOpen: false,
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
  watch: {
    menuOpen (open) {
      document.body.style.overflow = open ? 'hidden' : ''
    }
  },
  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
    document.body.style.overflow = ''
  },
  methods: {
    sectionHref (id) {
      return `${this.localePath}#${id}`
    },
    onScroll () {
      this.isSolid = window.scrollY > 24
    },
    toggleDrop (name) {
      this.openDrop = this.openDrop === name ? null : name
    },
    goTo (id) {
      this.menuOpen = false
      this.openDrop = null
      document.body.style.overflow = ''
      this.$router.push({ path: this.localePath, hash: `#${id}` })
    }
  }
}
</script>

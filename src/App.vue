<template>
  <div id="app">
    <a class="skip-link" href="#inicio">{{ skipLabel }}</a>
    <TheNavbar />
    <main>
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/layout/TheNavbar.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter
  },
  computed: {
    skipLabel () {
      return this.$store.getters.t('nav.home')
    }
  }
}
</script>

<template>
  <section id="empresa" class="section">
    <div class="container">
      <div class="company-head">
        <span class="section-number">{{ t('company.number') }}</span>
        <span class="kicker">{{ t('company.kicker') }}</span>
        <h2 class="section-title">{{ t('company.title') }}</h2>
        <p class="lead">{{ t('company.statement') }}</p>
      </div>
      <p>{{ t('company.body') }}</p>
      <button
        class="more-toggle"
        type="button"
        :aria-expanded="detailsOpen"
        aria-controls="company-details"
        @click="detailsOpen = !detailsOpen"
      >
        {{ detailsOpen ? t('company.less') : t('company.more') }}
      </button>
      <div v-show="detailsOpen" id="company-details" class="values">
        <article v-for="item in copy.company.values" :key="item.title" class="value-item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import i18n from '@/mixins/i18n'

export default {
  name: 'CompanySection',
  mixins: [i18n],
  data () {
    return {
      detailsOpen: false
    }
  }
}
</script>

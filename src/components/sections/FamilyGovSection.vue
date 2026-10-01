<template>
  <section id="gobierno-familiar" class="section">
    <div class="split-section">
      <div>
        <span class="section-number">{{ t('familyGov.number') }}</span>
        <span class="kicker">{{ t('familyGov.kicker') }}</span>
        <h2 class="section-title">{{ t('familyGov.title') }}</h2>
      </div>
      <div>
        <p class="lead">{{ t('familyGov.statement') }}</p>
        <button
          class="more-toggle"
          type="button"
          :aria-expanded="detailsOpen"
          aria-controls="family-gov-details"
          @click="detailsOpen = !detailsOpen"
        >
          {{ detailsOpen ? t('familyGov.less') : t('familyGov.more') }}
        </button>
        <ul v-show="detailsOpen" id="family-gov-details" class="point-list">
          <li v-for="point in copy.familyGov.points" :key="point.title">
            <h3>{{ point.title }}</h3>
            <p>{{ point.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import i18n from '@/mixins/i18n'

export default {
  name: 'FamilyGovSection',
  mixins: [i18n],
  data () {
    return {
      detailsOpen: false
    }
  }
}
</script>

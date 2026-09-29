<template>
  <section id="gobierno-familiar" class="section">
    <div class="split-section">
      <div>
        <span class="section-number">{{ t('familyGov.number') }}</span>
        <span class="kicker">{{ t('familyGov.kicker') }}</span>
        <h2 class="section-title">{{ t('familyGov.title') }}</h2>
      </div>
      <div>
        <p class="lead">{{ t('familyGov.lead') }}</p>
        <p>{{ t('familyGov.body') }}</p>
        <ul class="point-list">
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
  mixins: [i18n]
}
</script>

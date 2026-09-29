<template>
  <section id="gobierno-corporativo" class="section split-section is-inverted">
    <div class="split-inner">
      <div>
        <span class="section-number">{{ t('corpGov.number') }}</span>
        <span class="kicker">{{ t('corpGov.kicker') }}</span>
        <h2 class="section-title">{{ t('corpGov.title') }}</h2>
      </div>
      <div>
        <p class="lead">{{ t('corpGov.lead') }}</p>
        <p>{{ t('corpGov.body') }}</p>
        <ul class="point-list">
          <li v-for="point in copy.corpGov.points" :key="point.title">
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
  name: 'CorpGovSection',
  mixins: [i18n]
}
</script>

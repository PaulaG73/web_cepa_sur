<template>
  <section id="equipo" class="section">
    <div class="container">
      <span class="section-number">{{ t('team.number') }}</span>
      <span class="kicker">{{ t('team.kicker') }}</span>
      <h2 class="section-title">{{ t('team.title') }}</h2>
      <p class="lead">{{ t('team.lead') }}</p>
      <div class="team-grid">
        <article v-for="(member, index) in copy.team.members" :key="index">
          <div class="member-frame" aria-hidden="true">{{ member.initials }}</div>
          <h3>{{ member.name }}</h3>
          <p class="member-role">{{ member.role }}</p>
          <p class="member-bio">{{ member.bio }}</p>
        </article>
      </div>
      <p class="team-note">{{ t('team.note') }}</p>
    </div>
  </section>
</template>

<script>
import i18n from '@/mixins/i18n'

export default {
  name: 'TeamSection',
  mixins: [i18n]
}
</script>

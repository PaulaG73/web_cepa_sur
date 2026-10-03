<template>
  <section id="equipo" class="section">
    <div class="container">
      <span class="section-number">{{ t('team.number') }}</span>
      <span class="kicker">{{ t('team.kicker') }}</span>
      <h2 class="section-title">{{ t('team.title') }}</h2>
      <p class="lead">{{ t('team.lead') }}</p>
      <div class="team-grid">
        <article v-for="(member, index) in copy.team.members" :key="index">
          <div class="member-frame" aria-hidden="true">
            <svg viewBox="0 0 64 80" fill="currentColor">
              <circle cx="32" cy="22" r="14" />
              <path d="M8 72c0-14.4 10.7-24 24-24s24 9.6 24 24v4H8z" />
            </svg>
          </div>
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-role">{{ member.role }}</p>
          <p class="member-bio">{{ member.bio }}</p>
          <a
            class="btn btn-dark member-linkedin"
            :href="member.linkedin || '#'"
            :target="member.linkedin ? '_blank' : null"
            :rel="member.linkedin ? 'noopener noreferrer' : null"
            :aria-label="t('team.linkedin')"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
            </svg>
          </a>
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

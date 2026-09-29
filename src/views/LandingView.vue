<template>
  <div>
    <HeroSection />
    <FamilyGovSection />
    <CorpGovSection />
    <CompanySection />
    <TeamSection />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from '@/components/sections/HeroSection.vue'
import FamilyGovSection from '@/components/sections/FamilyGovSection.vue'
import CorpGovSection from '@/components/sections/CorpGovSection.vue'
import CompanySection from '@/components/sections/CompanySection.vue'
import TeamSection from '@/components/sections/TeamSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

export default {
  name: 'LandingView',
  components: {
    HeroSection,
    FamilyGovSection,
    CorpGovSection,
    CompanySection,
    TeamSection,
    ContactSection
  }
}
</script>

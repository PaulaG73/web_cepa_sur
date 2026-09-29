<template>
  <section id="contacto" class="section">
    <div class="contact-layout">
      <div>
        <span class="section-number">{{ t('contact.number') }}</span>
        <span class="kicker">{{ t('contact.kicker') }}</span>
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="lead">{{ t('contact.lead') }}</p>
        <p class="team-note">{{ t('contact.note') }}</p>
      </div>

      <form class="contact-form" novalidate @submit.prevent="onSubmit">
        <div class="honeypot" aria-hidden="true">
          <input v-model="form._honey" type="text" tabindex="-1" autocomplete="off" hidden>
        </div>

        <div class="field">
          <label for="firstName">{{ t('contact.fields.firstName') }}</label>
          <input id="firstName" v-model.trim="form.firstName" type="text" autocomplete="given-name">
          <span v-if="errors.firstName" class="field-error">{{ errors.firstName }}</span>
        </div>

        <div class="field">
          <label for="lastName">{{ t('contact.fields.lastName') }}</label>
          <input id="lastName" v-model.trim="form.lastName" type="text" autocomplete="family-name">
          <span v-if="errors.lastName" class="field-error">{{ errors.lastName }}</span>
        </div>

        <div class="field">
          <label for="role">{{ t('contact.fields.role') }}</label>
          <input id="role" v-model.trim="form.role" type="text" autocomplete="organization-title">
          <span v-if="errors.role" class="field-error">{{ errors.role }}</span>
        </div>

        <div class="field">
          <label for="company">{{ t('contact.fields.company') }}</label>
          <input id="company" v-model.trim="form.company" type="text" autocomplete="organization">
          <span v-if="errors.company" class="field-error">{{ errors.company }}</span>
        </div>

        <div class="field">
          <label for="email">{{ t('contact.fields.email') }}</label>
          <input id="email" v-model.trim="form.email" type="email" autocomplete="email">
          <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
        </div>

        <div class="field">
          <label for="phone">
            {{ t('contact.fields.phone') }}
            <span class="optional">({{ t('contact.fields.phoneOptional') }})</span>
          </label>
          <input id="phone" v-model.trim="form.phone" type="tel" autocomplete="tel">
        </div>

        <div class="field full">
          <label for="topic">{{ t('contact.fields.topic') }}</label>
          <select id="topic" v-model="form.topic">
            <option value="">{{ t('contact.topics.placeholder') }}</option>
            <option value="family">{{ t('contact.topics.family') }}</option>
            <option value="corporate">{{ t('contact.topics.corporate') }}</option>
            <option value="preliminary">{{ t('contact.topics.preliminary') }}</option>
          </select>
          <span v-if="errors.topic" class="field-error">{{ errors.topic }}</span>
        </div>

        <div class="field full">
          <label for="message">{{ t('contact.fields.message') }}</label>
          <textarea id="message" v-model.trim="form.message"></textarea>
          <span v-if="errors.message" class="field-error">{{ errors.message }}</span>
        </div>

        <div class="field full">
          <label class="check">
            <input v-model="form.confidential" type="checkbox">
            <span>{{ t('contact.fields.confidential') }}</span>
          </label>
          <span v-if="errors.confidential" class="field-error">{{ errors.confidential }}</span>
        </div>

        <p v-if="status" :class="['form-status', `is-${status}`]">
          {{ status === 'success' ? t('contact.success') : t('contact.error') }}
        </p>

        <div class="field full">
          <button class="btn btn-dark" type="submit" :disabled="sending">
            {{ sending ? t('contact.sending') : t('contact.submit') }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import i18n from '@/mixins/i18n'

const emptyForm = () => ({
  firstName: '',
  lastName: '',
  role: '',
  company: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
  confidential: false,
  _honey: ''
})

export default {
  name: 'ContactSection',
  mixins: [i18n],
  data () {
    return {
      form: emptyForm(),
      errors: {},
      sending: false,
      status: ''
    }
  },
  methods: {
    validate () {
      const errors = {}
      const required = ['firstName', 'lastName', 'role', 'company', 'email', 'topic', 'message']
      required.forEach((field) => {
        if (!this.form[field]) errors[field] = this.t('contact.required')
      })
      if (this.form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        errors.email = this.t('contact.invalidEmail')
      }
      if (!this.form.confidential) {
        errors.confidential = this.t('contact.confidentialRequired')
      }
      this.errors = errors
      return Object.keys(errors).length === 0
    },
    topicLabel () {
      const map = {
        family: this.t('contact.topics.family'),
        corporate: this.t('contact.topics.corporate'),
        preliminary: this.t('contact.topics.preliminary')
      }
      return map[this.form.topic] || this.form.topic
    },
    async onSubmit () {
      this.status = ''
      if (this.form._honey) return
      if (!this.validate()) return

      this.sending = true
      try {
        const response = await fetch('https://formsubmit.co/ajax/contacto@pwebdev.cl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            _subject: 'Cepa Sur — consulta de gobierno',
            _template: 'table',
            _captcha: 'false',
            Nombre: this.form.firstName,
            Apellido: this.form.lastName,
            Cargo: this.form.role,
            Empresa: this.form.company,
            Email: this.form.email,
            Telefono: this.form.phone || '—',
            Motivo: this.topicLabel(),
            Mensaje: this.form.message,
            Idioma: this.locale
          })
        })
        if (!response.ok) throw new Error('send-failed')
        this.status = 'success'
        this.form = emptyForm()
        this.errors = {}
      } catch (error) {
        this.status = 'error'
      } finally {
        this.sending = false
      }
    }
  }
}
</script>

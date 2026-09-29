import { createStore } from 'vuex'
import es from '@/locales/es.json'
import en from '@/locales/en.json'
import pt from '@/locales/pt.json'

const STORAGE_KEY = 'cepa-sur-locale'
const LOCALES = ['es', 'en', 'pt']

function readSavedLocale () {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (LOCALES.includes(saved)) return saved
  } catch (error) {
    /* ignore */
  }
  return 'es'
}

function persistLocale (locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch (error) {
    /* ignore */
  }
}

function applyDocumentLang (locale) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = locale
  const title = { es, en, pt }[locale]?.meta?.title
  if (title) document.title = title
}

export default createStore({
  state: {
    locale: readSavedLocale(),
    messages: { es, en, pt }
  },
  getters: {
    locale: (state) => state.locale,
    copy: (state) => state.messages[state.locale],
    t: (state) => (key) => {
      if (!key) return ''
      const value = key.split('.').reduce((acc, part) => {
        if (acc && Object.prototype.hasOwnProperty.call(acc, part)) {
          return acc[part]
        }
        return undefined
      }, state.messages[state.locale])
      return value === undefined ? key : value
    }
  },
  mutations: {
    SET_LOCALE (state, locale) {
      const next = LOCALES.includes(locale) ? locale : 'es'
      state.locale = next
      persistLocale(next)
      applyDocumentLang(next)
    }
  },
  actions: {
    setLocale ({ commit }, locale) {
      commit('SET_LOCALE', locale)
    }
  }
})

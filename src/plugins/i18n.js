import Vue from 'vue'
import VueI18n from 'vue-i18n'

import esData from '../data/es.json'
import enData from '../data/en.json'

Vue.use(VueI18n)

const messages = {
  es: esData,
  en: enData
}
export const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages
})

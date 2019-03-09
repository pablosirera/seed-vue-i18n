import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  es: {
    hello: {
      world: 'Hola Mundo!'
    },
    spanish: 'Español',
    english: 'Inglés'
  },
  en: {
    hello: {
      world: 'Hello World!'
    },
    spanish: 'Spanish',
    english: 'English'
  }
}
export const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages
})

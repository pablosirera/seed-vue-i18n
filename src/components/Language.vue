<template>
  <div>
    <button
      v-for="language in languages"
      :key="language.locale"
      @click="changeLanguage(language.locale)"
    >
      {{ language.title }}
    </button>
  </div>
</template>

<script>
import { i18n } from '@/plugins/i18n'

export default {
  name: 'LanguageComponent',
  computed: {
    languages() {
      return [
        { locale: 'es', title: this.$t('spanish') },
        { locale: 'en', title: this.$t('english') }
      ]
    }
  },
  methods: {
    changeLanguage(locale) {
      i18n.locale = locale
    }
  }
}
</script>

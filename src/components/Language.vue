<template>
  <div class="language">
    <h2 class="language__title">
      Change language
    </h2>
    <div class="language__list-buttons">
      <Button
        v-for="language in languages"
        :key="language.locale"
        class="button--color-1"
        @emit-click="changeLanguage(language.locale)"
      >
        {{ language.title }}
      </Button>
    </div>
  </div>
</template>

<script>
import { i18n } from '@/plugins/i18n'
import Button from '@/components/Button'

export default {
  name: 'LanguageComponent',
  components: {
    Button
  },
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

<style scoped lang="scss">
.language {
  margin: 1rem;
  padding: 2rem;
  background-color: #ededed;

  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #42b983;
  }

  &__list-buttons {
    display: flex;
    justify-content: center;

    > * {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}
</style>

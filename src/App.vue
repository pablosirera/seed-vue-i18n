<template>
  <div id="app">
    <h1 class="title">
      {{ $t('hello.world') }}
    </h1>

    <Language />

    <div class="logo">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
  </div>
</template>

<script>
import Language from './components/Language.vue'

export default {
  name: 'App',
  components: {
    Language
  }
}
</script>

<style lang="scss">
@import './assets/scss/base/_base-reset.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-brand-2;
  margin-top: 6rem;
}

.title {
  margin-bottom: 3rem;
  font-size: 4rem;
  font-weight: bold;
  color: $color-brand-2;
}

.logo {
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
}
</style>

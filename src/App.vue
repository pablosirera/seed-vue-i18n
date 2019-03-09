<template>
  <div id="app">
    <h1>{{ $t('hello.world') }}</h1>
    <Language />
    <img alt="Vue logo" src="./assets/logo.png" />
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

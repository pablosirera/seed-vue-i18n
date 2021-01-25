<template>
  <component
    :is="checkTag"
    :href="href"
    :value="value"
    class="button"
    @click="clickHandling"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  },
  computed: {
    checkTag() {
      if (this.href) {
        return 'a'
      } else if (this.value) {
        return 'input'
      }

      return 'button'
    }
  },
  methods: {
    clickHandling() {
      this.$emit('emit-click')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 900;
  line-height: 110%;
  color: #fff;
  border: 0.2rem solid transparent;
  outline: none;
  background-color: #000;
  transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s,
    border-color 0.15s ease-in-out 0s;
  user-select: none;
  cursor: pointer;
  appearance: none;

  &:hover {
    color: #000;
    border-color: #000;
    background-color: #fff;
  }

  > * {
    pointer-events: none;
  }

  &--color-1 {
    background-color: #42b983;

    &:hover {
      color: #42b983;
      border-color: #42b983;
      background-color: #fff;
    }
  }

  &--color-2 {
    background-color: #2c3e50;

    &:hover {
      color: #2c3e50;
      border-color: #2c3e50;
      background-color: #fff;
    }
  }
}
</style>

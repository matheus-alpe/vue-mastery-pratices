<script>
import uuid from '@/composables/uuid'

export default {
  name: 'BaseInput',

  props: {
    label: {
      type: String,
      default: ''
    },

    error: {
      type: String,
      default: ''
    },

    modelValue: {
      type: [String, Number],
      default: ''
    }
  },

  setup() {
    const id = uuid().getID()

    return { id }
  }
}
</script>

<template>
  <label
    v-if="label"
    :for="id"
    >{{ label }}</label
  >
  <input
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="label"
    :id="id"
    :aria-describedby="error ? `${id}-error` : null"
    :aria-invalid="error ? true : null"
    class="field"
  />

  <p
    v-if="error"
    :id="`${id}-error`"
    aria-live="assertive"
    class="errorMessage"
  >
    {{ error }}
  </p>
</template>

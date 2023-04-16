<script>
export default {
  name: 'BaseInput',

  props: {
    label: {
      type: String,
      default: ''
    },

    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="label"
    class="field"
  />
</template>

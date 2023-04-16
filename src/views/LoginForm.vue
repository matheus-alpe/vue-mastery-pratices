<template>
  <form @submit.prevent="onSubmit">
    <BaseInput
      label="Email"
      type="email"
      v-model="email"
      :error="emailError"
    />

    <BaseInput
      label="Password"
      type="password"
      v-model="password"
      :error="passwordError"
    />

    <BaseButton
      type="submit"
      class="-fill-gradient"
    >
      Submit
    </BaseButton>
  </form>
</template>

<script>
import { useField, useForm } from 'vee-validate'

export default {
  setup() {
    function onSubmit() {
      alert('Submitted')
    }

    const requiredMessage = 'This field is required'

    const validations = {
      email: (value) => {
        console.log('email', value)

        if (!value) return requiredMessage

        const validateEmail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!validateEmail.test(String(value).toLowerCase())) {
          return 'Please enter a valid email address'
        }

        return true
      },
      password: (value) => {
        console.log('password', value)
        if (value === undefined || value === null) return requiredMessage
        if (!String(value).length) return requiredMessage
        return true
      }
    }

    useForm({
      validationSchema: validations
    })

    const email = useField('email')
    const password = useField('password')

    return {
      onSubmit,
      email: email.value,
      emailError: email.errorMessage,
      password: password.value,
      passwordError: password.errorMessage
    }
  }
}
</script>

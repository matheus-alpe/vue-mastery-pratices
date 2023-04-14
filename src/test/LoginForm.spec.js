import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import LoginForm from '@/components/LoginForm.vue'

describe('LoginForm', () => {
  test('Emits an event with a user data payload', async () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[type="text"]')

    input.setValue('Matheus Alves Pereira')
    await wrapper.trigger('submit')

    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    const expectedPayload = {
      name: 'Matheus Alves Pereira'
    }

    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
  })
})

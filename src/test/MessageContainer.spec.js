import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import MessageContainer from '@/components/MessageContainer.vue'

describe('MessageContainer', () => {
  test('Wraps MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      global: {
        stubs: {
          MessageDisplay: {
            template: '<p data-testid="message">Hello from the db!</p>'
          }
        }
      }
    })

    const message = wrapper.find('[data-testid="message"]').text()
    expect(message).toEqual('Hello from the db!')
  })
})

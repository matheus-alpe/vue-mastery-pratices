import { describe, test, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { flushPromises } from '@vue/test-utils'

import MessageDisplay from '@/components/MessageDisplay.vue'
import { getMessage } from '@/services/axios'

vi.mock('@/services/axios')

beforeEach(() => {
  vi.clearAllMocks()
})

describe('MessageDisplay', () => {
  test('Calls getMessage and displays message', async () => {
    const mockMessage = 'Hello from the db!'
    getMessage.mockResolvedValueOnce({ text: mockMessage })

    const wrapper = mount(MessageDisplay)
    await flushPromises()

    expect(getMessage).toHaveBeenCalledTimes(1)
    const message = wrapper.find('[data-testid="message"]').text()
    expect(message).toBe(mockMessage)
  })

  test('Displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong.'
    getMessage.mockRejectedValueOnce(mockError)

    const wrapper = mount(MessageDisplay)
    await flushPromises()

    expect(getMessage).toHaveBeenCalledTimes(1)
    const displayedError = wrapper.find('[data-testid="message-error"]').text()
    expect(displayedError).toBe(mockError)
  })
})

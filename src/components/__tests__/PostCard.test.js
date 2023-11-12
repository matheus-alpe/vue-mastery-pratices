import axios from 'axios'
import { describe, expect, test, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import PostCard from '../PostCard.vue'

const mockPost = {
  userId: 1,
  id: 1,
  title: 'Post title 1',
  body: 'Simple post body',
}

describe('PostCard', () => {
  test('can fetch and display a post', async () => {
    vi.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockPost })

    const wrapper = mount(PostCard)
    expect(wrapper.html()).toContain('Loading...')

    await flushPromises()

    expect(wrapper.find('[data-testid="post-title"]').text()).toBe(mockPost.title)
    expect(wrapper.find('[data-testid="post-body"]').text()).toBe(mockPost.body)
  })

  test('can display an error message if fetching if a fetching a post fails', async () => {
    vi.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Error occurred'))

    const wrapper = mount(PostCard)
    expect(wrapper.html()).toContain('Loading...')

    await flushPromises()

    expect(wrapper.find('[data-testid="error-message"]').text()).toBe('Error occurred')
  })
})

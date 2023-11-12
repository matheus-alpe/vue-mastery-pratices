import { describe, test, vi, expect } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'

import App from './App.vue'

const mockPost = {
  userId: 1,
  id: 1,
  title: 'Test post',
  body: 'Test body...',
}

describe('App', () => {
  describe('Posts', () => {
    test('user can create a new post', async () => {
      vi.spyOn(axios, 'post').mockResolvedValueOnce({ data: mockPost })

      const wrapper = mount(App)

      // fill the input fields
      await wrapper.find('[data-testid="title-input"]').setValue(mockPost.title)
      await wrapper.find('[data-testid="body-input"]').setValue(mockPost.body)

      // submit the form
      await wrapper.find('[data-testid="post-form"]').trigger('submit')

      expect(wrapper.find('[type="submit"]').html()).toContain('Creating...')

      await flushPromises()

      // assert that the create post is displayed on screen
      expect(wrapper.html()).toContain(mockPost.title)
      expect(wrapper.html()).toContain(mockPost.body)
    })

    describe('user gets notified', () => {
      test('when attempting to create a post with incomplete fields', async () => {
        const wrapper = mount(App)

        await wrapper.find('[data-testid="post-form"]').trigger('submit')
        expect(wrapper.html()).toContain('Please input post title')

        await wrapper.find('[data-testid="close-notification"]').trigger('click')

        expect(wrapper.html()).not.toContain('Please input post title')

        await wrapper.find('[data-testid="title-input"]').setValue(mockPost.title)
        await wrapper.find('[data-testid="post-form"]').trigger('submit')
        expect(wrapper.html()).toContain('Please input post body')
      })

      test('when creating a new post fails', async () => {
        vi.spyOn(axios, "post").mockRejectedValueOnce(new Error('Error occurred'))

        const wrapper = mount(App)

        await wrapper.find('[data-testid="title-input"]').setValue(mockPost.title)
        await wrapper.find('[data-testid="body-input"]').setValue(mockPost.body)

        await wrapper.find('[data-testid="post-form"]').trigger('submit')
        expect(wrapper.find('[type="submit"]').html()).toContain('Creating...')

        await flushPromises()
        expect(wrapper.html()).toContain('Error occurred')
      })
    })
  })
})

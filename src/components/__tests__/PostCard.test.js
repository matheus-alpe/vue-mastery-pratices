import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import PostCard from '../PostCard.vue'

describe('PostCard', () => {
  test('created posts render correctly', async () => {
    const wrapper = mount(PostCard, {
      props: {
        title: 'Post title',
        body: 'Post body',
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

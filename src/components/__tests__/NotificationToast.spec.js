import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import NotificationToast from '../NotificationToast.vue'

describe('NotificationToast', () => {
  it('renders the correct style for error (with snapshot)', () => {
    const status = 'error'
    const wrapper = mount(NotificationToast, {
      props: {
        status,
      }
    })

    // expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div role=\\"alert\\" class=\\"notification notification--error\\">
        <p class=\\"notification__text\\"></p><button data-testid=\\"close-notification\\" title=\\"close\\" class=\\"notification__button\\"> ✕ </button>
      </div>"
    `)
  })

  it('renders the correct style for error', () => {
    const status = 'error'
    const wrapper = mount(NotificationToast, {
      props: {
        status,
      }
    })

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--error']))
  })

  it('renders the correct style for success', () => {
    const status = 'success'
    const wrapper = mount(NotificationToast, {
      props: {
        status,
      }
    })

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--success']))
  })

  it('renders the correct style for info', () => {
    const status = 'info'
    const wrapper = mount(NotificationToast, {
      props: {
        status,
      }
    })

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--info']))
  })

  it('notification slies up when message is empty', () => {
    const message = ''
    const wrapper = mount(NotificationToast, {
      props: { message },
    })

    expect(wrapper.classes('notification--slide')).toBe(false)
  })

  it('emits event when close button is clicked', async () => {
    const wrapper = mount(NotificationToast)
    const closeButton = wrapper.find('button')
    await closeButton.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('clear-notification')
  })

  it('renders correct message to viewer', () => {
    const message = 'Something happened, try again'
    const wrapper = mount(NotificationToast, { props: { message } })

    expect(wrapper.find('.notification__text').text()).toBe(message)
  })
})

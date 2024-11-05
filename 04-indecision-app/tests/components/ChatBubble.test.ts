import { mount } from '@vue/test-utils'
import ChatBubble from '../../src/components/ChatBubble/ChatBubble.vue'
import { expect, describe, test } from 'vitest'

describe('<ChatBubble />', () => {
  test('render own message correctly', () => {
    const message = 'Hola Mundo'
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: true,
      },
    })
    expect(wrapper.find('.bg-blue-200').exists()).toBe(true)
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy()
    expect(wrapper.find('.bg-blue-200').text()).toContain(message)
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy()
  })
  test('renders recived message correctly', () => {
    const message = 'Hola Mundo'
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false,
      },
    })

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true)
    expect(wrapper.find('.bg-gray-300').text()).toContain(message)
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy()
    expect(wrapper.find('img').exists()).toBe(false)
  })
  test('renders recived message correctly with image', () => {
    const message = 'Hola Mundo'
    const image = 'http://example.jpg'
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false,
      },
    })

    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe(image)
  })
})

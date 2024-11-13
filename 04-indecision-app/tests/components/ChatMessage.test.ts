import { mount } from '@vue/test-utils'
import MessageBox from '../../src/components/MessageBox/MessageBox.vue'
import { expect, describe, test } from 'vitest'

describe('<MessageBox/>', () => {
  const wrapper = mount(MessageBox)

  test('renders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy()
    expect(wrapper.find('button svg').exists()).toBeTruthy()
  })
  test('emits sendMessage event when button is cliked with message value', async () => {
    const message = 'Hola Mundo'
    await wrapper.find('input[type="text"]').setValue(message)
    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message])
    expect(wrapper.vm.message.toBe('')).toBe(true)
  })

  test('emits sendMessage event when keypress.enter is trigered with message value', async () => {
    const message = 'Hola Mundo'

    const input = wrapper.find('input')

    input.setValue(message)
    await wrapper.find('button').trigger('keypress.enter')

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message])
  })

  test('emits sendMessage event when keypress.enter is trigered with message value', async () => {
    await wrapper.find('button').trigger('keypress.enter')

    expect(wrapper.emitted('sendMessage')).toBeFalsy()
  })
})

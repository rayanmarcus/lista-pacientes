import { shallowMount } from '@vue/test-utils'
import LoginComponent from '@/components/LoginComponent.vue'

describe('LoginComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(LoginComponent, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

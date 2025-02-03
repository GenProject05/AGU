import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Home from '@/views/HomeView.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Home, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

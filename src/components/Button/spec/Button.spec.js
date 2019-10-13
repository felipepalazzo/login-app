import React from 'react'
import { shallow } from 'enzyme'
import Button from '../Button'

describe('Button', () => {
	const props = {
		disabled: false,
		onClick: jest.fn()
	}
	const wrapper = shallow(<Button {...props}>Submit</Button>)
	it('renders without crashing', () => {
		expect(wrapper).toMatchSnapshot()
	})
	it('should accept disabled prop', () => {
		expect(wrapper.prop('disabled')).toEqual(false)
		wrapper.setProps({ disabled: true })
		expect(wrapper.prop('disabled')).toEqual(true)
	})
	it('should accept a onClick function', () => {
		wrapper.prop('onClick')()
		expect(props.onClick).toHaveBeenCalledTimes(1)
	})
})

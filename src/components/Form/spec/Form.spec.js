import React from 'react'
import { shallow } from 'enzyme'
import Form from '../Form'

describe('Form', () => {
	const wrapper = shallow(<Form />)
	it('renders without crashing', () => {
		expect(wrapper).toMatchSnapshot()
	})
	it('should toggle the List after click in the code', () => {
		wrapper.find('div.form__code-container').prop('onClick')()
		expect(wrapper.find('List').prop('isVisible')).toEqual(true)
	})
	it('should only accept numbers', () => {
		let target = { name: 'phone', value: 'foobar' }
		wrapper.find('input[type="text"]').simulate('change', { target })
		expect(wrapper.find('Button').prop('disabled')).toEqual(true)
		wrapper.find('input[type="text"]').simulate('change', {
			target: { ...target, value: 1234567 }
		})
		expect(wrapper.find('Button').prop('disabled')).toEqual(false)
	})
})

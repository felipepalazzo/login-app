import React from 'react'
import { shallow } from 'enzyme'
import List from '../List'

describe('List', () => {
	const props = {
		onClick: jest.fn(),
		data: [{ country: 'Brazil', code: 55 }]
	}
	const wrapper = shallow(<List {...props} />)
	it('renders without crashing', () => {
		expect(wrapper).toMatchSnapshot()
	})
	it('should render ListItems', () => {
		expect(wrapper.find('li')).toHaveLength(1)
	})
	it('should accept a onClick function', () => {
		wrapper.find('li').prop('onClick')()
		expect(props.onClick).toHaveBeenCalledTimes(1)
	})
})

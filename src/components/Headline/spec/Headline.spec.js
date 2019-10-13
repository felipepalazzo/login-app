import React from 'react'
import { shallow } from 'enzyme'
import Headline from '../Headline'

describe('Headline', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Headline>message</Headline>)
		expect(wrapper).toMatchSnapshot()
	})
})

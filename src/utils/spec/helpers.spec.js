import React from 'react'
import { stringToCssClass } from '../helpers'

describe('stringToCssClass', () => {
	it('should convert any string in dashed lowercase', () => {
		expect(stringToCssClass('United Kingdom')).toEqual('united-kingdom')
		expect(stringToCssClass('Foo Bar Buzz')).toEqual('foo-bar-buzz')
	})
})

import React from 'react'
import { shallow } from 'enzyme'
import Search from '../../components/search'

describe('Search', () => {
	const props = {}

	describe('Search render', () => {

		const nextProps = {
			...props,
		}

		const cartItem = shallow(<Search {...nextProps} />)

		it('renders properly', () => {
			expect(cartItem).toMatchSnapshot()
		})

		it('render search input', () => {
			expect(cartItem.find('.input').matchesElement(<input />)).toEqual(true)
		})
	})
})
import React from 'react'
import { shallow } from 'enzyme'
import CartTable from '../../components/cart-table'

describe('Cart Table', () => {
	const props = {
		items: []
	}

	describe('Cart Table render', () => {

		const nextProps = {
			...props,
			items: [{ id: 23, 'title': 'title', 'price': 25 }]
		}

		const cartTable = shallow(<CartTable {...nextProps} />)

		it('renders properly', () => {
			expect(cartTable).toMatchSnapshot()
		})

		it('render CartItem', () => {
			expect(cartTable.find('CartItem')).toHaveLength(1)
		})
		
		it('render ProductPrice', () => {
			expect(cartTable.find('ProductPrice')).toHaveLength(1)
		})
	})
})
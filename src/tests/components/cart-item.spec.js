import React from 'react'
import { shallow } from 'enzyme'
import CartItem from '../../components/cart-item'

describe('Cart Item', () => {
	const props = {
		index: 1,
		item: {},
		removeItem: () => { },
		onIncrease: () => { },
		onDecrease: () => { }
	}

	describe('Cart Item render', () => {

		const nextProps = {
			...props,
			item: { 'title': 'title', 'price': 25 }
		}

		const cartItem = shallow(<CartItem {...nextProps} />)

		it('renders properly', () => {
			expect(cartItem).toMatchSnapshot()
		})

		it('render ProductPrice', () => {
			expect(cartItem.find('ProductPrice')).toHaveLength(1)
		})

		it('render Cart Item', () => {
			expect(cartItem.find('tr')).toHaveLength(1)
		})

		it('render Cart Item title', () => {
			expect(cartItem.find('tr td').first().text()).toEqual('title')
		})
	})
})
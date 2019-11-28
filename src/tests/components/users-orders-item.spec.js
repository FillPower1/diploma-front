import React from 'react'
import { shallow } from 'enzyme'
import UsersOrdersItems from '../../components/users-orders-item'

describe('Users Orders Items', () => {
	const props = {}

	describe('UsersOrdersItems render', () => {

		const nextProps = {
			...props,
			title: "some text",
			count: 5
		}

		const usersOrdersItems = shallow(<UsersOrdersItems {...nextProps} />)

		it('renders properly', () => {
			expect(usersOrdersItems).toMatchSnapshot()
		})

		it('render UsersOrdersItems title', () => {
			expect(usersOrdersItems.find('.order__title').text()).toEqual(nextProps.title)
		})

		it('render UsersOrdersItems count', () => {
			expect(usersOrdersItems.find('.order__count').text()).toEqual(`Количество: ${nextProps.count}`)
		})
	})
})
import React from 'react'
import { shallow } from 'enzyme'
import UsersOrdersTable from './users-orders-table'

describe('Users Orders Table', () => {
	const props = {}

	describe('UsersOrdersTable render', () => {

		const nextProps = {
			...props,
			id: 'asf3',
			username: 'user',
			surname: 'surname',
			phone: 1231232, 
			completed: false, 
			items: [],
			notes: 'some text',
			updateOrder: () => {},
			deleteOrder: () => {}
		}

		const usersOrdersTable = shallow(<UsersOrdersTable {...nextProps} />)

		it('renders properly', () => {
			expect(usersOrdersTable).toMatchSnapshot()
		})

		it('render UsersOrdersItem items = [] => 0 length', () => {
			expect(usersOrdersTable.find('UsersOrdersItem')).toHaveLength(0)
		})

		it('render UsersOrdersModal', () => {
			expect(usersOrdersTable.find('UsersOrdersModal')).toHaveLength(2)
		})

		it('render UsersOrdersItem notes = false => Не завершен', () => {
			expect(usersOrdersTable.find('.order-status').text()).toEqual('Не завершен')
		})
	})
})
import React from 'react'
import { shallow } from 'enzyme'
import ProductList from './product-list'

describe('ProductList', () => {
	const props = {
		error: "",
		products: []
	}

	const productList = shallow(<ProductList {...props} />)

	describe('ProductList render', () => {
		it('renders properly', () => {
			expect(productList).toMatchSnapshot()
		})

		describe('Error ProductList', () => {
			const nextProps = {
				...props,
				error: "Something going wrong",
				products: []
			}

			const productList = shallow(<ProductList {...nextProps} />)

			it('render error in Product List', () => {
				expect(productList.find('ErrorIndicator')).toHaveLength(1)
			})
		})

		describe('Loading ProductList', () => {
			const nextProps = {
				...props,
				isFetching: true,
				products: []
			}

			const productList = shallow(<ProductList {...nextProps} />)

			it('render error in Product List', () => {
				expect(productList.find('Spinner')).toHaveLength(1)
			})
		})

		describe('Render Filter in ProductList', () => {
			const nextProps = {
				...props,
				isFetching: false,
				products: [{id: 'asg42sv'}]
			}

			const productList = shallow(<ProductList {...nextProps} />)

			it('Filter in Product List', () => {
				expect(productList.find('Filter')).toHaveLength(1)
			})
		})
	})
})
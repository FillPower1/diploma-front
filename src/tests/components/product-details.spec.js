import React from 'react'
import { shallow } from 'enzyme'
import ProductDetails from '../../components/product-details'

describe('ProductDetails', () => {
	const props = {
		product: {},
		addItemToCart: () => { }
	}

	describe('ProductDetails render', () => {

		const nextProps = {
			...props,
			product: {
				imageSrc: "",
				description: "descr",
				price: 15555,
				title: "title",
				video: "",
				id: "asr41dg",
				characteristics: {}
			}
		}

		const productDetails = shallow(<ProductDetails {...nextProps} />)

		it('renders properly', () => {
			expect(productDetails).toMatchSnapshot()
		})

		it('render ProductPrice > ProductImage', () => {
			expect(productDetails.find('ProductImage')).toHaveLength(1)
		})

		it('render ProductPrice > AddToCartBtn', () => {
			expect(productDetails.find('AddToCartBtn')).toHaveLength(1)
		})

		it('render ProductPrice > Characteristics', () => {
			expect(productDetails.find('Characteristics')).toHaveLength(1)
		})
	})
})
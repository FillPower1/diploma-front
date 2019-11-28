import React from 'react'
import { shallow } from 'enzyme'
import FullNewsItem from '../../components/full-news-item'

describe('Cart Item', () => {
	const props = {
		imgLoad: false
	}

	describe('Full News Item render', () => {

		const nextProps = {
			...props,
			imgLoad: true,
			currentNews: {
				title: "title",
				description: "descr",
				imageSrcL: "",
				dateCreated: new Date().toLocaleDateString()
			}
		}

		const fullNewsItem = shallow(<FullNewsItem {...nextProps} />)

		it('renders properly', () => {
			expect(fullNewsItem).toMatchSnapshot()
		})

		it('render FullNewsItem', () => {
			expect(fullNewsItem.find('Spinner')).toHaveLength(1)
		})

		it('render FullNewsItem title', () => {
			expect(fullNewsItem.find('.full-post-news__title').text()).toEqual(nextProps.currentNews.title)
		})

		it('render FullNewsItem date', () => {
			expect(fullNewsItem.find('.full-post-news__date span').text()).toEqual(nextProps.currentNews.dateCreated)
		})
	})
})
import React, { useState } from 'react'
import Spinner from '../common/spinner'
import './full-news-item.scss'

const FullNewsItem = ({ currentNews }) => {
	const [ imgLoad, setImgLoad ] = useState(false) 
	const { title, description, imageSrc } = currentNews

	return (
		<div className="row">
			<div className="col s8 offset-s2">
				<div className="full-post-news z-depth-1">
					{!imgLoad && <Spinner />}
					<div className="full-post-news__img">
						<img onLoad={() => setImgLoad(true)} src={`/${imageSrc}`} alt="News Img" />
					</div>
					<div className="full-post-news__title">
						{title}
					</div>
					<div className="full-post-news__date">
						<span>Дата создания:</span> {new Date().toLocaleDateString()}
					</div>
					<div className="full-post-news__descr">
						{description}
					</div>
				</div>
			</div>
		</div>
	)
}

export default FullNewsItem
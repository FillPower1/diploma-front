import React, { useState } from 'react'
import Spinner from '../common/spinner'
import './full-news-item.scss'

const FullNewsItem = ({ currentNews }) => {
	const [imgLoad, setImgLoad] = useState(false)
	const { title, description, imageSrc, dateCreated } = currentNews

	return (
		<div className="full-post-news-block">
			<div className="row">
				<div className="container">
					<div className="col s10 offset-s1 full-post-news">
						{!imgLoad && <Spinner />}
						<div className="full-post-news__img">
							<img onLoad={() => setImgLoad(true)} src={`/${imageSrc}`} alt="News Img" />
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="container">
					<div className="full-post-news__title">
						{title}
					</div>
					<div className="full-post-news__date">
						<span>Дата создания:</span> {dateCreated}
					</div>
					<div className="row">
						<div className="col s10 offset-s1">
							<p className="full-post-news__descr" dangerouslySetInnerHTML={{ __html: description}}></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FullNewsItem
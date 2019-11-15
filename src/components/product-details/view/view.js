import React from 'react'

const View = ({ id, video }) => {
    return (
        <iframe
            src={video}
            title={id}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
    )
}

export default View

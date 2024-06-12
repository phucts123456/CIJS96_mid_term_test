import React from 'react'

const Carousel = ({movieName, description}) => {
  return (
    <div className='carousel_container'>
        <img className='carousel_img' src='/img/Spy_x_carousel.png'/>
        <div className='carousel_container_layer'></div>
        <div className='carousel_movie_description'>
            <h1 className='carousel_movie_description_title'>{movieName}</h1>
            <p className='carousel_movie_description_detail'>{description}</p>
        </div>
    </div>
  )
}

export default Carousel
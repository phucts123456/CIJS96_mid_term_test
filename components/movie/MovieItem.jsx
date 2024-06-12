import React from 'react'

const MovieItem = ({image, episode, movieName, handleMovieClick, index}) => {
  return (
    <div className='movie_item_cotainer' onClick={() => handleMovieClick(index)}>
        <img className='movie_item_cotainer_img' src={image} />
        <div className='movie_item_layer'></div>
        <div className='movie_item_info'>
            <p className='movie_item_info_episode'>Episode {episode}</p>
            <p className='movie_item_info_name'>{movieName}</p>
        </div>
    </div>
  )
}

export default MovieItem
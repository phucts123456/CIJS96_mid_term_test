import React from 'react'
import MovieItem from './MovieItem'
import './MovieList.css'

export const MovieList = ({movieList , handleMovieClick}) => {
  return (
    <div className='movie_list_container'>
        <h1 className='movie_list_heading'>New Release</h1>
        <div className='movie_list'>
              {movieList.map((item, index) =>
                 <MovieItem index={index} handleMovieClick={handleMovieClick} key={item.id} movieName={item.movieName} episode={item.episode} image={item.image}/>
              )}
        </div>
    </div>
  )
}

import React from 'react'
import Carousel from './Carousel'
import './Explore.css'
const ExploreContainer = ({selectedMovie}) => {
  const {movieName, id, iamge, episode, description} = selectedMovie;
  return (
    <div className='explore_container'>
      <h1 className='explore_header'>Explore</h1>
      <p className='explore_suggestion'>What are you gonna watch today?</p>
      <Carousel movieName={movieName} description={description}/>
    </div>
  )
}

export default ExploreContainer

import { useState } from 'react'
import ExploreContainer from '../components/explore/ExploreContainer'
import Header from '../components/header/Header'
import { MovieList } from '../components/movie/MovieList'
import {movieList} from '../components/movie/MovieData';
function App() {
  const [movies, SetMovies] = useState(movieList.data);
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const handleMovieClick = (index) => {
    setSelectedMovie(movies[index]);
  }
  return (
    <>
     <div className='app_container'>
        <Header />
        <ExploreContainer selectedMovie={selectedMovie}/>
        <MovieList movieList={movies} handleMovieClick={handleMovieClick} />
     </div>
    </>
  )
}

export default App

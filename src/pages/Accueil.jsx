import Header from '../components/Header'
import Footer from '../components/Footer'
import Film from '../components/Film'
import { recupereMovies } from '../redux/action'
import store from '../redux/store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

/**
 * The Home Page
 * with header, introduction
 * and items of Argent Bank
 * @component
 */
 function Accueil () {
  const statutReq = useSelector(state => state.status)
  const movies = useSelector(state => state.movies)
  let bMovies = (movies !== undefined)

  console.log('statutReq Accueil : ', statutReq)
  console.log('movies Accueil : ', movies) 

  useEffect(() => {
    bMovies = (movies !== undefined)

    if (!bMovies) {
      store.dispatch(recupereMovies())
    }
  }, [bMovies])
    return (
      <div className='accueil'>
        <Header />
        <div className='films'>
          { bMovies ? movies.map((movie) => <Film movie={movie} key={movie.id} />) : <p> non trouvé</p> }
        </div>
        <Footer />
      </div>
    )
  }
  
  export default Accueil
  
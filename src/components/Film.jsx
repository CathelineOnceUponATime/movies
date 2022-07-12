import Like from "./Like"

function Film ({ movie }) {

  function supprimerFilm () {
    const divId = document.getElementById(movie.id)
    if (divId !== (undefined, null)) {
      const parentDivId = divId.parentElement
      parentDivId.removeChild(divId)
    }
  }

  return (
    <div className='film' id={movie.id}>
      <h2> { movie.title } </h2>
      <p> {movie.category} </p>
      <Like movie={movie}/>
      <button onClick={supprimerFilm}> Supprimer </button>
    </div>
  )
}
  
export default Film
  
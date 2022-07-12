import { useEffect } from "react";

function Like ({ movie }) {
  let likes = movie.likes;
  let dislikes = movie.dislikes;
  let percentageLikes = 50;
  
  useEffect(() => {
    calculerRatio();
  }, [likes, dislikes, calculerRatio])
  
  function ajouterLike () {
    likes++;
    calculerRatio();
  }
  function ajouterDislike () {
    dislikes++;
    calculerRatio();
  }
  function calculerRatio() {
    let total = likes+dislikes;
    let percentageLikes = Math.floor((likes/total)*100);
    const nomDiv = 'likes-'+ movie.id
    const divLikes = document.getElementById(nomDiv);
    if (divLikes !== (undefined, null) ) {
      divLikes.style.width = percentageLikes + '%';
    }
    const nomDivLike = 'nbLikes-'+movie.id
    const nomDivDisLike = 'nbDislikes-'+movie.id
    const pNbLikes = document.getElementById(nomDivLike);
    const pNbDislikes = document.getElementById(nomDivDisLike);

    if (pNbLikes || pNbDislikes !== (undefined, null) ) {
      pNbLikes.innerHTML = likes +' personne(s) aime(nt)'
      pNbDislikes.innerHTML = dislikes +' personne(s) n\'aime(nt) pas'
    }
  }
  
  return (
    <div>
      <p id={`nbLikes-${movie.id}`}> {likes} personne(s) aime(nt) </p>
      <p id={`nbDislikes-${movie.id}`}> {dislikes} personne(s) n'aime(nt) pas </p>
       <div id="all">
        <div id="bar">
          <div className='likes' id={`likes-${movie.id}`}></div>
          <div id={`dislikes-${movie.id}`}></div>
        </div>
          <input className="button button-like" type="button" value="like" onClick={ajouterLike} />
          <input className="button button-dislike"  type="button" value="dislike" onClick={ajouterDislike} />
      </div>
    </div>
   
    )
}
  
export default Like
  
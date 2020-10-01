window.onload = () => {
    addMovies ();
}

function addMovies (){
    var moviesEl = document.querySelector('.original__movies');
    console.log(moviesEl)
    for (var i =0; i < 5; i++){
        moviesEl.innerHTML += '<img src="https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg"></img>'
    }

}

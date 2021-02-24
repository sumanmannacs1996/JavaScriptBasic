const ADD_MOVIE_BTN = document.querySelector("header button");
const ADD_MOVIE_MODAL = document.getElementById("add-modal");
const BACKDROP = document.getElementById("backdrop");
const CANCLE_ADD_MOVIE_BTN = ADD_MOVIE_MODAL.querySelector(".btn--passive");
const FINAL_ADD_MOVIE_BTN = ADD_MOVIE_MODAL.querySelector(".btn--success");


const backdropClickHandler =()=>{
    toggleMovieModel();
}

const toggleBackDrop =()=>{
    BACKDROP.classList.toggle("visible");
}

const toggleMovieModel =()=>{
    ADD_MOVIE_MODAL.classList.toggle("visible");
    toggleBackDrop();
}



ADD_MOVIE_BTN.addEventListener("click",toggleMovieModel);
BACKDROP.addEventListener("click",backdropClickHandler);
CANCLE_ADD_MOVIE_BTN.addEventListener("click",backdropClickHandler);

const ADD_MOVIE_BTN = document.querySelector("header button");
const ADD_MOVIE_MODAL = document.getElementById("add-modal");
const BACKDROP = document.getElementById("backdrop");
const CANCLE_ADD_MOVIE_BTN = ADD_MOVIE_MODAL.querySelector(".btn--passive");
const FINAL_ADD_MOVIE_BTN = ADD_MOVIE_MODAL.querySelector(".btn--success");
const USER_INPUTS = ADD_MOVIE_MODAL.querySelectorAll("input");

let Movies =[];


const clearMovieInputs =()=>{
    USER_INPUTS[0].value ='';
    USER_INPUTS[1].value ='';
    USER_INPUTS[2].value ='';
}

const addMovieHandler= ()=>{
    const titleValue = USER_INPUTS[0].value;
    const imageValue = USER_INPUTS[1].value;
    const ratingValue = USER_INPUTS[2].value;
    if(titleValue.trim() == '' || imageValue.trim() == '' || ratingValue.trim() =='' || +ratingValue < 1 || +ratingValue > 5){
        alert("Please Enter Valid Values (Rating between 1 and 5).");
        return false;
    }
    let newMovie ={
        title:titleValue,
        image:imageValue,
        rating:ratingValue
    }
    Movies.push(newMovie);
    toggleMovieModel();
    clearMovieInputs();
}

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
FINAL_ADD_MOVIE_BTN.addEventListener("click",addMovieHandler);

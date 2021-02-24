const ADD_MOVIE_BTN = document.querySelector("header button");
const ADD_MOVIE_MODAL = document.getElementById("add-modal");
const BACKDROP = document.getElementById("backdrop");
const CANCLE_ADD_MOVIE_BTN = ADD_MOVIE_MODAL.querySelector(".btn--passive");
const FINAL_ADD_MOVIE_BTN = ADD_MOVIE_MODAL.querySelector(".btn--success");
const USER_INPUTS = ADD_MOVIE_MODAL.querySelectorAll("input");
const ENTRY_SECTION = document.getElementById("entry-text");
const LIST_ROOOT = document.getElementById("movie-list");

let Movies =[];


const renderNewMovieElement =(title,imageUrl,rating)=>{
    const newMovieElemnt = document.createElement("li");
    newMovieElemnt.className ='movie-element';
    newMovieElemnt.innerHTML=`
    <div class ="movie-element__image">
        <img src ="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}</p>
    </div>
    `;
    LIST_ROOOT.append(newMovieElemnt);

}

const updateUI= ()=>{
    if(Movies.length == 0){
        ENTRY_SECTION.style.display="block";
    }
    else{
        ENTRY_SECTION.style.display="none";
    }
}

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
    renderNewMovieElement(titleValue,imageValue,ratingValue);
    updateUI();
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

const ADD_MOVIE_BTN = document.getElementById("add-movie-btn");
const SEARCH_BTN = document.getElementById("search-btn");
const MOVIE_LIST = document.getElementById('movie-list');
const SEARCH_INPUT = document.getElementById("filter-title");

let Movies =[];
let UNIQUE_ID = Movies.length;



const searchHandler =()=>{
    MOVIE_LIST.innerHTML="";
    let searchTitle = SEARCH_INPUT.value.trim();
    let arr = Movies.filter((p)=>p.info.title.includes(searchTitle));
    let extraName,extraValue;
    for(let p of arr){
        for([key,value] of Object.entries(p.info)){
            extraName = key;
            extraValue = value;
        }
        renderMovies(p.info.title,extraName,extraValue);  
    }
}

const renderMovies =(title,extraName,extraValue)=>{
    if(Movies.length >=1){
        MOVIE_LIST.classList.add("visible");
    }
    let newMovieObj = document.createElement("li");
    let txt = `${title}  -  ${extraName}:${extraValue}`;
    newMovieObj.textContent = txt;
    MOVIE_LIST.append(newMovieObj);

}

const clearInpts =()=>{
    const title = document.getElementById('title');
    const extraName = document.getElementById('extra-name');
    const extraValue = document.getElementById('extra-value');
    title.value ='';
    extraName.value='';
    extraValue.value='';
}

const addMovieHandler=()=>{
    const title = document.getElementById('title').value.trim();
    const extraName = document.getElementById('extra-name').value.trim();
    const extraValue = document.getElementById('extra-value').value.trim();
    if(title == '' || extraName == '' || extraValue == ''){
        alert("Please enter all the values!!");
        return false;
    }

    const newMovie ={
        info:{
            title:title,
            [extraName]:extraValue
        },
        id:UNIQUE_ID++
    };
    Movies.push(newMovie);
    clearInpts();
    renderMovies(title,extraName,extraValue);
}




ADD_MOVIE_BTN.addEventListener('click',addMovieHandler);
SEARCH_BTN.addEventListener('click',searchHandler);
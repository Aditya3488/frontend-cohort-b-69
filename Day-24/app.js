let API = "http://www.omdbapi.com/?apikey=42cae6c7&t=";

let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let actor = document.querySelector('#actor');
let director = document.querySelector('#director');
let award = document.querySelector('#awards');
let collection = document.querySelector('#collection');
let genre = document.querySelector('#genre');
let lang = document.querySelector('#lang');
let rating = document.querySelector('#rating');
let poster = document.querySelector('#poster');
let container = document.querySelector('#container');
let error = document.querySelector('#error');
let suggestion = document.querySelector('#suggestion');
container.classList.add('hidden')
function Search(){
    let movieInput = document.querySelector('#MovieInput');
    let query = API + movieInput.value;

    fetch(query).then(data=> data.json()).then(data=>{
        // console.log(data)
        error.innerText = "";
        if(data.Error == 'Movie not found!'){
            error.innerText = "Movie not found!";
        }else{
            container.classList.remove('hidden')
            title.innerText = data.Title;
            desc.innerText = data.Plot;
            actor.innerText = data.Actors;
            director.innerText = data.Director;
            award.innerText = data.Awards;
            collection.innerText = data.BoxOffice;
            genre.innerText = data.Genre;
            lang.innerText = data.Language;
            rating.innerText = data.imdbRating;
            poster.src = data.Poster; 
            if(data.imdbRating>7){
                suggestion.innerText = "Worth Watching";
                suggestion.style.backgroundColor = 'green';
                suggestion.style.color = 'white';
            }else if(data.imdbRating>=6 && data.imdbRating<7){
                suggestion.innerText = "can watch";
                suggestion.style.backgroundColor = 'yellow';

            }else{
                suggestion.innerText = "Not worth watching";
                suggestion.style.backgroundColor = 'red';
                suggestion.style.color = 'white';
            }
        }
       
    });
}

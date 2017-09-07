
let template = document.querySelector("#movieList").content;
let main = document.querySelector('main');


function getData(link) //CONNECTS THE DATABASE TO THE SITE
{
    fetch(link).then(function (response) {
        return response.json();
    }).then(function (json) {
        show(json);
    });
}


function show(json) { //RUNS THE FUNCTION AND CREATES AN OBJECT FOR EACH ITEM ON THE DATABASE
    console.log(json);
    json.forEach(showMovies);
}

getData('movie_list.json');

function showMovies(movie) //CLONES THE TEMPLATE AND INSERTS THE ITEMS
{

    let clone = template.cloneNode(true);

    //console.log(movie);
    clone.querySelector('.name').textContent = movie.name;

    clone.querySelector('.genre').textContent = movie.genre;

    clone.querySelector('.year').textContent = movie.year;

    clone.querySelector('.director').textContent = movie.director;

    clone.querySelector('.duration').textContent = movie.duration;

    clone.querySelector('.description').textContent = movie.description;

    main.appendChild(clone);

}


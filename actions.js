// Array (arreglo) de listado de Peliculas
var listaPelis = [
    "https://m1.paperblog.com/i/33/333905/cara-b-conan-el-barbaro-pelicula-L-83FLKK.jpeg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Predator_Movie.jpg/220px-Predator_Movie.jpg",
    "https://pics.filmaffinity.com/Terminator_2_El_juicio_final-825143697-large.jpg",
    "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/79/19/92/20531834.jpg"
];

// Array (arreglo) de listado de Nombres de Peliculas
var listaNombres = [
    "Conan el Bárbaro",
    "Predator",
    "Terminator - 2",
    "Commando"
];

// Array (arreglo) de enlaces a los trailers de las películas
var listaTrailers = [
    "https://www.youtube.com/watch?v=Nok-jOYn6Dg", // Trailer de Conan el Bárbaro
    "https://www.youtube.com/watch?v=X2hBYGwKh3I", // Trailer de Predator
    "https://www.youtube.com/watch?v=bIwkaT6A7pk", // Trailer de Terminator 2
    "https://www.youtube.com/watch?v=pPhISgw3I2w"  // Trailer de Commando
];

// Ciclo For para recorrer el arreglo de Peliculas
document.write('<div class="container_todosFilmes">')

for (var i = 0; i < listaPelis.length; i++) {
    document.write('<div class="container_filme">')
    document.write('<img class="imgFilme"  alt="Pelicula" src='+ listaPelis[i] +'>');
    document.write('<p class="titulo_filme" >'+ listaNombres[i] +'</p>');
    document.write('<a class="linkTrailer"  href="' + listaTrailers[i] + '" target="_blank">Link al Trailer</a>');  
    document.write('</div>')
}

// Se muestran todas las fotos de peliculas y sus nombres en la pagina
document.write('</div>')


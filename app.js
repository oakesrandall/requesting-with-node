//require the movie.js module
const get = require("./movie.js");

//created my favorite movie array and an empty array to hold them once I format them properly
var threeFavoriteMovies = ["The Big Lebowski", "Shawshank Redemption", "Star Wars Episode 5: The Empire Strikes Back"];
var moviesFormattedForSearch = [];

//iterate through each element of my favorite movie array
threeFavoriteMovies.forEach(function(film){
//while iterating through the movie titles, also iterate through each letter of each movie title
//and change the spaces into plus signs
  for (var i = 0; i < film.length; i++) {
    film = film.replace(" ", "+");
  } //exit for loop
//push the movie titles into a collector array once they're properly
//formatted and add a +Movie to each title
  moviesFormattedForSearch.push(film + "+Movie");
});  //exit forEach

//call my get function on each of my favorite movies
moviesFormattedForSearch.forEach(function(film){
  get(film);
});

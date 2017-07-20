//creating variables to hold my api key and id
const apiKey = require("./env.js").apiKey;
const apiId = require("./env.js").apiId;

//pulling in the request module
const request = require("request");

//building the url to point my request at by concatenating the search url
//with my api keys and id
const apiUrl = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + apiId + "&q=";

//requests using the apiUrl and movie title (doesn't need to be stringified since
//it's already an array of strings)
function get(movieTitle) {
  request((apiUrl + movieTitle), function(error, response, body){
//prints the parsed value with the key of snippet in the first index of the array called items (from the body)
    console.log(" ");
    console.log(JSON.parse(body).items[0].snippet);
    console.log(" ");
  });
}

//exports my get function to be used in app.js
module.exports = get;

require("dotenv").config();

//Variables

var axios = require("axios");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var moment = require("moment");
var keys = require("./keys");
console.log(keys);


//Variable for arguments entered

var liriCommand = process.argv[2];
console.log("liriCommand: " + liriCommand);

var userSearch = process.argv.slice(3).join(" ");
console.log("userSearch: " + userSearch);

function liriRun(liriCommand, userSearch) {
  switch (liriCommand) {
    case "spotify-this-song":
      return getSpotify(userSearch);
      

  //If command is left blank, return default message to user
  default: 
    console.log("Please enter one of the following commands: 'spotify-this-song', 'concert-this', 'movie-this', or 'do-what-it-says'");
  }
};

//Spotify API search

function getSpotify(songName) {
  var spotify = new Spotify(keys.spotify);

  // var songName = process.argv[3];
  if(!songName) {
      songName = "The Sign";
  };


  spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

      console.log("================================="); 
      console.log("Artist: " + data.tracks.items[0].album.artists[0].name + "\r\n");
      console.log("Song name: " + data.tracks.items[0].name + "\r\n");
      console.log("Album Name: " + data.tracks.items[0].album.name + "\r\n");
      console.log("Preview Link: " + data.tracks.items[0].preview_url + "\r\n");
      

  });

};

  liriRun(liriCommand, userSearch);






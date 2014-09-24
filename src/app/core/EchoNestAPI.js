



// REQUIRE ---------------------------------------------------------------------------------------

var $ = require ("jquery")
var config  = require ("../config")
var echoEvent = require ("../events/EchoEvent")
var EventEmitter = require('events').EventEmitter;

// VARS ---------------------------------------------------------------------------------------


//EXPORTS---------------------------------------------------------------------------------------

exports.data = EchoNestApi.data;
exports.HOTSONGS =EchoNestApi.HOTSONGS;
exports.ARTIST = EchoNestApi.ARTIST;
exports.load = EchoNestApi.load;
module.exports = EchoNestApi;


//FUNCTIONS---------------------------------------------------------------------------------------


function EchoNestApi (basePath, ApiKey) {
	EventEmitter.call (this);
    this.ApiKey = ApiKey;
    this.basePath  = basePath;

	this.HOTSONGS = "hotsongs";
	this.ARTIST = "artist";
	this.data = null;


};

//---------------------------------------------------------------------------------------

EchoNestApi.prototype = Object.create(EventEmitter.prototype);
EchoNestApi.prototype.constructor = EchoNestApi ;
//---------------------------------------------------------------------------------------


EchoNestApi.prototype.load = function (type, searchParam ) {

    var path = this.setSearchType(type, searchParam);

	console.log (" EchoNestAPI.js > path " , path)
    var that = this
    $.getJSON( path , function (data) {
	    console.log (" main.js > data " , data.response);
	    console.log (" main.js > data " , data.response.status.message)
	    that.data = data.response
	    that.emit (echoEvent.COMPLETE)

    } );
    //document.dispatchEvent(new Event (""))

}





EchoNestApi.prototype.setSearchType = function (type, searchParam) {
	console.log (" EchoNestAPI.js > type " , type)


    switch(type) {
	    case "hotsongs":

           // return basePath + 'song/search?api_key='+ ApiKey + '&sort=song_hotttnesss-desc&bucket=song_hotttnesss';
            return "http://developer.echonest.com/api/v4/song/search?api_key="+ this.ApiKey +"&sort=song_hotttnesss-desc&bucket=song_hotttnesss"

            break;
        case "artist":
            searchType = ARTIST

            break;
        default:
        //default code block
    }

    var path = this.basePath+ARTIST+'/search?api_key=' + this.ApiKey + '&name=' + searchParam;

    return path;

};




// Hot song right now
//http://develop er.echonest.com/api/v4/
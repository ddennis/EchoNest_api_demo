/**
 * @author ddennis.dk - aka fantastisk.dk/works aka meresukker.dk
 */

// REQUIRE ---------------------------------------------------------------------------------------
/* */ "use strict"; /* */

var _ = require ('underscore');
var EventEmitter = require('events').EventEmitter;
var $ = require("jquery");
var hotsongs = require("./template/hotsongs.hbs");


// VARS ---------------------------------------------------------------------------------------

module.exports = TestView

//EXPORTS---------------------------------------------------------------------------------------


function TestView () {
	EventEmitter.call(this)

};


TestView.prototype = Object.create(EventEmitter.prototype);
TestView.prototype.constructor = TestView ;

TestView.prototype.renderResult = function (s) {
	console.log ("TestViewo.js >  ", s);

};


TestView.prototype.update  = function(data){
	console.log (" TestView.js >  " , data )


	//var obj = { title: "Dennis ", tools:tools, description:"A long describtion" };
	var k = hotsongs(data);

	$('body').html(k);

}
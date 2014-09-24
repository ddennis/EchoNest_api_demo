"use strict";

//---------------------------------------------------------------------------------------


var TestView = require("./view/TestView");
var $ = require("jquery");
var config = require("./config");
var EchoNestApi = require("./core/EchoNestAPI");
var echoEvent = require("./events/EchoEvent")
var _ = require("underscore");
var EventEmitter = require('events').EventEmitter;



	function Main() {
		EventEmitter.call (this);
		this.scope = this;
		this.setup();
	};

	Main.prototype = Object.create(EventEmitter.prototype);
	Main.prototype.constructor = Main ;


	Main.prototype.setup = function () {

		var remixer;
		var player;
		var track;
		var remixed;





		var context = new webkitAudioContext();
		remixer = createJRemixer(context, $, apiKey);
		player = remixer.getPlayer();
		$("#info").text("Loading analysis data...");

		// The key line.  This prepares the track for remixing:  it gets
		// data from the Echo Nest analyze API and connects it with the audio file.
		// All the remixing takes place in the callback function.
		remixer.remixTrackById(trackID, trackURL, function(t, percent) {
			track = t;

			// Keep the user update with load times
			$("#info").text(percent + "% of the track loaded");
			if (percent == 100) {
				$("#info").text(percent + "% of the track loaded, remixing...");
			}

			// Do the remixing!
			if (track.status == 'ok') {
				// This array holds the chunks of audio that we're going to play back
				remixed = new Array();

				// This loops over each beat in the track.
				// If the index of the beat is a multiple of four, we append the beat to the playback array.
				for (var i=0; i < track.analysis.beats.length; i++) {
					if (i % 4 == 0) {
						remixed.push(track.analysis.beats[i])
					}
				}
				$("#info").text("Remix complete!");
			}
		});












		
	};


//---------------------------------------------------------------------------------------

	Main.prototype.loadSomething  = function(){

		var that = this;
		var echoApi = new EchoNestApi(config.getBasePath(), config.getAPIkey());
		var view = new TestView();

		echoApi.on(echoEvent.COMPLETE , function (argument) {
			console.log (" main.js > Load½ed " , view.update(echoApi.data ));
		});

		echoApi.load(echoApi.HOTSONGS)

	}





	// KICK IT ---------------------------------------------------------------------------------------
	var main = new Main ()








//console.log (" main.js > myView  " , myView )
/*myView.sayHi()
*/
//myView.sayByeBye("Dnenis ")





//---------------------------------------------------------------------------------------

/*



//---------------------------------------------------------------------------------------


var echoNestApi = new EchoNestApi (config.getBasePath(), config.getAPIkey());
echoNestApi.load(echoNestApi.HOTSONGS, "Elvis");


echoNestApi.on(echoEvent.COMPLETE , function () {
    console.log (" main.js > yes " )
});






*/

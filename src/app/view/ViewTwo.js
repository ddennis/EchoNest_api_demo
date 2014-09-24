
/**
 * @author ddennis.dk - aka fantastisk.dk/works aka meresukker.dk
 */


// REQUIRE ---------------------------------------------------------------------------------------
/* */ "use strict"; /* */

var _ = require ('underscore');

var EventEmitter = require('events').EventEmitter;



// VARS ---------------------------------------------------------------------------------------


//EXPORTS---------------------------------------------------------------------------------------


function ViewTwo () {
    EventEmitter.call(this)
};


ViewTwo.prototype = Object.create(EventEmitter.prototype);
ViewTwo.prototype.constructor = ViewTwo ;

ViewTwo.prototype.sayByeBye = function (s) {
    console.log ("TestViewo.js > Bye bye DENNIS ", s);
    this.emit("dennis")
};




//_.extend(TestView , EventEmitter  );

/*TestView.prototype = {

    sayHi: function () {

        console.log (" TestView.js > TEST ")
    },

    sayBye: function (s) {
        console.log (" TestView.js > Bye bye ", s);
        this.emit("test")
    }

}*/



module.exports = ViewTwo;

//console.log (" TestView.js > TestView " , TestView.sayHi())
//module.exports = TestView;




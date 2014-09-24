/**
 * @author ddennis.dk - aka fantastisk.dk/works aka meresukker.dk
 */
//REQUIRE -------------------------------------------------------------

var $ = require ("jquery");

// VARS ------------------------------------------------------------

AjaxLoader.DATA_LOADED  = 'dataLoaded';



function AjaxLoader(testing){
    isTesting = testing;
}
//---------------------------------------------------------------------------
/**
 * @param url to server or file on server
 * @param dataToSend could be anything
 */


AjaxLoader.prototype.sendData = function(url, dataToSend, sendType) {

    if (sendType === undefined) {
        sendType = "POST";
    }

    var that = this; // cache scope
    var loadedData;
    var ajaxRequest = $.ajax(url, {
        type: sendType,
        dataType:"text",
        data: dataToSend
    });

    ajaxRequest.success(

        // Det er kun "success" funktionen som får den loaded data
        function(data, textStatus, jqXHR) {

            if (jqXHR.status.toString () === "200" ){

                console.log ("AJAX OK " );
                that.data = data;

                $(that).trigger(that.DATA_LOADED);

            }else{
                console.log ("AJAX ERROR ----- " );
            }




            if (isTesting) {
                console.log ("AjaxLoader> data = " + data);
            }

        });

    //---------------------------------------------------------------------------------------

    ajaxRequest.complete(
        function(jqXHR, status) {

        });


    ajaxRequest.error(

        function(jqXHR, textStatus, errorThrown) {
            // that.data = loadedData
            console.log ("AjaxLoader error " + loadedData );
            console.log ("AjaxLoader error status " + status );

        });

//---------------------------------------------------------------------------------------

    /*
     var that = this // cache scope
     $.ajax({
     type: 'POST',
     url: url,
     data: dataToSend,
     dataType: "xml/text" ,
     processData: false,

     //---------------------------------------------------------------------------
     // the success is kept here to keep scope easy way

     success: function (loadedData) {

     if (that.isTesting) {
     console.log ("AjaxLoader data " + loadedData )
     };

     that.data = loadedData
     $(that).trigger(that.DATA_LOADED);
     },
     // -------------------------------------------------------------------------
     error: this.onError
     });	*/
};


//---------------------------------------------------------------------------


AjaxLoader.prototype.onError = function(xhr, textStatus, error) {
    console.log('status: ' + textStatus);
    console.log(xhr.responseText);
    console.log(xhr.status);
};





module.exports = AjaxLoader;
//---------------------------------------------------------------------------------------


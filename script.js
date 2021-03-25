// Section 1
var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);

// Section 2
function showNotification() {
    if(window.Notification) {
        Notification.requestPermission(function(status) {
            console.log('Status: ', status); // show notification permission if permission granted then show otherwise message will not show
            var options = {
                body: 'Appointment available!', // body part of the notification
            }
            var n = new Notification('Covid Scheduler', options);
        });
    }
    else {
        alert('Your browser doesn\'t support notifications.');
    }
}

function stop(){
    $('#ramahin').remove()
}

function start(){
    $('#scheduler > div.row.m-t.ng-star-inserted > div.col-lg-3.col-sm-6.grid-3').append('<div id="ramahin"/>')
}

async function execute(){
    while (1) {
        let dropdowns = []
        if ( $( "#ramahin" ).length ) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            $('mat-radio-group > mat-radio-button')[0].click()
            let text = ""
            do {
                let schedule = $('app-schedule2 > div > div.m-t-lg.text-center.ng-star-inserted')
                text = schedule.text()
                dropdowns = $('app-schedule2').find(".dropdownbox").not(".hidden")
                await new Promise(resolve => setTimeout(resolve, 100));
            } while( text == "" && dropdowns.length == 0)
            console.log( "text='" + text + "', dropdowns=" + dropdowns.length )
        } else {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        if ( dropdowns.length > 0 ) {
            showNotification()
            let available = dropdowns.first()
            available.find("button").click()
            console.log( available )
            console.log( "GO GO GO!!!" )
            stop()
        }
    }
}

$('#scheduler > div.row.m-t.ng-star-inserted > div.col-lg-3.col-sm-6.grid-3').append('<input type="button" value="Stop" onClick="stop()" />')
$('#scheduler > div.row.m-t.ng-star-inserted > div.col-lg-3.col-sm-6.grid-3').append('<input type="button" value="Start" onClick="start()" />')
execute()
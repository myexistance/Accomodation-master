

//Date datepicker
var days;
$(function(){
    

   $("#startDate").datepicker({ 
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    minDate: new Date(),
    maxDate: '+1y',
    onSelect: function(date){

        var selectedDate = new Date(date);
        var msecsInADay = 86400000;
        var stDate = new Date(selectedDate.getTime() + msecsInADay);

       //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
        $("#endDate").datepicker( "option", "minDate", stDate );
        var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);


        $("#endDate").datepicker( "option", "maxDate", enDate );

    }
});

$("#endDate").datepicker({ 
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    onSelect : function(){
    var start = $('#startDate').datepicker('getDate');
    var end = $('#endDate').datepicker('getDate');
     days   = (end - start)/1000/60/60/24;
    console.log(days);
    }
});

//Find the number of days between dates

  /*function dateDiff() {

    var start = $('#startDate').datepicker('getDate');
    var end = $('#endDate').datepicker('getDate');
    var days   = (end - start)/1000/60/60/24;
    console.log(days);
    
    document.getElementById("noDays").innerHTML = days ;
    return days;
  }*/



});

  //Find the number of days between dates
    
var  guests;
//Find the number of days between dates
function calculate() {

 
   // alert(days);
   document.getElementById("noDays").innerHTML = days + " Days   > " ;
    guests= document.getElementById('noGuest').value;
   document.getElementById("numGuest").innerHTML = guests + " Guest(s)  " ;
}

// filtering
  $("#motelGet").show();
  $("#hostel30Get").show();
  $("#hostel157Get").show();
  $("#houseGet").show();

function accom(){
if ((guests < 2 ) && (days<=5)) {
  $("#motelGet").hide();
  $("#hostel30Get").show();
  $("#hostel157Get").show();
  $("#houseGet").show();
}
/*if ((guests < 2 ) && (days<=10)) {
  $("#hostel157Get").show();
  $("#hostel30Get").hide();
  $("##motelGet").show();
  $("#houseGet").show();
  
}
if ((g < 2 ) && (days<=10)) {
  $("#motelGet").hide();
  $("#hostel30Get").hide();
  $("#hostel157Get").show();
  $("#houseGet").show();
}
if ((g <=2 ) && (days<=15)) {
  $("#hostel30Get").hide();
  $("#motelGet").show();
  $("#hostel157Get").show();
  $("houseGet").show();
}
if ((g <=3 ) && (days<=10)) {
  $("#hostel30Get").hide();
  $("#motelGet").show();
  $("#hostel157Get").show();
  $("#houseGet").show();
}
if ((g <=4 ) && (days<=10)) {
  $("#motelGet").show();
  $("#houseGet").show();
  $("#hostel30Get").hide();
  $("#hostel157Get").hide();
  
}
}*/
//Make Booking for hostel $30
function makeBooking30() {
var bfcost = 0;
   // 
 
   var bf = document.getElementById('bFast').value;
   console.log(bf);
   if (bf=="Yes"){
    
     bfcost = 30;
   }
   console.log(bf);
    var total = days * (30 + bfcost);
   // alert(days);

   document.getElementById("noDaysM").innerHTML = days + " Days   > " ;
   document.getElementById("numGuestM").innerHTML = guests + " Guest(s) > " ;
   document.getElementById("bFastM").innerHTML = "with "  + " breakfast ($30)" ;
   document.getElementById("totalCostM").innerHTML = total + " Dollars " ;
   console.log(total);
}

//Make Booking for hostel $157
function makeBooking157() {
  var bf;
var bfcost = 0;
   
   var guests = document.getElementById('noGuest').value;
  var bf = document.getElementById('bFast').value;
  console.log(bf);
   if (bf=="Yes"){
    
     bfcost = 30;
   }
   console.log(bf);
    var total = days * (157 + bfcost);
   // alert(days);

   document.getElementById("noDaysM").innerHTML = days + " Days   > " ;
   document.getElementById("numGuestM").innerHTML = guests + " Guest(s) > " ;
   document.getElementById("bFastM").innerHTML = "with "  + " breakfast ($30)" ;
   document.getElementById("totalCostM").innerHTML = total + " Dollars " ;
   console.log(total);
}

//Make Booking for motel $90
/*function makeBooking90() {
var bfcost = 0;
   
   var guests = document.getElementById('noGuest').value;
   var bf = document.getElementById('bFast').value;
   console.log(bf);
   if (bf=="Yes"){
  
     bfcost = 30;
   }
   console.log(bf);
    var total = days * (90 + bfcost);
   // alert(days);

   document.getElementById("noDaysM").innerHTML = days + " Days   > " ;
   document.getElementById("numGuestM").innerHTML = guests + " Guest(s) > " ;
   document.getElementById("bFastM").innerHTML = "with "  + " breakfast ($30)" ;
   document.getElementById("totalCostM").innerHTML = total + " Dollars " ;
   console.log(total);
}

//Make Booking for house $240
function makeBooking240() {
var bfcost = 0;
  
   var guests = document.getElementById('noGuest').value;
   var bf = document.getElementById('bFast').value;
   console.log(bf);
   if (bf=="Yes"){
    
     bfcost = 30;
   }
   console.log(bf);
    var total = days * (240 + bfcost);
   // alert(days);

   document.getElementById("noDaysM").innerHTML = days + " Days   > " ;
   document.getElementById("numGuestM").innerHTML = guests + " Guest(s) > " ;
   document.getElementById("bFastM").innerHTML = "with "  + " breakfast ($30)" ;
   document.getElementById("totalCostM").innerHTML = total + " Dollars " ;
   console.log(total);
}*/

// function Validate() {
//         var noGuest= document.getElementById("noGuest");
//         if (subcat.value == "0") {
//             //If the "Please Select" option is selected display error.
//             alert("Please select an option!");
//             return false;
//         }
//         return true;
//     }
//
//
//     onclick ="return Validate();"


// Jumping between tabs in the modal
$(function () {
    $('#date a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    })

    $('#guest a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    })

    $('#total a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    })
});

//google maps
var map;
//var newMarker;
// var directionsService = new google.maps.DirectionsService();
// var directionsDisplay = new google.maps.DirectionsRenderer();
function initMap(){
  map=new google.maps.Map(document.getElementById("map"),{
    center: {lat: -41.2792, lng: 174.7803},
    zoom: 8
  });

  marker = new google.maps.Marker({
    position: {lat: -41.2792, lng: 174.7803},
    map: map,
    title: "Hostel30"
  });
  infowidow= new google.maps.InfoWindow({
    content: "Wellington Stn lat: -41.2792, lng: 174.7803"
  });
   marker.addListener('click', function(){
    infowidow.open(map, marker);
   });


// modal close


  // map.addListener('click', function(event) {
  //     console.log(event);
  //
  //     if(newMarker && newMarker.setMap) {
  //       newMarker.setMap(null);
  //     }
  //
  //
  //     newMarker = new google.maps.Marker({
  //       position: event.latLng,
  //       map: map
  //     });
  //     showDirections(event.latLng);
  // });

}

// Swiper
// var swiper = new Swiper('.swiper-container', {
//       effect: 'coverflow',
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: 'auto',
//       coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows : true,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//       },
//     });
var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8q49U5af7z7TZIu-VZDm9aPqJxi1AubI",
    authDomain: "reservation-site-8bb10.firebaseapp.com",
    databaseURL: "https://reservation-site-8bb10.firebaseio.com",
    storageBucket: "reservation-site-8bb10.appspot.com",
    messagingSenderId: "512919725588"
  };
  firebase.initializeApp(config);

// Connect Firebase
var database = firebase.database();


  //create an empty object using object literal notation
  var reservationData = {}

  //add a click event to each of your reservation options


  //Add an event listener for when the user submits the form.
  $('#reservations__form').on('submit', function(e) {
    
      //Prevent the default action for a form submit
      e.preventDefault();
    
      //Add the name the user entered to the reservationData object
      reservationData.name = $('#reservations__make-reservation__form--name').val();

       //in its corresponding event handler define a property day on your reservationData object that will have a //value of the clicked on element's text.
      reservationData.day = $('#reservations__make-reservation__form--day').val();
    
      //Create a section for reservations data in your database
      var reservationsReference = database.ref('reservations');
    
      //POST reservationData object to your Firebase database using Firebase's .push() method.
      reservationsReference.push(reservationData);
  });












// Google Maps

function initMap() {

  // Google Map Styles

    var styles = [ {

      stylers: [
        { hue: '#d7534c'},
        { saturation: -20 }

        ]},

        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            { lightness: 50 },
            { visability: 'simplified' }

          ]
        }, 

        {

          featureType: 'road',
          elementType: 'labels',
          stylers: [
            { visibility: 'off' }
          ]
        }
    ];

	 var map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 40.454983, lng: -80.012403},
    	zoom: 15,
    	zoomControl: false,
  		mapTypeControl: false,
  		scaleControl: false,
  		streetViewControl: false,
  		rotateControl: false,
  		fullscreenControl: false,
      styles: styles

  	});

    // Google Map Marker
    var marker = new google.maps.Marker({
        position: {lat: 40.454983, lng: -80.012403},
        map: map,
        title: 'Monks Café'
      });


} // end Google Map
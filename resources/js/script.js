
// Google Map

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
} // end Google Map
angular.module('roadTripIt', [])

console.log('App.js sanity check');

var map;
      
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat:39.5, lng: -98.35},
	  zoom: 4
	});
}
//zoom options: 10: City, 15: Streets, 20: Buildings
angular.module('BlankApp', ['ngMaterial', 'ngMap'])
.controller('AppCtrl', function(NgMap,$scope){
	$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBq_v_JvxmZ_56MWWcGjL1KUlIb3_Ki5Nc";
	NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
    $scope.pos = {
    	lat: 59.3341577,
    	long: 18.0745626
    }
  });
});
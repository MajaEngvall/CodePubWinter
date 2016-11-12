angular.module('BlankApp', ['ngMaterial', 'ngMap'])
.controller('AppCtrl', function(NgMap,$scope, $mdSidenav){
	$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBq_v_JvxmZ_56MWWcGjL1KUlIb3_Ki5Nc";
	NgMap.getMap().then(function(map) {
	    console.log(map.getCenter());
	    console.log('markers', map.markers);
	    console.log('shapes', map.shapes);
  	});
	$scope.pos = {
    	lat: 59.3341577,
    	lng: 18.0745626,
    	zoom: 16
    }
    $scope.isOpen = false;
    $scope.togglePlusMenu = function(){
    	if($scope.isOpen) {
    		$scope.isOpen = false;
    	} else {
    		$scope.isOpen = true;
    	}
    }
    
    $scope.toggleLeft = buildToggler('left');
    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }
});
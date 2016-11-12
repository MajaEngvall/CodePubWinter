angular.module('BlankApp', ['ngMaterial', 'ngMap'])
.controller('AppCtrl', function(NgMap,$scope, $mdSidenav, $document){
	$scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBq_v_JvxmZ_56MWWcGjL1KUlIb3_Ki5Nc";
	var mapObj;
	NgMap.getMap().then(function(map) {
		mapObj = map;
	    console.log(map.getCenter());
	    console.log('markers', map.markers);
	    console.log('shapes', map.shapes);
  	});
	$scope.pos = {
    	lat: 59.3341577,
    	lng: 18.0745626,
    	zoom: 16
    }

    $scope.kommun = [
        {
           "lat": 59.3321577,
           "lng": 18.0753656
        },
        {
           "lat": 59.3381577,
           "lng": 18.0715626
        },
        {
           "lat": 59.3341577,
           "lng": 18.0775626
        }

    ];

    $scope.privat = [
        {
           "lat": 59.3343577,
           "lng": 18.0743656
        },
        {
           "lat": 59.3361577,
           "lng": 18.0755626
        },
        {
           "lat": 59.3321577,
           "lng": 18.0725626
        }

    ];

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

    $scope.search = 'Birger Jarlsgatan 7';

    $scope.edit = false;
    $scope.editMode = function(editMode) {
    	$scope.edit = editMode;
    	console.log($scope.edit)
    	// $document.on('click', function(){
    	// 	console.log('click')
    	// })
    	google.maps.event.addListener(mapObj, 'click', function(event) {
    		var pos = {
	    		lat: event.latLng.lat(),
	    		lng: event.latLng.lng(),
	    		prio: "high"
    		}

    		$scope.privat.push(pos);
    		console.log($scope.privat)
		});

	function placeMarker(location) {
	    var marker = new google.maps.Marker({
	        position: location, 
	        map: map
	    });
	}
    }


})
.controller('PlusMenuCtrl', function($scope){
  this.topDirections = ['left', 'up'];
  this.bottomDirections = ['down', 'right'];

  this.isOpen = false;

  this.availableModes = ['md-fling', 'md-scale'];
  this.selectedMode = 'md-fling';

  this.availableDirections = ['up', 'down', 'left', 'right'];
  this.selectedDirection = 'up';
  $scope.demo = {
    isOpen: false,
    selectedDirection: 'up',
    selectedMode: 'md-fling'
  };
});
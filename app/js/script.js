angular.module('BlankApp', ['ngMaterial', 'ngMap'])
.controller('AppCtrl', function(NgMap,$scope, $mdSidenav, $document){
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
           "lng": 18.0743656,
           "prio": "high"
        },
        {
           "lat": 59.3361577,
           "lng": 18.0755626,
           "prio": "medium"
        },
        {
           "lat": 59.3321577,
           "lng": 18.0725626,
           "prio": "low"
        },
        {
           "lat": 59.3341577,
           "lng": 18.0728626,
           "prio": "high"
        },
        {
           "lat": 59.3391577,
           "lng": 18.0735626,
           "prio": "medium"
        },
        {
           "lat": 59.3311577,
           "lng": 18.0735626,
           "prio": "low"
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
    	$document.on('click', function(){
    		console.log('click')
    	})
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
(function(){
	"use strict";

	angular
	  .module("ngClassifieds")
	  .controller("classCtrl", function($scope, $http,classifiedFactory,$mdSidenav) {

	  	classifiedFactory.getClassifieds().then(function(classifieds) {
	  		// body...
	  		$scope.classifieds=classifieds.data;
	  	});

	  	$scope.openSidebar = function(){
	  		$mdSidenav('left').open();
	  	};
	  	$scope.closeSidebar = function(){
	  		$mdSidenav('left').close();
	  	}


  

  });

})();
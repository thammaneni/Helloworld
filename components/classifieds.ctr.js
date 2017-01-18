(function(){
	"use strict";

	angular
	  .module("ngClassifieds")
	  .controller("classCtrl", function($scope, $http) {

	  	$http.get('data/classified.json').then(function(classifieds) {
	  		// body...
	  		$scope.classifieds=classifieds.data;
	  	})
  

  });

})();
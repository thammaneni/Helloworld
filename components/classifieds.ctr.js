(function(){
	"use strict";

	angular
	  .module("ngClassifieds")
	  .controller("classCtrl", function($scope, $http,classifiedFactory) {

	  	classifiedFactory.getClassifieds().then(function(classifieds) {
	  		// body...
	  		$scope.classifieds=classifieds.data;
	  	})
  

  });

})();
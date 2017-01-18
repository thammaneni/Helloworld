(function(){
	"use strict";

	angular
	  .module("ngClassifieds")
	  .controller("classCtrl", function($scope, $http,classifiedFactory,$mdSidenav, $mdToast) {

	  	classifiedFactory.getClassifieds().then(function(classifieds) {
	  		// body...
	  		$scope.classifieds=classifieds.data;
	  	});
    	
    	var contact = {
    		name : "Srinivas",
    		phone : "+91 8985466598",
    		email : "thammanenitcs@gmail.com"
    	}
	  	$scope.openSidebar = function(){
	  		$mdSidenav('left').open();
	  	}
	  	$scope.closeSidebar = function(){
	  		$mdSidenav('left').close();
	  	}

     $scope.saveClassified= function(classified){
     	if(classified){
        
        classified.contact=contact;
     	$scope.classifieds.push(classified);
     	$scope.closeSidebar();
     	$scope.classified={};
     	$mdToast.show(
     		$mdToast.simple()
     			.content("classified is saved..")
     			.position('top, right')
     			.hideDelay(3000)
     			);
        }
     	
     }
  

  });

})();
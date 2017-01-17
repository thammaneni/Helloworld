(function(){
	"use strict";

	angular
	  .module("ngClassifieds")
	  .controller("classCtrl", function($scope) {
  
	  	$scope.classified={
	  		tittle= "First pic",
	  		price= "$1,000,000",
	  		description="Dhoni with the 2013 Champions Trophy. (Getty Images) If the 2007 World T20 title victory made Dhoni a superstar and the 2011 ODI World Cup title victory made the wicketkeeper-batsman a legend, then the 2016 World T20 title win will make the Indian captain one of the greatest ever to grace the game."

	}
	  });

})();
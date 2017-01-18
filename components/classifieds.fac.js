(function(){
	"use strict";
	angular
		.module("ngClassifieds")
		.factory("classifiedFactory", function($http){

        function getClassifieds(){
        		return $http.get('data/classified.json');

        }
		return {
		getClassifieds : getClassifieds
		}
		});

})();
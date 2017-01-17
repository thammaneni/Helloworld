angular
	.module("ngClassifieds",["ngMaterial"])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

	})
	.directive("helloWorld", function() {
		return {
			template: "<h1> Hello, World!! <br> I am Srinivas </h1>"
		}
	});
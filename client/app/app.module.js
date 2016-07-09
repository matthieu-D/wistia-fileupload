(function() {
	// app.module.js
	angular
		.module('app', ['app.home'])
		.config(config)

		function config($locationProvider){
	  	    $locationProvider.html5Mode(true);
		}
})();

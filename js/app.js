// Wrapping your Javascript in a clousure is a good habit!
( function() {
	var app = angular.module( 'gemStore', [] );
	
	//Noteci that controller is attached to ( inside )our app.
	app.controller( 'StoreController', function() {
		this.product = gem;
	});

	var gem = { 
		name: 'Dodecahedron',
		price: 2.95,
		description: '. . .',
	}

})();



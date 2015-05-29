(function() {

	var myapp = angular.module('storeApp', []);

	myapp.controller('storeController', function(){
		this.products = gem;
	});

	myapp.controller('panelController', function() {
		this.tab = 1;

		this.selecttab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checktab) {
			return this.tab == checktab;
		}


	});

	myapp.controller('SubmitReview', function(){
		this.review = {};
		this.addreview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		}
	});

	myapp.directive('productDetails', function(){
		// Runs during compile
		return {			
			restrict: 'E',			
			templateUrl: 'product-details.html'
			
		};
	});

	myapp.directive('productReview', function(){
		
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function() {
				this.review = {};
				this.addreview = function(product) {
					product.reviews.push(this.review);
					this.review = {};
				}
			},
			controllerAs: 'subrev',
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: 'product-review.html'
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			
		};
	});

	var gem = [
		{
			name : 'Dodecahedron Gem',
			price: 100,
			description: 'This is the best gem store in the country',
			canPurchase : true,
			soldOut: false,
			images: [{
				full : 'images/gem.jpg'
			}],
			reviews: [{
				stars: 5,
				body: "I love this gem!",
				author: "joe@example.org",
				createdOn: 1397490980837
			}, {
				stars: 1,
				body: "This gem sucks.",
				author: "tim@example.org",
				createdOn: 1397490980837
			}]
		},
		{
			name : 'Pentagon Gem',
			price: 200,
			description: 'This is the best gem store in the country, this is second best gem',
			canPurchase : true,
			soldOut: true,
			images: [{
				full : 'images/gem.jpg'
			}],
			reviews: [{
		        stars: 3,
		        body: "I think this gem was just OK, could honestly use more shine, IMO.",
		        author: "JimmyDean@example.org",
		        createdOn: 1397490980837
	      }, {
		        stars: 4,
		        body: "Any gem with 12 faces is for me!",
		        author: "gemsRock@example.org",
		        createdOn: 1397490980837
	      }]
		}
	]

})();

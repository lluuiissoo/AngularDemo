(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	app.controller('TabController', function(){
		//Tab initialization
		this.tab = 1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});
	
	app.controller('GalleryController', function(){
		this.current = 0;
		
		this.setCurrent = function(newGallery){
			this.current = newGallery || 0;
		};
	});
	
	app.controller("ReviewController", function(){
		this.review = {};
		
		this.addReview = function(product){
			this.review.createdOn =Date.now();
			product.reviews.push(this.review);
			this.review = {}; //Clear out the review, so the form will reset
		};
	});
	
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Description for Dodecahedron . . .',
			canPurchase: false,
			soldOut: false,
			images:[
				{
					full: 'images/dodecahedron-01-full.jpg',
					thumb: 'images/dodecahedron-01-thumb.jpg'
				},
				{
					full: 'images/dodecahedron-02-full.jpg',
					thumb: 'images/dodecahedron-02-thumb.jpg'
				},
				{
					full: 'images/dodecahedron-03-full.jpg',
					thumb: 'images/dodecahedron-03-thumb.jpg'
				},
				{
					full: 'images/dodecahedron-04-full.jpg',
					thumb: 'images/dodecahedron-04-thumb.jpg'
				}
			],
			reviews:[
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thoma.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Description for Pentagonal Gem . . .',
			canPurchase: true,
			soldOut: false,
			images:[
				{
					full: 'images/pentagonal-01-full.jpg',
					thumb: 'images/pentagonal-01-thumb.jpg'
				},
				{
					full: 'images/pentagonal-02-full.jpg',
					thumb: 'images/pentagonal-02-thumb.jpg'
				}
			]
		},
		{
			name: 'Another Gem',
			price: 5.95,
			description: 'Description for Another Gem . . .',
			canPurchase: true,
			soldOut: false,
			images:[]
		}
	];
})();
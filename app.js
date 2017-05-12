
var myApp =angular.module("myApp", ["ngRoute","ngAnimate"]);


//routing 
myApp.config(function($routeProvider) {
	$routeProvider
				.when("/books",{
					templateUrl:"book-list.html",
					controller: "bookListCntrl"
				})
				.when("/kart",{
					templateUrl:"kart-list.html",
					controller:"kartListCntrl"
					
				})
				.otherwise({
					redirectTo:"/books"
				});
				
});

//creating service for book-list view 
myApp.factory("bookService", function(){
var books=
[
{
	imgURL:"adultery.jpeg",
	name :"Adultery", 
	price:205,
	rating :4,
	binding: "paperback",
	publisher:"Random House India",
	releaseDate:"07-05-2017",
	Detail:"This book is based on movie that breaks all the records in indian film industry."
	
},
{
	imgURL:"geronimo.jpeg",
	name :"Geronimo", 
	price:205,
	rating :4,
	binding: "paperback",
	publisher:"Random House India",
	releaseDate:"07-05-2017",
	Detail:"This book is based on movie that breaks all the records in indian film industry."
	
},
{
	imgURL:"life-or-death.jpeg",
	name :"Life or Death", 
	price:205,
	rating :4,
	binding: "paperback",
	publisher:"Random House India",
	releaseDate:"07-05-2017",
	Detail:"Life is process toward death."
	
},
{
	imgURL:"playing.jpeg",
	name :"Life or Death", 
	price:205,
	rating :4,
	binding: "paperback",
	publisher:"Random House India",
	releaseDate:"07-05-2017",
	Detail:"Life is process toward death."
},
{
	imgURL:"the-fault.jpeg",
	name :"Life or Death", 
	price:205,
	rating :4,
	binding: "paperback",
	publisher:"Random House India",
	releaseDate:"07-05-2017",
	Detail:"Life is process toward death."
},
{
	imgURL:"wings-of-fire.jpeg",
	name :"Life or Death", 
	price:205,
	rating :4,
	binding: "paperback",
	publisher:"Random House India",
	releaseDate:"07-05-2017",
	Detail:"Life is process toward death."
}
];

return {
	getBooks:function(){
		return books;
	}
}

});


//creating service for kart-list view
myApp.factory("kartService",function(){
var kart=[];


return {
 	getKart:function(){
		 return kart;
 	},
	 buy:function(book){
		 console.log(book.name, + "book is bought by you.");
	 },
	 addToKart:function(book){
		 kart.push(book);
	 },
	
}

});


myApp.controller("HeaderCtrl", function($scope, $location) {
	$scope.appDetails = {
		title: "BooKart",
		tagline: "We have 1 million books for you"
	};
	
	$scope.nav={};
	$scope.nav.isActive=function(path){
		if(path == $location.path()){
			return true;
		}
		return false;
	};
} );

myApp.controller("kartListCntrl", function($scope, kartService){

$scope.kart=kartService.getKart();

$scope.buy=function(book){
 kartService.buy(book);
 

};

});

myApp.controller("bookListCntrl", function($scope, bookService, kartService){

$scope.books= bookService.getBooks();


$scope.addToKart=function(book){
	kartService.addToKart(book);

};

});

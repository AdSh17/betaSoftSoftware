'use strict'
 angular
 	.module("alphaApp")
 	.config(function($urlRouterProvider,$stateProvider,$locationProvider){
 		$stateProvider

 			.state('home',{
 				url :'/',
 				views :{
 					'@' :{
 							templateUrl :'layout.html',
 							controller :'homeCtrl'
 					   	  },
 					   	  'nav@home'   :  { templateUrl : 'views/navBar.html'},
 					   	  'body@home'  :  { templateUrl : 'views/home.html'},
 					   	  'footer@home':  { templateUrl : 'views/footer.html'},
		 				 },
 				})

  			.state('home.product',{
 				url :'product',
 				//templateUrl:'views/product.html',
 				views :{'body@home'  :  { templateUrl : 'views/product.html'},},
 				controller : 'productCtrl'
 			})

 			.state('home.services',{
 				url : 'services',
 				views :{'body@home'  :  { templateUrl : 'views/services.html'},},
 				//templateUrl : 'views/services.html',
 				controller : 'servCtrl'
 			})

 			.state('home.portfolio',{
 				url :'portfolio',
 				//templateUrl : 'views/portfolio.html',
 				views :{'body@home'  :  { templateUrl : 'views/portfolio.html'},},
 				controller :'portCtrl'
 			})

 			.state('home.about',{
 				url : 'about',
 				//templateUrl : 'views/about.html',
 				views :{'body@home'  :  { templateUrl : 'views/about.html'},},
 				controller :'aboutCtrl'
 			})

 			.state('home.contact',{
 				url : 'contact',
 			//	templateUrl : 'views/contact.html',
 				views :{'body@home'  :  { templateUrl : 'views/contact.html'},},
 				controller : 'contactCtrl'
 			});

 			$urlRouterProvider.otherwise('/');
 			$locationProvider.html5Mode(true);

 	});
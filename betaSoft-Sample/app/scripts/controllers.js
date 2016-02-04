'use strict'
	angular
		.module('alphaApp')
		.controller("homeCtrl",function($scope)
		{
	          $scope.myInterval = 5000;
			  $scope.noWrapSlides = false;
			  $scope.slides= [
								{ image :"images/image3.jpg" ,   text :"hi" ,   id :1}							
			];
		})

		.controller("productCtrl",function($scope){

		})

		.controller("servCtrl",function($scope){

		})

		.controller("portCtrl",function($scope){

		})

		.controller("aboutCtrl",function($scope){

		})

		.controller("contactCtrl",function($scope){
			console.log("hi");

		})

	;
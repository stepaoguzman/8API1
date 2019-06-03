var P = angular.module("P",[])

P.controller("pokemon",function($scope,$rootScope,$http){
	$scope.listadopokemon = [];
	for(var z=1;z<=100;z++)
	$http({
		method: "GET",
		url:"https://pokeapi.co/api/v2/pokemon/"+z

	}).then(function Datos(x) {
		console.log(x);
		$scope.listadopokemon.push(x);
	})
})
var name = 'propellercomms',
	accessToken = '1418975825038822',
	secretKey = 'c0383c010531c0f19a1ae48d13a00634';

var app = angular.module('facebook', [])
	.controller('facebookFeed', ['$http','$scope', function($http,$scope){
		$http.get('https://graph.facebook.com/' + name + '/feed?access_token=' + accessToken + '|' + secretKey)
		.success(function(data){
			$scope.items = data.data;
			$('.feed').fadeIn();
			$scope.isEmpty = function (obj) {
			    for (var i in obj) if (obj.hasOwnProperty(i)) return false;
			    return true;
			};
		}).error(function(){
			$scope.items = [{
				"message": "Opps! There was a problem loading the feed!",
			}];
			$('.feed').fadeIn();
		});
	}]);
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Events) {
  Events.query().$promise.then(function(response){
    $scope.eventslol = response;
  });
})
.controller('LoginCtrl', function($scope, $location, UserSession, $ionicPopup, $rootScope) {
$scope.data = {};

$scope.login = function() {
  var user_session = new UserSession({ user: $scope.data });
  user_session.$save(
    function(data){
      window.localStorage['userId'] = data.id;
      window.localStorage['userName'] = data.name;
      $location.path('/tab/dash');
    },
    function(err){
      var error = err["data"]["error"] || err.data.join('. ')
      var confirmPopup = $ionicPopup.alert({
        title: 'An error occured',
        template: error
      });
    }
  );
}
})
.controller('CreateCtrl', function($scope, $http) {
  // create a blank object to handle form data.
	$scope.party = {};
  // calling our submit function.
    $scope.submitForm = function() {
			console.log($scope.party.title);
		$scope.events = {
			"event": {"title": $scope.party.title, "description": $scope.party.description}
		};

		$http({
		  method  : 'POST',
		  url     : 'http://localhost:3000/events',
		  data    : $scope.events //forms user object
		 })
    };
})
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

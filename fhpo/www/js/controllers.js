angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

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
})

.controller('LoginCtrl', function($scope, $state, User) {

  $scope.login = function(user,pass) {
  	if (User.isUser(user, pass)) {
  		$state.go('classes');
  	}
  }
})

.controller('ClassCtrl', function($scope, Classes) {
	$scope.classes = Classes.all();
})

.controller('IdeaCtrl', function($scope, $stateParams, Classes) {
	$scope.class = Classes.get($stateParams.classId);
  
})

.controller('UpvoteCtrl', function($scope) {
  
})

.controller('JoinIdeaCtrl', function($scope) {
  
})

.controller('PostCtrl', function($scope) {
  
})

.controller('MilestoneCtrl', function($scope) {
  
})
;
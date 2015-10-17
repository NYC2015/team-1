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

  $scope.register = function() {
    $state.go('register');
  }
})

.controller('RegisterCtrl', function($scope, $state, User) {
  $scope.submit = function(username, password) {
    User.addUser(username, password);
    $state.go('login');
  }
})

.controller('ClassCtrl', function($scope, $state, Classes) {
	$scope.classes = Classes.all();

  $scope.goToAddClass = function() {
    $state.go('addclass');
  }
})

.controller('AddClassCtrl', function($scope, $state, Classes) {
  $scope.addClass = function(name, password, subject) {
    Classes.addClass(name, password, subject);
    $state.go('classes');
  }
})

.controller('IdeaCtrl', function($scope, $state, $stateParams, User, Classes) {
	$scope.id = $stateParams.classId;
	$scope.class = Classes.get($stateParams.classId);
	$scope.ideas = $scope.class.ideas;

	$scope.like = function(idea) {
		idea.likes = idea.likes + 1;
		return false;
	}

	$scope.goIdea = function(num) {
		$state.go('idea-detail', {classId: $scope.id, ideaId: num});
	}

	$scope.join = function(idea) {
		for (var i = 0; i < idea.members.length; i++) {
			if (User.getUser().uname == idea.members[i]) {
				return false;
			}
		}
		idea.members.push(User.currentUser);
		return false;
	}

  $scope.addIdea = function() {
    for (var i = 0; i < $scope.class.users.length; i++) {
      if (User.getUser().uname === $scope.class.users[i]) {
        $state.go('addidea', {classId: $stateParams.classId});
        break;
      }
    }
    for (var i = 0; i < $scope.class.admins.length; i++) {
      if (User.getUser().uname === $scope.class.admins[i]) {
        $state.go('addidea', {classId: $stateParams.classId});
        break;
      }
    }
  }
})

.controller('AddIdeaCtrl', function($scope, $state, $stateParams, User, Classes) {
  $scope.addIdea = function(name, description) {
    Classes.addIdea(User.getUser().uname, $stateParams.classId, name, description);
    $state.go('class-detail', {classId: $stateParams.classId});
  }
})

.controller('IdeaDetailCtrl', function($scope, $state, Classes, $stateParams) {
	console.log($stateParams.classId);
	console.log($stateParams.ideaId);
	$scope.class = Classes.get($stateParams.classId);
	$scope.idea = Classes.getIdea($stateParams.classId, $stateParams.ideaId);

	$scope.join = function(idea) {
		for (var i = 0; i < idea.members.length; i++) {
			if (User.getUser().uname == idea.members[i]) {
				return false;
			}
		}
		idea.members.push(User.currentUser);
		return false;
	}

	$scope.like = function(idea) {
		idea.likes = idea.likes + 1;
		return false;
	}
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
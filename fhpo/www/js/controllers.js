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

.controller('AddClassCtrl', function($scope, $state, User, Classes) {
  $scope.username = User.getUser().uname;
  $scope.addClass = function(name, password, subject) {
    Classes.addClass($scope.username, name, password, subject);
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

.controller('MilestoneCtrl', function($scope, $state, $stateParams, Classes){
  $scope.idea = Classes.getIdea($stateParams.classId, $stateParams.ideaId);

  $scope.goToAddMilestone = function() {
    if (User.getUser().uname === $scope.idea.owner) {
      $state.go('addMilestone');
    }
  }
})

.controller('AddMilestoneCtrl', function($scope, $state, $stateParams, Classes, User){
  console.log('Stuff');
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

	$scope.milestones = function() {
		$state.go('milestonelist', {classId: $stateParams.classId, ideaId: $stateParams.ideaId});
	}

	$scope.posts = function() {
		$state.go('posts', {classId: $stateParams.classId, ideaId: $stateParams.ideaId});
	}
})

.controller('UpvoteCtrl', function($scope) {
  
})

.controller('JoinIdeaCtrl', function($scope) {
  
})

.controller('PostsCtrl', function($scope, $state, $stateParams, User, Classes) {
	$scope.class = Classes.get($stateParams.classId);
	$scope.idea = Classes.getIdea($stateParams.classId, $stateParams.ideaId);
	$scope.posts = $scope.idea.posts;
	$scope.curpost = $scope.posts[0];
	$scope.postId = $scope.curpost.id;
	$scope.newmsg = "";

	$scope.submitPost = function(msg) {
		$scope.curpost.messages.push({name: User.getUser().uname, msg: msg});
	}
})

.controller('MilestoneCtrl', function($scope) {
  
})
;

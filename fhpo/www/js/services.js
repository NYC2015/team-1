angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('User', function() {
  var users = [{
    uname: 'regular1',
    pass: 'regular1',
    type: 'regular'
  }, {
    uname: 'admin1',
    pass: 'admin1',
    type: 'admin'
  }, {
    uname: 'admin2',
    pass: 'admin2',
    type: 'admin'
  }, {
    uname: 'regular2',
    pass: 'regular2',
    type: 'regular'
  }];

  var currentUser;

  return {
    isUser: function(name,pass) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].uname == name && users[i].pass == pass) {
          currentUser = users[i];
          return true
        }
      }
      return false;
    },
    isAdmin: function() {
      return currentUser.type == 'admin';
    }
  };
})

.factory('Classes', function() {
  var classes = [{
    id : 139,
    name : 'JP Morgan Code for Good',
    password : 'password',
    subject : 'Program for Social Good',
    admins : ['admin1'],
    users : []
  }, {
    id : 140,
    name : 'Kennedy HS Job Class 1',
    password : 'kennedy1',
    subject : 'Best Gifts for Christmas',
    admins : ['admin1'],
    users : []
  }, {
    id : 141,
    name : 'Kennedy HS Job Class 2',
    password : 'kennedy2',
    subject : 'Costumes for Halloween',
    admins : ['admin2'],
    users : []
  }];

  return {
    all: function() {
      return classes;
    },
    remove: function(cl) {
      classes.splice(classes.indexOf(cl), 1);
    },
    get: function(classId) {
      for (var i = 0; i < classes.length; i++) {
        if (classes[i].id === parseInt(classId)) {
          return classes[i];
        }
      }
      return null;
    }
  };
});

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
    pass: 'regular1'
  }, {
    uname: 'admin1',
    pass: 'admin1'
  }, {
    uname: 'admin2',
    pass: 'admin2'
  }, {
    uname: 'regular2',
    pass: 'regular2'
  }];

  var currentUser = {};

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
    },
    getUser: function() {
      return currentUser;
    },
    addUser: function(username, password) {
      users.push({
        uname: username,
        pass: password
      });
    }
  };
})

.factory('Classes', function() {
  var id = 142;
  var ideaid = 7;
  var classes = [{
    id : 139,
    name : 'JP Morgan Code for Good',
    password : 'password',
    subject : 'Program for Social Good',
    admins : ['admin1'],
    users : ['regular1', 'regular2'],
    ideas : [{
      id : 1,
      name : 'Job Class Phone App',
      description : 'An app in which students can submit ideas.',
      owner : 'regular1',
      likes : 1,
      members : ['regular1']
    }, {
      id : 2,
      name : 'Feed a Child App',
      description : 'An app that helps deliver food to starving people.',
      owner : 'regular2',
      likes : 2,
      members : ['regular2']
    }, {
      id : 3,
      name : 'Rock the Earth App',
      description : 'An app that allows students to help preserve the earth.',
      owner : 'regular1',
      likes : 1,
      members : ['regular1', 'regular2']
    }, {
      id : 4,
      name : 'Keep a Child Alive App',
      description : 'An app that helps connect those with AIDS.',
      owner : 'regular2',
      likes : 2,
      members : ['regular2']
    }]
  }, {
    id : 140,
    name : 'Kennedy HS Job Class 1',
    password : 'kennedy1',
    subject : 'Best Gifts for Christmas',
    admins : ['admin1'],
    users : ['regular1'],
    ideas : [{
      id : 5,
      name : 'Pepperoni Pizza',
      description : 'Delicious AND Unhealthy!',
      owner : 'admin1',
      likes : 15,
      members : ['admin1', 'regular1']
    }, {
      id : 6,
      name : 'Bugatti Veyron 16.4',
      description : 'Gotta go fast.',
      owner : 'regular1',
      likes : 4,
      members : ['regular1']
    }]
  }, {
    id : 141,
    name : 'Kennedy HS Job Class 2',
    password : 'kennedy2',
    subject : 'Costumes for Halloween',
    admins : ['admin2'],
    users : [],
    ideas: []
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
    },
    addClass: function(username, password, subject) {
      classes.push(
        {
          id: id,
          name: username,
          password: password,
          subject: subject,
          admins: [],
          users: [],
          ideas: []
        }
      );
      id++;
    },

    addIdea: function(username, classid, ideaname, description) {
      for (var i = 0; i < classes.length; i++) {
        if (classes[i].id === parseInt(classid)) {
          classes[i].ideas.push({
            id: ideaid,
            name: ideaname,
            description: description,
            owner: username,
            likes: 1,
            members: [username]
          });
          ideaid++;
          break;
        }
      }
    },

    getIdea: function(classId, ideaId) {
      for (var i = 0; i < classes.length; i++) {
        if (classes[i].id === parseInt(classId)) {
          for (var j = 0; i < classes[i].ideas.length; j++) {
            if (classes[i].ideas[j].id === parseInt(ideaId)) {
              return classes[i].ideas[j];
            }
          }
        }
      }
      return false;
    }
  };
});

//build sidebar with the user template by appending data from user.js
$('.sideBar').append(_.template($('#user-template').text())(user));
//build sidebar with the org templage by appending data from org.js
$('.sideBar').append(_.template($('#org-template').text())(org));

//build repo section by appending data from repos.js
repos.forEach(function (repo) {
$('.content-container').append(_.template($('#repo-list-template').text())(repo));
});
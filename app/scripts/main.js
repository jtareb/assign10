// Grab the left quarter container class, append user data into the user-template ID, do this for the "user" object.
$('.sideBar').append(_.template($('#user-template').text())(user));

$('.sideBar').append(_.template($('#org-template').text())(org));


repos.forEach(function (repo) {
$('.content-container').append(_.template($('#repo-list-template').text())(repo));
});
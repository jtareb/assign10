// Grab the left quarter container class, append user data into the user-template ID, do this for the "user" object.
$('.sideBar').append(_.template($('#user-template').text())(userAPI));

$('.sideBar').append(_.template($('#org-template').text())(orgAPI));


repoAPI.forEach(function (repo) {
$('.content-container').append(_.template($('#repo-list-template').text())(repoAPI));
});
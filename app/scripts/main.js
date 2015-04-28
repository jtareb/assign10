
repos.forEach( function (item) {
    var name = item.name;
    var description = item.description;
    var updated_at = item.updated_at;
    var languag = item.language;
    var stargazers = item.stargazers_count;
    var forkcount = item.forks_count;

    var listDiv = $('<div></div>');
    $(listDiv).addClass('icons');
    $(listDiv).append($('<a href="#"><span></span></a>').text(name).prop('id', 'nameSpan'));
    $(listDiv).append($('<span></span>').text(description).prop('id', 'descriptionSpan'));
    $(listDiv).append($('<span></span>').text(updated_at).prop('id', 'updated_atSpan'));
    $(listDiv).append($('<span class="octicon octicon-git-branch"></span>').text(forkscount).prop('id', 'forkscount'));
    $(listDiv).append($('<span class="octicon octicon-star"></span>').text(stargazers).prop('id', 'stargazers'));
    $(listDiv).append($('<span></span>').text(language).prop('id', 'language'));



    $('.reposList').append(listDiv);

});
 










_.each(repo_items,function(p) {
		


	var desc = p.description;

	//console.log (desc);
	console.log(p);





 // Grab the template string.
    var templateString = $('#item-user-template').text();

    // Turn it into a template function.
    var renderTemplate = _.template(templateString);

    // Pass in an object. Return value is a string
    // with the bee stings replaced with object's properties
    var freshHTML = renderTemplate(p);

    // Inject the fresh html into the page.
    $('.contentbox').append(freshHTML);





});
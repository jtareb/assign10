;(function() {
 


 _.each(user_items, function() {

       

    //var pic = user_items.avatar_url;
   
    var templateString = $('#item-user-template').text();

    var renderTemplate = _.template(templateString);
   
    var freshHTML = renderTemplate(user_items.avatar_url);
   
     $('.sidebar').append(freshHTML);




_.each(repo_items,function(p) {
		

    var classwork = p.name;
	var desc = p.description;

    var templateString = $('#item-user-template').text();

    
    var renderTemplate = _.template(templateString);

    var freshHTML = renderTemplate(p);
   
    $('.contentbox').append(freshHTML);

    });

});



}());




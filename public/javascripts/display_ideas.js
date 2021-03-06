$(document).ready(function() {

	//Generates the list data for the table rows
	const rootRef = firebase.database().ref();
	const ideaRef = rootRef.child('ideas');

	var ideas;

	ideaRef.on('value', (snap) => {
		ideas = snap.val();

		var keys = Object.keys(ideas);

		console.log(keys);

		for (var i = keys.length - 1; i >=0; i--) {
			var k = keys[i];

		    var $row = $('<div class="row">' +
				'<div class="col s1">' +
					'<td">' + ideas[k].Upvotes  + '<i class="material-icons smaller-icon">thumb_up</i>' + '</td>' +
				'</div>' +
				'<div class="col s1">' +
					'<td">' + ideas[k].Downvotes  +  '<i class="material-icons smaller-icon">thumb_down</i>' + '</td>' + 
				'</div>' +
				'<div class="col s1">' +
					'<td">' + Object.keys(ideas[k].Comments).length  +  '<i class="material-icons smaller-icon">chat_bubble</i>' + '</td>' + 
				'</div>' +

				'<div class="col s6">' +
					'<td><div><a href="/user/question/' + ideas[k].Title + '"' + '>' + ideas[k].Title + '</a></div>' + '<div id="view">' + markdown.toHTML(ideas[k].Description) + '</div>' + '</td>' +
				'</div>' +
				'<div class="col s3">' + 
					'<td><div>' + ideas[k].Time + '</div>' + ideas[k].User_Id + '</td>' +
				'</div>' +
			'</div>');
			
			$('#idea-list > tbody:last').append($row);
		}
	});

});
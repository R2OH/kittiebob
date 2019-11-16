$(document).ready(function(){
		$('.commentSection').click(function(){
			$(this).children().toggle();
		});

//Toggles image sources and adds 1 to adjacent counter
		$('.responseButton').click(function () {

			var option = $(this).attr('src');
			var applause = 'src/icons/icons8-applause-50.png';
			var applauseFilled = 'src/icons/icons8-applause-filled-50.png';
			var comments = 'src/icons/icons8-comments-50.png';
			var commentsFilled = 'src/icons/icons8-comments-filled-50.png';
			var share = 'src/icons/icons8-share-50.png';



			if ( option == applause ) {
				$(this).attr('src', applauseFilled);
				$(this).prev().text(function(i, txt) {
				return +txt + 1;
				});

			}

			if ( option == applauseFilled ) {
				$(this).attr('src', applause);
				$(this).prev().text(function(i, txt) {
				return +txt - 1;
				});
			}

			if ( option == comments ) {
				$(this).attr('src', commentsFilled);
				$(this).prev().text(function(i, txt) {
				return +txt + 1;
				});
			}

			if ( option == commentsFilled ) {
				$(this).attr('src', comments);				
				$(this).prev().text(function(i, txt) {
				return +txt - 1;
				});
			}


			if ( option == share ) {
				$(this).prev().text(function(i, txt) {
				return +txt + 1;
				});
			}
		});
	});
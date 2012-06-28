$(function() {
	//var $load_image = '<img class="loader" src="{{ MEDIA_URL }}img/loader.gif" alt="Loading...">';

	$('*[data-ajax]').click(function(e) {
		e.preventDefault();
		var $update = $(this).data("ajax").update;
		var $place = $(this).data("ajax").place;
		var $url = $(this).attr("href");
		//$($update).html($load_image);
		$($update).load($url + " " + $place, function(response, status, xhr) {
			if (status === "error") {
				var msg = "Sorry but there was an error: ";
				$($update).html(msg + xhr.status + " " + xhr.statusText);
			}
		});
		
		if($url!=window.location){
			window.history.pushState({path:$url},'',$url);	
		}

	});
	
});

$(window).bind('popstate', function() {
	
	$('#content').load(location.href + " " + "#content", function(response, status, xhr) {
			if (status === "error") {
				var msg = "Sorry but there was an error: ";
				$($update).html(msg + xhr.status + " " + xhr.statusText);
			}
		});
});

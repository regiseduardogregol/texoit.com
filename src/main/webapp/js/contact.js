$("#phone").mask("(99) 99999-9999");
$("#phone").on("blur", function() {
    var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );
    
    if( last.length == 3 ) {
        var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
        var lastfour = move + last;
        
        var first = $(this).val().substr( 0, 9 );
        
        $(this).val( first + '-' + lastfour );
    }
});

$('#contactForm').submit(function(event) {
	$('#contactSubmit').prop("disabled", true);
	$('#contactError').fadeOut(250);

	var form = document.forms[0];
	var name = form.elements["name"].value;
	var email = form.elements["email"].value;
	var phone = form.elements["phone"].value;
	var content = form.elements["messageContent"].value;
	
	var emailMessage = {
		"name": name,
		"email": email,
		"phone": phone,
		"content": content
	};

	$.ajax({
		type: "POST",
		url: "rest/protected/t3x01trul3z/emails",
		data: JSON.stringify(emailMessage),
		contentType: "application/json",
		success: function( data, status, errorThrown ) {
			responseOK(data, status, errorThrown);
		},
		error: function( data, status, errorThrown ) {
			responseError(data, status, errorThrown);
		}	
	});

	event.preventDefault();
});

function responseOK(data, status, errorThrown) {
	$('#contactForm').fadeOut(250, function(){
		$('#contactSuccess').fadeIn(250);
	});
	$('#contactSubmit').prop("disabled", false);
}

function responseError(data, status, errorThrown) {
	$('#contactError').fadeIn(500);
	$('#contactSubmit').prop("disabled", false);
}

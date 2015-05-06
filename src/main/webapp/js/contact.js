$('contactForm').submit(function(event) {
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
	})
	/*
	$.post( "rest/protected/t3x01trul3z/emails", JSON.stringify(emailMessage))
		.done(function( data ) {
			alert( "DONE: " + JSON.stringify(data) );
		})
		.fail(function( data ) {
			alert( "ERROR: " + JSON.stringify(data) );
		});
	*/
	//alert(JSON.stringify(emailMessage))

	event.preventDefault();
}

function responseOK(data, status, errorThrown) {
	alert( "DONE: " + JSON.stringify(data) );
}

function responseError(data, status, errorThrown) {
	alert( "ERROR: " + JSON.stringify(data) );
}

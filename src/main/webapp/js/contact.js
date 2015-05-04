function submitEmail() {
	var form = document.forms[0];
	var name = form.elements["name"].value;
	var email = form.elements["email"].value;
	var phone = form.elements["phone"].value;
	var messageContent = 
		"Nome: " + name +
		"\nE-Mail: " + email +
		"\nTelefone: " + phone +
		"\n________\nConteúdo da mensagem:\n\n" +
		form.elements["messageContent"].value;
	
	var requestData = {
		"key": "KEY GOES HERE",
		"message": {
			"text": messageContent,
			"subject": "Contato via site",
			"from_email": email,
			"from_name": name,
			"to": [
				{
					"email": "andre.cardoso@texoit.com"
				}
			],
			"important": false,
			"merge": true,
			"merge_language": "mailchimp",
			"tags": [
				"contato-site"
			]
		},
		"async": false
	};

	/*
	$.post( "https://mandrillapp.com/api/1.0/messages/send.json", requestData)
		.done(function( data ) {
			alert( "DONE: " + JSON.stringify(data) );
		})
		.fail(function( data ) {
			alert( "ERROR: " + JSON.stringify(data) );
		});
	*/
	alert(JSON.stringify(requestData))

	return false;
}

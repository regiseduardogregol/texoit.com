package com.texoit.website.rest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.microtripit.mandrillapp.lutung.MandrillApi;
import com.microtripit.mandrillapp.lutung.model.MandrillApiError;
import com.microtripit.mandrillapp.lutung.view.MandrillMessage;
import com.microtripit.mandrillapp.lutung.view.MandrillMessage.Recipient;

@Path("/emails")
@RequestScoped
public class EmailService {

	private static String MANDRILL_API_KEY = "UKct8GU_xMpaKdHEGslCYg";

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response sendEmail(final EmailMessage email) throws IOException {
		try {
			final MandrillApi api = new MandrillApi(MANDRILL_API_KEY);
			final MandrillMessage message = new MandrillMessage();
			message.setText(email.getAssembledMessage());
			message.setSubject("Contato via site");
			message.setFromEmail(email.getEmail());
			message.setFromName(email.getName());
			message.setImportant(false);
			message.setMerge(true);
			message.setTags("contato-site");

			final Recipient recipient = new Recipient();
			recipient.setName("Contato");
			recipient.setEmail("contato@texoit.com");
			final List<MandrillMessage.Recipient> recipientList = new ArrayList<>();
			recipientList.add(recipient);
			message.setTo(recipientList);

			api.messages().send(message, false);

			return Response.ok().build();
		} catch (final MandrillApiError e) {
			return Response.status(500).build();
		}

	}

}
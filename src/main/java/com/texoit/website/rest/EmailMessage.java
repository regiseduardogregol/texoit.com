package com.texoit.website.rest;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmailMessage {
	private String name;
	private String email;
	private String phone;
	private String content;

	public String getAssembledMessage() {
		final StringBuilder message = new StringBuilder();
		message.append("Nome: ");
		message.append(name);
		message.append("\nE-Mail: ");
		message.append(email);
		message.append("\nTelefone: ");
		message.append(phone);
		message.append("\n________\nConteúdo da mensagem:\n\n");
		message.append(content);

		return message.toString();
	}
}

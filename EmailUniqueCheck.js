handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);
	var data = response["Data"];
	var emails = data["RegisteredEmails"];
	
	var playerEmail = args['email'];
	log.debug("emails: " + JSON.stringify(emails));
	var emailsCollision = JSON.stringify(emails).includes(playerEmail);
	
	emails.replace("}",	","+playerEmail+"}");
	request = {
		key: "RegisteredEmails",
		value: emails
	};	
	response = server.SetTitleData(request);
	log.debug("set: " + JSON.stringify(response));
	
	request = ["RegisteredEmails"];
	response = server.GetTitleData(request);
	log.debug("get: " + JSON.stringify(response));

	
    return emailsCollision;
};
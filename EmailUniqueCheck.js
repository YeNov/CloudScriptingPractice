handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);
	var data = response["Data"];
	var emails = data["RegisteredEmails"];
	log.debug("emails: " + JSON.stringify(emails));
	
	var emailsStr = JSON.stringify(emails);
	var playerEmail = args['email'];	
	var emailsCollision = emailsStr.includes(playerEmail);
	return {emails};
	emailsStr['emails'].push(playerEmail);
	log.debug("push: " + JSON.stringify(emails));

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
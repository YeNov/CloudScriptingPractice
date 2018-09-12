handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);
	var data = response["Data"];
	var emails = data["RegisteredEmails"];
	
	var playerEmail = args['email'];
	log.debug("emails: " + JSON.stringify(emails));
	log.debug("contains: " + JSON.stringify(emails).includes(playerEmail));
	
    return {responseContent: emails};
};
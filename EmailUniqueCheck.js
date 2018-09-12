handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);
	log.debug("args: " + args['email']);
	var data = response["Data"];
	var emails = data["RegisteredEmails"];
    return {responseContent: emails};
};
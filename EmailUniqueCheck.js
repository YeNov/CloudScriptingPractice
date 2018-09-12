handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);
	var data = response["Data"];
	var emails = data["RegisteredEmails"];
	var emailsStr = JSON.stringify(emails);
	log.debug("emails: " + emailsStr);
	
	var playerEmail = args['email'];
	var emailsCollision = emailsStr.includes(playerEmail);
	
	var obj = JSON.parse(emails);
	obj.push(playerEmail);
	emails = JSON.stringify(obj);
	log.debug("push: " + emails);

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
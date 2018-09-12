handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);
	var emails = response['Data'];
	emails = emails['RegisteredEmails'];
    return emails;
}
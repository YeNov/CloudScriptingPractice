handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);
	var emails = response['Data']['RegisteredEmails'];
    return emails;
}
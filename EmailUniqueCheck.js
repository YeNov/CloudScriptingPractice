handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);
	var data = response['Data'];
	var emails = data['RegisteredEmails'];
    return emails;
}
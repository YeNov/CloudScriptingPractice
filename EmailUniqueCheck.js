handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);
	var data = JSON.Parse(response);
	var emails = data.emails;
    return emails;
}
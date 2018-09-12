handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);
	var data = JSON.parse(response);
	var emails = data.RegisteredEmails;
    return JSON.stringify(data);
}
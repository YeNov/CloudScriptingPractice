handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);//жсон
	log.debug("response: " + JSON.stringify(response) + " of type: " + typeof response);
	var data = response["Data"];//здесь получаю нормальную строку
	log.debug("data: " + JSON.stringify(data) + " of type: " + typeof response);
	var emails = data["RegisteredEmails"];//хочу получить массив по ключу, правильно все написал, но возвращает ничего
	log.debug("emails: " + JSON.stringify(emails) + " of type: " + typeof response);
    return {responseContent: emails};
};
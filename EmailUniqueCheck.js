handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);//жсон
	log.debug("response: " + response + " of type: " + typeof response);
	var data = response["Data"];//здесь получаю нормальную строку
	log.debug("data: " + data + " of type: " + typeof response);
	var emails = data["RegisteredEmails"];//хочу получить массив по ключу, правильно все написал, но возвращает ничего
    return emails;
}
handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);//жсон
	log.debug("args: " + JSON.stringify(args));
	var data = response["Data"];//здесь получаю нормальную строку
	var emails = data["RegisteredEmails"];//хочу получить массив по ключу, правильно все написал, но возвращает ничего
    return {responseContent: emails};
};
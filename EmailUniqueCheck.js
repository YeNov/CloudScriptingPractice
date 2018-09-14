handlers.checkEmail = function(args, context) 
{
	var request = ["RegisteredEmails"];
	var response = server.GetTitleData(request);
	var data = response["Data"];
	var emails = data["RegisteredEmails"];
	var emailsStr = JSON.stringify(emails);
	//log.debug("emails: " + emailsStr);
	
	var playerEmail = args['email'];
	var emailsCollision = (JSON.parse(emails)).some(item => item === playerEmail);
	if(!emailsCollision)
	{
		var obj = JSON.parse(emails);
		obj.push(playerEmail);
		emails = JSON.stringify(obj);
		//log.debug("push: " + emails);

		request = {
			key: "RegisteredEmails",
			value: emails
		};	
		response = server.SetTitleData(request);
		//log.debug("set: " + JSON.stringify(response));
		
		request = ["RegisteredEmails"];
		response = server.GetTitleData(request);
		//log.debug("get: " + JSON.stringify(response));
	}
	
    return {emailsCollision};
};

handlers.AddEvent = function(args, context) 
{
	/*Event model:
	Name: string
	From: string (year, day, month)
	To: string (year, day, month)
	PrizesArr: Prize[]
	SkinLevelRequirementsMap: Dictionary<string, int>
	bIsActive: boolean
	*/
	
	//Events are stored as array in title data under key "Events"
	
	var getEventsRequest = ["Events"];
	var getEventsResponse = server.GetTitleData(getEventsRequest);
	log.debug("Get events: " + JSON.stringify(getEventsResponse));
	
	var obj = JSON.parse(getEventsResponse["Data"]);
	obj.push(args["Event"]);
	var setEventsValue = JSON.stringify(obj);
	log.debug("push: " + setEventsValue);
	
	var setEventsRequest =
	{
		key: "Events",
		value: setEventsValue
	};	
	server.SetTitleData(setEventsRequest);
	
	return;
}
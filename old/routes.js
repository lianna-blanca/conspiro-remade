
	//If user doesn't input a noun use one from our JSON
	if (thing.noun === ""){
		if(Math.random() >= 0.5){
			req.body.noun = conspiracyData.nouns[randomNoun]
			thing = req.body
		}
		else{
			thing.conspiracy = conspiracyData.stringsForObjects[randomStringsForObjects]
			thing.object = conspiracyData.grammaticalObjects[randomGrammaticalObjects]
		}
	}

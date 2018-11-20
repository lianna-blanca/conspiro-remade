
	//Move request body into noun
	let conspiracyPOST = req.body;

	//Set out conspiracy using the random from above
	conspiracyPOST.conspiracy = conspiracyData.stringsForNouns[randomStringsForNouns]
	conspiracyPOST.intro = conspiracyData.intro[randomIntro]


	//If user doesn't input a noun use one from our JSON
	if (conspiracyPOST.noun === ""){
		if(Math.random() >= 0.5){
			req.body.noun = conspiracyData.nouns[randomNoun]
			conspiracyPOST = req.body
		}
		else{
			conspiracyPOST.conspiracy = conspiracyData.stringsForObjects[randomStringsForObjects]
			conspiracyPOST.object = conspiracyData.grammaticalObjects[randomGrammaticalObjects]
		}
	}

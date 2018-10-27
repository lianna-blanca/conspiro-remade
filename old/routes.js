let conspiracyData = require("./conspiracy.json");

server.post("/", function(req, res) {
	//Pull random noun from our list
	let randomNoun = Math.floor((Math.random() * (conspiracyData.nouns.length - 1)));
	let randomStringsForNouns = Math.floor((Math.random() * (conspiracyData.stringsForNouns.length - 1)));
	let randomIntro = Math.floor((Math.random() * (conspiracyData.intro.length - 1)));
	let randomStringsForObjects = Math.floor((Math.random() * (conspiracyData.stringsForObjects.length - 1)));
	let randomGrammaticalObjects = Math.floor((Math.random() * (conspiracyData.grammaticalObjects.length - 1)));

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

	res.render("conspiracy", conspiracyPOST)
})


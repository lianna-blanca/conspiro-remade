import React from "react"
import Header from "./Header"
import Form from "./Form"
import Result from "./Result"
import Footer from "./Footer"
let conspiracyData = require("./theoryText.json");

class App extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    formName: ""
    }

  this.buildTheory = this.buildTheory.bind(this)
  this.randomThing = this.randomThing.bind(this)

}

callbackFormText = (dataFromForm) => {
  console.log("In App, callbackFormText is:", dataFromForm)
  if (dataFromForm !== undefined) {
    this.setState({formName: dataFromForm})
  }
}

randomThing(thisArray) {
	return Math.floor((Math.random() * (thisArray.length - 1)))
}

buildTheory() {

	//Pull random words/phrases from arrays
	let randomNoun = this.randomThing(conspiracyData.nouns)
  let randomStringsForNouns = this.randomThing(conspiracyData.stringsForNouns)
	let randomIntro = this.randomThing(conspiracyData.intro)
	let randomStringsForObjects = this.randomThing(conspiracyData.stringsForObjects)
	let randomGrammaticalObjects = this.randomThing(conspiracyData.grammaticalObjects)

}



render() {
this.buildTheory()
let theory = this.state.formName // change to a function that will assemble sentence

  return (
    <div>
      <Header />
      <Result resultText={theory}/>
      <Form getForm={this.callbackFormText}/>
      <Footer />
    </div>
  )
}
}

export default App


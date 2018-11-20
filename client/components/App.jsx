import React from "react"
import Header from "./Header"
import Form from "./Form"
import Result from "./Result"
import Footer from "./Footer"
let data = require("./theoryText.json");

class App extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    formName: ""
    }

  this.buildTheory = this.buildTheory.bind(this)
  this.randomy = this.randomy.bind(this)

}

callbackFormText = (dataFromForm) => {
  console.log("In App, callbackFormText is:", dataFromForm)
  if (dataFromForm !== undefined) {
    this.setState({formName: dataFromForm})
  }
}

randomy(arr) {
  return arr[Math.floor((Math.random() * (arr.length - 1)))]
}

buildTheory() {
  let submittedName = this.state.formName

	let intro = this.randomy(data.intros)
	let nounPhrase = this.randomy(data.nounPhrases)
	let verbPhrase = this.randomy(data.verbPhrases)
	let transitivePhrase = this.randomy(data.transitivePhrases)
	let obj = this.randomy(data.objects)
	let sentence = this.randomy(data.sentences)

// console.log(intro)
// console.log(nounPhrase)
// console.log(verbPhrase)
// console.log(transitivePhrase)
// console.log(obj)
// console.log(sentence)

if (submittedName) console.log("Name entered:", submittedName)
else console.log("No name entered")


return "Hello"
}



render() {
this.buildTheory()
let theory = this.buildTheory() //this.state.formName // change to a function that will assemble sentence

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


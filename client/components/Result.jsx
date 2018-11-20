import React from "react"
let data = require("./theoryText.json");

class Result extends React.Component {
constructor(props) {
  super(props)

  this.logDataFromApp = this.logDataFromApp.bind(this)
  this.buildTheory = this.buildTheory.bind(this)
  this.randomy = this.randomy.bind(this)

}

logDataFromApp() { // temp function for build
  console.log("text passed in", this.props.resultText)
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

let theory = sentence

if (!submittedName) {
console.log("No name entered")
}
else console.log("Name entered:", submittedName)


// return theory
}


render() {
this.logDataFromApp()
// this.buildTheory()
// let theory = this.buildTheory() //this.state.formName // change to a function that will assemble sentence

return (
  <div>
    <p id="the-conspiracy">
      {this.props.resultText}
    </p>

  </div>
)
}
}
export default Result
import React from "react"
let data = require("./theoryText.json");

class Result extends React.Component {
constructor(props) {
  super(props)

  this.buildTheory = this.buildTheory.bind(this)
  this.randomy = this.randomy.bind(this)

}

buildTheory() {
  let submittedName = this.props.resultText
	let nounPhrase = this.randomy(data.nounPhrases)
	let verbPhrase = this.randomy(data.verbPhrases)
	let transitivePhrase = this.randomy(data.transitivePhrases)
	let obj = this.randomy(data.objects)
	let sentence = this.randomy(data.sentences)

let theory = ""

if (submittedName) {
  theory = submittedName + verbPhrase
}
else {
  let num = Math.random()
  if (num >= 0.3) {
    theory = nounPhrase + verbPhrase
  }
  else if (num < 0.3 && num <= 0.7) {
    theory = transitivePhrase + obj
  }
  else theory = sentence
}

return theory
}

randomy(arr) {
  return arr[Math.floor((Math.random() * (arr.length - 1)))]
}


render() {
console.log("text passed in:", this.props.resultText)
let result = this.buildTheory()

return (
  <div>
    <p id="intro">
      {this.randomy(data.intros)}
    </p>
    <p id="the-conspiracy">
      {result}
    </p>

  </div>
)
}
}
export default Result
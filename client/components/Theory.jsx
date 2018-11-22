import React from "react"
let data = require("./theoryText.json");

class Form extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    submittedName: ""
    }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.buildTheory = this.buildTheory.bind(this)
  this.randomy = this.randomy.bind(this)
}

// ----------------- Form functions ----------------- 

handleChange(ev) {
  this.setState({submittedName: ev.target.value})
}

clearInput() {
  this.setState({submittedName: ""})
}

handleSubmit(ev) {
  ev.preventDefault();
  this.buildTheory(this.state.submittedName)
}


// ----------------- Conspiracy functions ----------------- 

randomy(arr) {
  return arr[Math.floor((Math.random() * (arr.length - 1)))]
}


buildTheory() {
  let intro = this.randomy(data.intros)
  let submittedName = this.state.submittedName
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

document.getElementById("intro").innerHTML = intro
document.getElementById("the-conspiracy").innerHTML = theory
}


render() {

return (
<div>
  <p id="intro"></p>
  <p id="the-conspiracy"></p>
  <form onSubmit={this.handleSubmit}>
    <div className="form-group">
      <button type="submit" value="submit" className="btn btn-danger btn-lg">Generate Conspiracy Theory</button>
    </div>
    <div className="form-group">
      <label className="control-label">
        <h4>Enter your name for a customised conspiracy theory:</h4>
        <input type="text" value={this.state.submittedName} onChange={this.handleChange} id="name" name="noun" /><button type="reset" onClick={() => {this.clearInput()}}>Clear</button>
      </label>
    </div>
  </form>
</div>
)
}
}

export default Form


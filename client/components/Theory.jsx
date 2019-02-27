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


buildTheory(submittedName) {
  let intro = this.randomy(data.intros)
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
<main>
  <form onSubmit={this.handleSubmit}>
    <div className="form-group">
      <button type="submit" value="submit" className="btn btn-danger btn-lg center-me">Generate Conspiracy Theory</button>
    </div>

    <div className="form-group">
      <label htmlFor="input-name" className="control-label">
        <h2 id="enter-name-header">Enter your name for a customised conspiracy theory:</h2>
        <input id="input-name" type="text" value={this.state.submittedName} onChange={this.handleChange} id="name" name="noun" /><button type="reset" onClick={() => {this.clearInput()}}>Clear</button>
      </label>
    </div>
  </form>

  <div className="conspiracy-result">
    <p id="intro"></p>
    <p id="the-conspiracy"></p>
  </div>

</main>
)
}
}

export default Form
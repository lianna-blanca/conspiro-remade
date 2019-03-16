import React, { useState } from "react"
let data = require("./theoryText.json");

function randomy(arr) {
  return arr[Math.floor((Math.random() * (arr.length - 1)))]
}

function FormAndTheory() {
  const [submittedName, setSubmittedName] = useState("");
  let introText = randomy(data.intros)
  let nounPhrase = randomy(data.nounPhrases)
  let verbPhrase = randomy(data.verbPhrases)
  let transitivePhrase = randomy(data.transitivePhrases)
  let objPhrase = randomy(data.objects)
  let sentence = randomy(data.sentences)
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
      theory = transitivePhrase + objPhrase
    }
  else theory = sentence
  }

return(
  <main>
  <div className="conspiracy-result">
    <p id="intro">{introText}</p>
    <p id="the-conspiracy">{theory}</p>
  </div>    

  <form>
  {console.log("submittedName is: ", submittedName)}
    <div className="form-group">
      <button 
        type="submit" 
        className="btn btn-danger btn-lg center-me"
        onClick={() => console.log("clicked Generate button")}
        >
          Generate Conspiracy Theory
        </button>
    </div>

    <div className="form-group">
      <label htmlFor="input-name" className="control-label">
        <h2 id="enter-name-header">Enter your name for a customised conspiracy theory:</h2>
        <input
          id="input-name"
          value={submittedName}
          onChange={e => setSubmittedName(e.target.value)}
          placeholder="Your name"
          type="text"
          name="noun"
          />
        <button type="reset" onClick={() => setSubmittedName("")}>Clear</button>
      </label>
    </div>
  </form>
  </main>
)
}

const TheoryHooked = () => {
    return FormAndTheory()
}

export default TheoryHooked
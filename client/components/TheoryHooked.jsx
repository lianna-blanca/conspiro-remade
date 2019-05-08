import React, { useState } from "react"
let data = require("./theoryText.json");

function randomPick(arr) {
  return arr[Math.floor((Math.random() * (arr.length - 1)))]
}

function generateTheory(submittedName) {
  let introText = randomPick(data.intros)
  let nounPhrase = randomPick(data.nounPhrases)
  let verbPhrase = randomPick(data.verbPhrases)
  let transitivePhrase = randomPick(data.transitivePhrases)
  let objPhrase = randomPick(data.objects)
  let sentence = randomPick(data.sentences)
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

document.getElementById("intro").innerHTML = introText
document.getElementById("the-conspiracy").innerHTML = theory
}

function TheoryHooked(props) {
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("handleSubmit, submittedName:",submittedName)
    generateTheory(submittedName)
  }

  return (
  <main>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <button 
        type="submit" 
        value="generate"
        className="btn btn-danger btn-lg center-me"
        >
          Generate Conspiracy Theory
        </button>
    </div>

    <div className="form-group">
    <label htmlFor="input-name" className="control-label">
      <h2 id="enter-name-header">Enter your name for a customised conspiracy theory:</h2>
      <input
        type="text"
        value={submittedName}
        onChange={e => setSubmittedName(e.target.value)}
        id="input-name"
        placeholder="Your name"
        name="noun"
      />
    <button type="submit" value="Submit" onClick={() => setSubmittedName("")}>Clear</button>
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


export default TheoryHooked
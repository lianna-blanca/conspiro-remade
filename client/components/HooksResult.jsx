import React, { useState } from "react"
let data = require("./theoryText.json");

// rebulid WIP, still need to get submittedName 

function randomy(arr) {
  return arr[Math.floor((Math.random() * (arr.length - 1)))]
}

function generateConspiracyHooked() {
  let introText = this.randomy(data.intros)
  let nounPhrase = this.randomy(data.nounPhrases)
  let verbPhrase = this.randomy(data.verbPhrases)
  let transitivePhrase = this.randomy(data.transitivePhrases)
  let objPhrase = this.randomy(data.objects)
  let sentence = this.randomy(data.sentences)
  let theory = ""

  // if (submittedName) {
  //   theory = submittedName + verbPhrase
  // }
  // else {
    let num = Math.random()
    if (num >= 0.3) {
      theory = nounPhrase + verbPhrase
    }
    else if (num < 0.3 && num <= 0.7) {
      theory = transitivePhrase + objPhrase
    }
  else theory = sentence
  // }

  return (
    <div className="conspiracy-result">
      <p id="intro">{introText}</p>
      <p id="the-conspiracy">{theory}</p>
    </div>
  )
}

const HooksResult = () => {
  return generateConspiracyHooked()
}

export default HooksResult
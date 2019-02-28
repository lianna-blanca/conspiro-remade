import React, { useState } from "react"

// // rebulid WIP


  // this.handleChange = this.handleChange.bind(this)
  // this.handleSubmit = this.handleSubmit.bind(this)


function handleChange(ev) {
  console.log("handleChange")
// //   this.setState({submittedName: ev.target.value})
}

// function clearInput() {
//   console.log("clearInput")
// //   this.setState({submittedName: ""})
// }

function handleSubmit(ev) {
  console.log("handleSubmit")
  // ev.preventDefault();
// //   this.buildTheory(this.state.submittedName)
}

function hookedForm() {
console.log("hookedForm")

const [submittedName, setSubmittedName] = useState("")

  return (
  <form onSubmit={handleSubmit()}>
    <div className="form-group">
      <button type="submit" value="submit" className="btn btn-danger btn-lg center-me">Generate Conspiracy Theory</button>
    </div>

    <div className="form-group">
      <label htmlFor="input-name" className="control-label">
        <h2 id="enter-name-header">Enter your name for a customised conspiracy theory:</h2>
        <input id="input-name" type="text" value={submittedName} onChange={handleChange()} id="name" name="noun" /><button type="reset" onClick={() => {clearInput()}}>Clear</button>
      </label>
    </div>
  </form>
  )
}

const HooksForm = () => {
    return hookedForm()
}

export default HooksForm
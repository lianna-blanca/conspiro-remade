import React, { useState } from "react"

// // rebulid WIP
// // //   this.buildTheory(this.state.submittedName)

function Form() {
  const [submittedName, setSubmittedName] = useState("");

return(
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
)
}

const HooksForm = () => {
    return Form()
}

export default HooksForm
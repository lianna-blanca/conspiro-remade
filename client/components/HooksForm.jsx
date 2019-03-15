import React, { useState } from "react"

// // rebulid WIP



function Form() {
  const [submittedName, setSubmittedName] = useState("");

// function clearInput() {
//   console.log("submittedName", submittedName)
//   console.log("clearInput")
//   setSubmittedName = "";
//   console.log("submittedName", submittedName)
// }

  // useEffect(() => {
  //   console.log("useEffect clearInput")
  //   // document.title = `You clicked ${count} times`;
  // });

  // const handleSubmit = (evt) => {
  //     evt.preventDefault();
  //     alert(`Submitting Name ${name}`)
  // }

return(
  // <form onSubmit={handleSubmit()}>
  <form> }
    <div className="form-group">
      <button 
        type="submit" 
        // value="submit" 
        className="btn btn-danger btn-lg center-me"
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
        {/* <button type="submit">Submit</button> */}
        {/* <button type="reset" onClick={() => {clearInput()}}>Clear</button> */}
      </label>
    </div>

  </form>
)


}


//   // this.handleChange = this.handleChange.bind(this)
//   // this.handleSubmit = this.handleSubmit.bind(this)




// function handleSubmit(ev) {
//   console.log("handleSubmit")
//   // ev.preventDefault();
// // //   this.buildTheory(this.state.submittedName)
// }

// function hookedForm() {
// console.log("hookedForm")

// const [submittedName, setSubmittedName] = useState("")

//   return (
//   <form onSubmit={handleSubmit()}>
//     <div className="form-group">
//       <button type="submit" value="submit" className="btn btn-danger btn-lg center-me">Generate Conspiracy Theory</button>
//     </div>

//     <div className="form-group">
//       <label htmlFor="input-name" className="control-label">
//         <h2 id="enter-name-header">Enter your name for a customised conspiracy theory:</h2>
//         <input id="input-name" type="text" value={submittedName} onChange={handleChange()} id="name" name="noun" /><button type="reset" onClick={() => {clearInput()}}>Clear</button>
//       </label>
//     </div>
//   </form>
//   )
// }

const HooksForm = () => {
    return Form()
}

export default HooksForm
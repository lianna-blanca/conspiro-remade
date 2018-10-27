import React from "react"

class Form extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    value: ""
    }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmittedName = this.handleSubmittedName.bind(this)
  this.handleSubmitNoName = this.handleSubmitNoName.bind(this)
  this.clearInput = this.clearInput.bind(this)
}

handleChange(ev) {
  this.setState({value: ev.target.value})
}

handleSubmittedName(ev) {
  ev.preventDefault();
  if (this.state.value) {
    console.log(this.state.value)
    this.someFn()
  }
  else {
    this.handleSubmitNoName(ev)
  }
}

handleSubmitNoName(ev) {
  ev.preventDefault();
  console.log("no name")
  this.someFn()
}

clearInput() {
  this.setState({value: ""})
  console.log("cleared")
}


someFn = () => {
  let dataPassToParent = "Consp theory FROM FORM"
  this.props.callbackFromParent(dataPassToParent)
}


render() {
return (
<div>
  <form onSubmit={this.handleSubmittedName}>
    <div className="form-group">
      <button type="submit" value="submit" className="btn btn-danger btn-lg">Generate Conspiracy Theory</button>
    </div>
    <div className="form-group">
      <label className="control-label" htmlFor="pwd">
        <h4>Enter your name for a customised conspiracy theory:</h4>
        <input type="text" value={this.state.value} onChange={this.handleChange} id="name" name="noun" /><button type="reset" onClick={() => {this.clearInput()}}>Clear</button>
      </label>
    </div>
  </form>
</div>
)
}
}

export default Form


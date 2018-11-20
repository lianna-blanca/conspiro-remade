import React from "react"

class Form extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    submittedName: ""
    }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(ev) {
  this.setState({submittedName: ev.target.value})
}

handleSubmit(ev) {
  ev.preventDefault();
  if (this.state.submittedName) {
    this.props.getForm(this.state.submittedName)
  }
  else {
    this.props.getForm()
  }
}

clearInput() {
  this.setState({submittedName: ""})
}

render() {
return (
<div>
  <form onSubmit={this.handleSubmit}>
    <div className="form-group">
      <button type="submit" value="submit" className="btn btn-danger btn-lg">Generate Conspiracy Theory</button>
    </div>
    <div className="form-group">
      <label className="control-label" htmlFor="pwd">
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


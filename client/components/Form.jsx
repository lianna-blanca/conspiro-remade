import React from "react"

class Form extends React.Component {
constructor(props) {
  super(props)
  this.state = {value: ""}

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(ev) {
  this.setState({value: event.target.value})
}

handleSubmit(ev) {
  ev.preventDefault();
  if (this.state.value) {
    console.log(this.state.value)
  }
  else {
    console.log("no name")
  }
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
        <input type="text" value={this.state.value} onChange={this.handleChange} id="name" name="noun" />
      </label>
    </div>
  </form>
</div>
)
}
}

export default Form


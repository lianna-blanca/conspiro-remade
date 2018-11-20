import React from "react"

class Result extends React.Component {
constructor(props) {
  super(props)

  this.logDataFromApp = this.logDataFromApp.bind(this)
}

logDataFromApp() { // temp function for build
  // console.log("in Result")
  // console.log(this.props.resultText)
}


render() {
  this.logDataFromApp()
return (
  <div>
    <p id="the-conspiracy">
      {this.props.resultText}
    </p>

  </div>
)
}
}
export default Result
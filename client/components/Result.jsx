import React from "react"

class Result extends React.Component {
constructor(props) {
  super(props)

  this.logDataFromApp = this.logDataFromApp.bind(this)
}

logDataFromApp() {
  console.log("in Result")
  console.log(this.props.resultText)
}


render() {
  this.logDataFromApp()
return (
  <div>
    <p>
      {this.props.resultText}
    </p>


{/* <p id="the-conspiracy"><strong>{{ noun }} {{conspiracy}} {{object}}</strong></p> */}

{/* <form action="/">
<button type="submit" className="btn btn-danger btn-lg">Home</button>
</form> */}
  </div>
)
}
}
export default Result
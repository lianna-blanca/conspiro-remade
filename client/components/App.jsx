import React from "react"
import Header from "./Header"
import Form from "./Form"
import Result from "./Result"
import Footer from "./Footer"

class App extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    formName: ""
    }

}

callbackFormText = (dataFromForm) => {
  if (dataFromForm !== undefined) {
    this.setState({formName: dataFromForm})
  }
}


render() {

let theory = this.state.formName // change to a function that will assemble sentence

  return (
    <div>
      <Header />
      <Result resultText={theory}/>
      <Form returnConspiracyText={this.callbackFormText}/>
      <Footer />
    </div>
  )
}
}

export default App


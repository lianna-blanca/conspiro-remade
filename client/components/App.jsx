import React from "react"
import Header from "./Header"
import Form from "./Form"
import Result from "./Result"
import Footer from "./Footer"

class App extends React.Component {
constructor(props) {
  super(props)

  this.state = { formName: "" }
}

callbackFormText = (dataFromForm) => {
  if (dataFromForm !== undefined) {
    this.setState({formName: dataFromForm})
  }
}

render() {
  return (
    <div>
      <Header />
      <Result resultText={this.state.formName}/>
      <Form getForm={this.callbackFormText}/>
      <Footer />
    </div>
  )
}
}

export default App


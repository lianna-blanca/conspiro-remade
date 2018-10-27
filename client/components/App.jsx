import React from "react"
import Header from "./Header"
import Form from "./Form"
import Result from "./Result"
import Footer from "./Footer"

class App extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    result: ""
    }

}

myCallback = (dataFromForm) => {
  if (dataFromForm !== undefined) {
  this.setState({result: dataFromForm})
}

}


render() {

let theory = this.state.result
// "temp conspiracy text"// come up from Form

  return (
    <div>
      <Header />
      <Result resultText={theory}/>
      <Form callbackFromParent={this.myCallback}/>
      <Footer />
    </div>
  )
}
}

export default App


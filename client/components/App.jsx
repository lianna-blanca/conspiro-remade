import React from "react"
import Header from "./Header"
import Form from "./Form"
import Result from "./Result"
import Footer from "./Footer"

class App extends React.Component {
constructor(props) {
  super(props)
}

myCallback = (dataFromForm) => {
console.log("in App, myCallback")
console.log(dataFromForm)
  return dataFromForm
}


render() {

let theory = this.myCallback()
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


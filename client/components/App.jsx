import React from "react"
import Header from "./Header"
// import Theory from "./Theory"
import Footer from "./Footer"

import HooksResult from "./HooksResult"
import HooksForm from "./HooksForm"


const App = () => {
  return (
    <div>
      <Header />
      <HooksResult />
      <HooksForm />
      {/* <Theory /> */}
      <Footer />
    </div>
  )
}

export default App


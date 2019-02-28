import React, { useState } from "react"

function hookingFunct() {
  const [theoryHook, setTheoryHook] = useState("const hook text")

  return (
    <div>
      <p>Current text is {theoryHook}.</p>
      <button onClick={() => setTheoryHook("button hook text")}>
        Click me
      </button>
    </div>
  )
}

const Hook = () => {
  return (
    <div>
      {hookingFunct()}
    </div>
  )
}

export default Hook


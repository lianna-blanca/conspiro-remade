import React from "react"
import {shallow} from "enzyme"
import App from "../client/components/App"

test("App contains header component", () => {
  const expected = "<Header />"
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toContain(expected)
})

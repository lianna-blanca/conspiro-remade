import React from "react"
import {shallow} from "enzyme"
import Footer from "../client/components/Footer"

test("Footer text includes team name", () => {
  const expected = "By TEAM CONSPIRACY THEORY"
  const wrapper = shallow(<Footer />)
  expect(wrapper.text()).toContain(expected)
})

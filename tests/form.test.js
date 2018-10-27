import React from "react"
import {shallow} from "enzyme"
import Form from "../client/components/Form"

const wrapper = shallow(<Form />)

test("Form text contains header", () => {
  var expected = "Enter your name to get a customised conspiracy theory"
  expect(wrapper.text()).toContain(expected)
})

test("Form text contains form tag", () => {
  var expected = "<form>"
  expect(wrapper.html()).toContain(expected)
})

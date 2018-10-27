import React from "react"
import {shallow} from "enzyme"
import App from "../client/components/App"
import Form from "../client/components/Form"
import Footer from "../client/components/Footer"

test("tests are working", () => {
  expect(2).toBeGreaterThan(1)
})

// App component
test("App contains header component", () => {
  let expected = "<Header />"
  let wrapper = shallow(<App />)
  expect(wrapper.text()).toContain(expected)
})

// Footer component
test("Footer text includes team name", () => {
  let expected = "By TEAM CONSPIRACY THEORY"
  let wrapper = shallow(<Footer />)
  expect(wrapper.text()).toContain(expected)
})

// Form component
test("Form text contains 'Enter your name'", () => {
  var expected = "Enter your name"
  let wrapper = shallow(<Form />)
  expect(wrapper.text()).toContain(expected)
})

test("Form text contains form tag", () => {
  var expected = "<form"
  let wrapper = shallow(<Form />)
  expect(wrapper.html()).toContain(expected)
})

test("Form text contains form tag", () => {
  var expected = "<form"
  let wrapper = shallow(<Form />)
  expect(wrapper.html()).toContain(expected)
})


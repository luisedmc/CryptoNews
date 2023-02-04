import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Title from "../Title.jsx"

test("render title with the property 'title'", () => {
  render(<Title />)
  const titleElement = screen.getByRole("heading")
  expect(titleElement).toBeInTheDocument()
})

import React from "react"
import { Form } from "react-bootstrap"

const SearchBox = ({ onChange, className = "" }) => {
  return (
    <Form>
      <Form.Group className={`${className} d-flex justify-content-center`}>
        <Form.Control type="text" placeholder="Search" onChange={onChange} />
      </Form.Group>
    </Form>
  )
}

export default SearchBox

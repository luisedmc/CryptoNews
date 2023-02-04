import React from "react"
import { Form } from "react-bootstrap"
import { SearchBoxProps } from "./types"

const SearchBox = ({ onChangeHandler, className = "" }: SearchBoxProps) => {
  return (
    <Form>
      <Form.Group className={`${className} d-flex justify-content-center`}>
        <Form.Control type="text" placeholder="Search" onChange={onChangeHandler} />
      </Form.Group>
    </Form>
  )
}

export default SearchBox

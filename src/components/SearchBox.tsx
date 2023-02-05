import React from "react"
import { Form } from "react-bootstrap"
import { SearchBoxProps } from "./interfaces/iSearchBox"

export const SearchBox = ({ onChangeHandler, className = "" }: SearchBoxProps) => {
  return (
    <Form>
      <Form.Group className={`${className} d-flex justify-content-center`}>
        <Form.Control type="text" placeholder="Search" onChange={onChangeHandler} />
      </Form.Group>
    </Form>
  )
}

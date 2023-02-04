import React from "react"
import { useParams } from "react-router-dom"
import Title from "../components/Title"

const Crypto = () => {
  const { cryptoId } = useParams()

  return (
    <>
      <Title title={cryptoId} />
    </>
  )
}

export default Crypto

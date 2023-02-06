import React from "react"
import { useParams } from "react-router-dom"
import { Title } from "src/components/Title"

const Crypto = () => {
  const { cryptoId } = useParams()

  return (
    <>
      <Title titleLabel={cryptoId} />
    </>
  )
}

export default Crypto

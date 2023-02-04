import React from "react"

const Title = ({ title, colorClass = "" }) => {
  return (
    <>
      <h1 className={`${colorClass} display-2 mt-2 text-center fw-bold`}>{title}</h1>
    </>
  )
}

export default Title

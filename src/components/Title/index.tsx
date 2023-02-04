import React from "react"
import { TitleProps } from "./types"

const TitleComponent = ({ titleLabel, colorClass = "" }: TitleProps) => {
  return (
    <>
      <h1 className={`${colorClass} display-2 mt-2 text-center fw-bold`}>{titleLabel}</h1>
    </>
  )
}

export default TitleComponent

import { ChangeEventHandler } from "react"

export interface SearchBoxProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
  className?: string
}

import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  const error: unknown = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>
            Error: {error.status} {error.statusText}
          </i>
        </p>
      </div>
    )
  }
}

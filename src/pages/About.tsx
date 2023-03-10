import { Row } from "react-bootstrap"
import { Title } from "src/components/Title"

export const About = () => {
  return (
    <>
      <Title titleLabel="About" />

      <Row>
        <h2>Purpose of the Project:</h2>
        <p>
          This project was created to use public external APIs to display cryptocurrencies data and
          articles about. A specific article or coin can be searched through a search bar.
        </p>
      </Row>

      <Row>
        <h2>Technologies:</h2>
        <ul>
          <li>React</li>
          <li>React Bootstrap</li>
          <li>React Router</li>
          <li>React Hooks</li>
        </ul>
      </Row>
    </>
  )
}

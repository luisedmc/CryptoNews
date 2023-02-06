import { FunctionComponent, ReactElement } from "react"
import { Link, Outlet } from "react-router-dom"
import { Container, Row, Col, Nav } from "react-bootstrap"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

export const App: FunctionComponent = (): ReactElement => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={2}>
          <Nav className="list-group pe-auto">
            <Link to="/" className="list-group-item list-group-item-action">
              Home
            </Link>
            <Link to="/cryptos" className="list-group-item list-group-item-action">
              Cryptos
            </Link>
            <Link to="/articles" className="list-group-item list-group-item-action">
              Articles
            </Link>
            <Link to="/about" className="list-group-item list-group-item-action">
              About
            </Link>
          </Nav>
        </Col>

        <Col md={10}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

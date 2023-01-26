import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Container className='mt-5'>
            {/* <div className='row'>
                <div className='col'>
                    <h1 className='mt-3'>Web News</h1>
                </div>
            </div> */}

            <Row>
                <Col md={2}>
                    <Nav className='list-group pe-auto'>
                        <Link to='/' className='list-group-item list-group-item-action'>Home</Link>
                        <Link to='/cryptos' className='list-group-item list-group-item-action'>Cryptos</Link>
                        <Link to='/articles' className='list-group-item list-group-item-action'>Articles</Link>
                        <Link to='/about' className='list-group-item list-group-item-action'>About</Link>
                    </Nav>
                </Col>

                <Col md={10}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
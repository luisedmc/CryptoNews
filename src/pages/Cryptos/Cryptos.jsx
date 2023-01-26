import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Badge } from 'react-bootstrap';
import Loading from "../../components/Loading";
import Title from '../../components/Title';

const COIN_KEY = process.env.REACT_APP_COIN_KEY;

function Crypto() {
    const [cryptos, setCryptos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const cryptoPriceFormatter = apiPrice => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        });
        return formatter.format(apiPrice);
    }

    useEffect(() => {
        const headers = new Headers({
            "X-CoinAPI-Key": `${COIN_KEY}`,
        });
        const requestOptions = {
            method: "GET",
            headers: headers,
        }

        setIsLoading(true);
        fetch(`https://rest.coinapi.io/v1/assets?apikey=${COIN_KEY}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                data = data.slice(0, 50);
                const cryptoCoins = data.filter(coin => coin.type_is_crypto === 1);
                console.log(cryptoCoins);
                setIsLoading(false);
                setCryptos(cryptoCoins);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Title title="Cryptocurrencies" />

            {isLoading && <Loading />}

            <ListGroup>
                {cryptos.map(crypto => (
                    <ListGroup.Item action key={crypto.asset_id}>
                        <Link to={`/cryptos/${crypto.asset_id}`} className="text-decoration-none">
                            <Row className="align-items-center">
                                <Col>
                                    {crypto.name}
                                </Col>

                                <Col className="d-flex justify-content-end">
                                    <Badge bg="success">USD: <small>{cryptoPriceFormatter(crypto.price_usd)}</small>
                                    </Badge>
                                </Col>
                            </Row>
                        </Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}

export default Crypto;
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Row, Col, ListGroup, Badge } from "react-bootstrap"
import Loading from "../components/Loading"
import Title from "../components/Title"
import SearchBox from "../components/SearchBox"

const COIN_KEY = process.env.REACT_APP_COIN_KEY

function Crypto() {
  const [cryptos, setCryptos] = useState([])
  const [searchCrypto, setSearchCrypto] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const cryptoPriceFormatter = (apiPrice) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    })
    return formatter.format(apiPrice)
  }

  useEffect(() => {
    const headers = new Headers({
      "X-CoinAPI-Key": `${COIN_KEY}`,
    })
    const requestOptions = {
      method: "GET",
      headers: headers,
    }

    setIsLoading(true)
    fetch(`https://rest.coinapi.io/v1/assets`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        data = data.slice(0, 50)
        const cryptoCoins = data.filter((coin) => coin.type_is_crypto === 1)
        console.log(cryptoCoins)
        setIsLoading(false)
        setCryptos(cryptoCoins)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleSearch = (event) => {
    setSearchCrypto(event.target.value)
  }

  const searchedCrypto = cryptos.filter((crypto) => {
    return crypto.name.toLowerCase().includes(searchCrypto.toString().toLowerCase())
  })

  return (
    <>
      <Title title="Cryptocurrencies" />

      <SearchBox onChange={handleSearch} className={"mt-3 mb-3"} />
      {isLoading && <Loading />}
      {searchCrypto !== "" ? (
        searchedCrypto.map((crypto, index) => (
          <ListGroup key={index}>
            <ListGroup.Item action>
              <Link to={`/cryptos/${crypto.asset_id}`} className="text-decoration-none">
                <Row className="align-items-center">
                  <Col>{crypto.name}</Col>

                  <Col className="d-flex justify-content-end">
                    <Badge bg="success">
                      USD: <small>{cryptoPriceFormatter(crypto.price_usd)}</small>
                    </Badge>
                  </Col>
                </Row>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        ))
      ) : (
        <ListGroup>
          {cryptos.map((crypto) => (
            <ListGroup.Item action key={crypto.asset_id}>
              <Link to={`/cryptos/${crypto.asset_id}`} className="text-decoration-none">
                <Row className="align-items-center">
                  <Col>{crypto.name}</Col>

                  <Col className="d-flex justify-content-end">
                    <Badge bg="success">
                      USD: <small>{cryptoPriceFormatter(crypto.price_usd)}</small>
                    </Badge>
                  </Col>
                </Row>
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  )
}

export default Crypto

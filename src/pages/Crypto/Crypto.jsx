import React from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
    const { cryptoId } = useParams();

    return (
        <>
            <h1 className="display-3 text-center fw-bold">{cryptoId}</h1>
        </>
    );
}

export default Coin;
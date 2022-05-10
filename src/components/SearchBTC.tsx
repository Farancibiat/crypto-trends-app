import * as React from "react";
import { useState, useEffect } from "react";
import { trendsApi } from "../services/trends";
import Spinner from "./Spinner";

const SearchBTC = () => {
  const [pageState, setPageState] = useState<number>(1);
  const [cryptoData, setCryptoData] = useState<any[] | null[]>([]);
  const useTrendingCryptos = trendsApi.endpoints.useTrendingCryptos.useQuery;
  const { data, isError, isFetching, isSuccess } = useTrendingCryptos({
    page: pageState,
  });
  const handleScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setPageState(pageState + 1);
    }
  };
  useEffect(
    () => {
      if (isSuccess) {
        setCryptoData([...cryptoData, ...data.data]);
      }
    },
    [data] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <div className="container">
      {isError &&
        "Hubo un error al conectar con la base de datos, intente recargar"}
      {data && (
        <div className="scroll-able" onScroll={handleScroll}>
          <table>
            <thead className="header-fixed">
              <tr>
                <th>Name</th>
                <th>USD Price</th>
                <th>BTC Price</th>
                <th>ETH Price</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto: any, index) => {
                return (
                  <tr key={crypto.id + index}>
                    <td style={{ fontSize: "20px" }}>{crypto.symbol}</td>
                    <td>${crypto.metrics.market_data.price_usd.toFixed(4)}</td>
                    <td>${crypto.metrics.market_data.price_btc.toFixed(4)}</td>
                    <td>${crypto.metrics.market_data.price_eth.toFixed(4)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {isFetching && <Spinner />}
    </div>
  );
};

export default SearchBTC;

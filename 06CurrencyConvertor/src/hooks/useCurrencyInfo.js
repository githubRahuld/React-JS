import { useState } from "react";
import { useEffect } from "react";

let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

// create custom hook
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json()) // json me convert
      .then((res) => setData(res[currency])); //data ko set kiya
    console.log(data);
    console.log(res[currency]);
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;

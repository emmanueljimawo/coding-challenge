import { useEffect, useState } from "react";

function ApiData(url) {
  const [isloading, setIsLodaing] = useState(true);
  const [data, setData] = useState(null);

  function fetchMovies() {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setIsLodaing(false);
        setData(json);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return { isloading, data };
}

export default ApiData;

import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) =>
        response.json().then((data) => {
          setEmployees(data);
          setIsLoading(false);
        })
      )
      .catch((error) => console.log(error));
  }, [url]);
  return { employees, isLoading };
};

export default useFetch;

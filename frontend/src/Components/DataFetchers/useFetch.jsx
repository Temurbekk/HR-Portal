import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) =>
        response.json().then((data) => {
          setStudents(data);
          setIsLoading(false);
        })
      )
      .catch((error) => console.log(error));
  }, [url]);
  return { students, isLoading };
};

export default useFetch;

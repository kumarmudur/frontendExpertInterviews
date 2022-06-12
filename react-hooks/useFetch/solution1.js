import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let shouldCancel = false;

    const callFetch = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const newResponse = await response.json();
        if (shouldCancel) return;
        setResponse(newResponse);
        setError(null);
      } catch (error) {
        if (shouldCancel) return;
        setError(error);
        setResponse(null);
      }
      setIsLoading(false);
    };
    
    callFetch();
    
    return () => (shouldCancel = true);
  }, [url]);

  return {
    response,
    isLoading,
    error,
  };
}

exports.useFetch = useFetch;

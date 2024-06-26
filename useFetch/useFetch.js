import { useEffect, useState } from "react";


const localCache={}

export function useFetch(url) {

    


  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    const getFetch = async () => {

        if(localCache[url]){
            console.log("Usando cache")
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
              });
              return
        }


      setState({ data: null, isLoading: true, hasError: false, error: null });

      const response = await fetch(url);
      if (!response.ok) {
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: response.error,
        });
        return;
      }
      const data = await response.json();
      setTimeout(() => {
        setState({
          data: data,
          isLoading: false,
          hasError: false,
          error: null,
        });

        localCache[url]=data
      }, 1000);
    };
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}

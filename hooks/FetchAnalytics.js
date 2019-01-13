import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetchAnalytics = (props) => {
  const [isLoadingApi, setLoadingApi] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [productsData, setProductsData] = useState([]);

  const fetchData = async () => {
    setLoadingApi(true);
    setApiError(null);

    try {
      const {
        data: { products },
      } = await axios.get('http://localhost:5678/api/analytics/latest');
      setProductsData(products);
    } catch (err) {
      setApiError(err);
    }

    setLoadingApi(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoadingApi,
    apiError,
    productsData,
  };
};

export default useFetchAnalytics;

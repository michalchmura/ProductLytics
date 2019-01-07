import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import useFetchAnalytics from '../hooks/FetchAnalytics';

const MyProvider = (props) => {
  const { isLoadingApi, apiError, productsData } = useFetchAnalytics();

  return (
    <MyContext.Provider
      value={{
        isLoadingApi,
        apiError,
        productsData,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;

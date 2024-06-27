import React, { createContext, useState } from 'react';

export const NftContext = createContext();

export const NftProvider = ({ children }) => {
  const [nftData, setNftData] = useState([]);

  return <NftContext.Provider value={{ nftData, setNftData }}>{children}</NftContext.Provider>;
};

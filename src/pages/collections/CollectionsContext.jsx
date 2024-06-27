import React, { createContext, useState } from 'react';

export const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
  const [collectionData, setCollectionData] = useState([]);

  return <CollectionContext.Provider value={{ collectionData, setCollectionData }}>{children}</CollectionContext.Provider>;
};

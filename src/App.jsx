import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import ThemeCustomization from './themes';
import ScrollTop from './components/ScrollTop';
import { NftProvider } from './pages/authentication/auth-forms/NFT/NftContext';
import { UserProvider } from './pages/authentication/auth-forms/User/UserContext';
import { CollectionProvider } from './pages/collections/CollectionsContext';

export default function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <NftProvider>
          <UserProvider>
            <CollectionProvider>
              <RouterProvider router={router} />
            </CollectionProvider>
          </UserProvider>
        </NftProvider>
      </ScrollTop>
    </ThemeCustomization>
  );
}

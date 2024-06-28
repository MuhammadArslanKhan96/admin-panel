import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const NftForm = Loadable(lazy(() => import('pages/authentication/nft')));
const NftList = Loadable(lazy(() => import('pages/authentication/nftList')));
const UserForm = Loadable(lazy(() => import('pages/authentication/user')));
const UserList = Loadable(lazy(() => import('pages/authentication/userlist')));
import CollectionFormPage from 'pages/authentication/collectionsform';
import CollectionListPage from 'pages/authentication/collections';
import CollectionNftPage from 'pages/collections/CollectionNftPage';
import StakeList from 'pages/authentication/stakeList';
import Stake from 'pages/authentication/stake';
import AuthRegister from 'pages/authentication/auth-forms/AuthRegister';
import AuthLogin from 'pages/authentication/auth-forms/AuthLogin';

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: '/nft',
      element: <NftForm />
    },
    {
      path: '/nft/:collectionId',
      element: <CollectionNftPage />
    },
    {
      path: '/nft/:collectionId/:nftId',
      element: <CollectionNftPage />
    },
    {
      path: '/nftlist',
      element: <NftList />
    },
    {
      path: '/user',
      element: <UserForm />
    },
    {
      path: '/userlist',
      element: <UserList />
    },
    {
      path: '/collections',
      element: <CollectionFormPage />
    },
    {
      path: '/collectionslist',
      element: <CollectionListPage />
    },
    {
      path: '/stakelist',
      element: <StakeList />
    },
    {
      path: '/stake',
      element: <Stake />
    },
  ]
};

export default MainRoutes;

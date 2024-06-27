// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

import { FaListUl } from 'react-icons/fa6';
import { FaWpforms } from 'react-icons/fa';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  FaListUl,
  FaWpforms
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Typography',
      type: 'item',
      url: '/typography',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-color',
      title: 'Color',
      type: 'item',
      url: '/color',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/shadow',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'nft1',
      title: 'Nft',
      type: 'item',
      url: '/nft',
      icon: icons.FaWpforms,
      target: false
    },
    {
      id: 'nftlist1',
      title: 'Nft List',
      type: 'item',
      url: '/nftlist',
      icon: icons.FaListUl,
      target: false
    },
    {
      id: 'user1',
      title: 'User',
      type: 'item',
      url: '/user',
      icon: icons.FaWpforms,
      target: false
    },
    {
      id: 'userlist1',
      title: 'User List',
      type: 'item',
      url: '/userlist',
      icon: icons.FaListUl,
      target: false
    },
    {
      id: 'collectionlist1',
      title: 'Collection List',
      type: 'item',
      url: '/collectionslist',
      icon: icons.FaListUl,
      target: false
    }
  ]
};

export default utilities;

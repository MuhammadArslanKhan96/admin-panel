import React, { useContext, useEffect, useState } from 'react';
import { NftContext } from './NftContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import fetchData from '../../../../apiRequest/collection';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getAllNfts } from '../../../../apiPath/apiPath';

export default function NftTablePage() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllNftsData = async () => {
      try {
        const data = await fetchData(getAllNfts);
        console.log(data);
        setData(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getAllNftsData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>royalty_commission</TableCell>
            <TableCell>primary_owner</TableCell>
            <TableCell>type</TableCell>
            <TableCell>category</TableCell>
            <TableCell>img</TableCell>
            <TableCell>collection_id</TableCell>
            <TableCell>kind</TableCell>
            <TableCell>blockchain</TableCell>
            <TableCell>supply_quantity</TableCell>
            <TableCell>contact_address</TableCell>
            <TableCell>token_id</TableCell>
            <TableCell>token_standard</TableCell>
            <TableCell>creator_fee</TableCell>
            <TableCell>open_auction</TableCell>
            <TableCell>fix_price</TableCell>
            <TableCell>mystery_box</TableCell>
            <TableCell>level</TableCell>
            <TableCell>sub_category</TableCell>
            <TableCell>insurance_per_hour</TableCell>
            <TableCell>listingid</TableCell>
            <TableCell>created_at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((collection, index) => (
            <TableRow key={index}>
              <TableCell>{collection.name}</TableCell>
              <TableCell>{collection.description}</TableCell>
              <TableCell>{collection.royalty_commission}</TableCell>
              <TableCell>{collection.primary_owner}</TableCell>
              <TableCell>{collection.type}</TableCell>
              <TableCell>{collection.category}</TableCell>
              <TableCell>{collection.img}</TableCell>
              <TableCell>{collection.collection_id}</TableCell>
              <TableCell>{collection.kind}</TableCell>
              <TableCell>{collection.blockchain}</TableCell>
              <TableCell>{collection.supply_quantity}</TableCell>
              <TableCell>{collection.contact_address}</TableCell>
              <TableCell>{collection.token_id}</TableCell>
              <TableCell>{collection.token_standard}</TableCell>
              <TableCell>{collection.creator_fee}</TableCell>
              <TableCell>{collection.open_auction.price}</TableCell>
              <TableCell>{collection.fix_price.price}</TableCell>
              <TableCell>{collection.mystery_box.price}</TableCell>
              <TableCell>{collection.level}</TableCell>
              <TableCell>{collection.sub_category}</TableCell>
              <TableCell>{collection.insurance_per_hour}</TableCell>
              <TableCell>{collection.listingid}</TableCell>
              <TableCell>{collection.created_at}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}

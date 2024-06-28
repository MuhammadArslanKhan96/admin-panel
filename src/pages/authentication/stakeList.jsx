import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import fetchData from '../../apiRequest/collection';
import { getAllStake } from 'apiPath/apiPath';

const StakeList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllStakeData = async () => {
      try {
        const data = await fetchData(getAllStake);
        console.log(data);
        setData(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getAllStakeData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Stake List</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Creator Wallet</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Created By</TableCell>
            <TableCell>Stake Start</TableCell>
            <TableCell>Stake End</TableCell>
            <TableCell>Stake User</TableCell>
            <TableCell>Collection Id</TableCell>
            <TableCell>NFT Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((stake, index) => (
            <TableRow key={index}>
              <TableCell>{stake.creator_wallet.slice(0,14)}...</TableCell>
              <TableCell>{stake.type}</TableCell>
              <TableCell>{stake.created_by}</TableCell>
              <TableCell>{stake.stalked_at}</TableCell>
              <TableCell>{stake.time}</TableCell>
              <TableCell>{stake.stalked_user}</TableCell>
              <TableCell>{stake.collection_id}</TableCell>
              <TableCell>{stake.nft_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StakeList;

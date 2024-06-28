import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import fetchData from '../../../../apiRequest/collection';
import { getAllUsers } from '../../../../apiPath/apiPath';

export default function UserListPage() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllUsersData = async () => {
      try {
        const data = await fetchData(getAllUsers);
        console.log(data);
        setData(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getAllUsersData();
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
          <TableCell>Email</TableCell>
          <TableCell>Wallet</TableCell>
          <TableCell>Contact Details</TableCell>
          <TableCell>Profile Image</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Country</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.data.map((user, index) => (
          <TableRow key={index}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.wallet.slice(0,14)}...</TableCell>
            <TableCell>{user.contact_details}</TableCell>
            <TableCell>{user.img}</TableCell>
            <TableCell>{user.address}</TableCell>
            <TableCell>{user.country}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.created_at}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

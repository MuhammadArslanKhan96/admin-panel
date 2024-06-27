import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function UserListPage() {
  const { userData } = useContext(UserContext);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Rate</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell>Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Amjad</TableCell>
          <TableCell>amjadabro936@gmail.com</TableCell>
          <TableCell>294</TableCell>
          <TableCell>215</TableCell>
          <TableCell>1d 21hr</TableCell>
          <TableCell>Fixed</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Afzal</TableCell>
          <TableCell>afzalimdad9@gmail.com</TableCell>
          <TableCell>215</TableCell>
          <TableCell>294</TableCell>
          <TableCell>2d 1hr</TableCell>
          <TableCell>Fixed</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Arslan</TableCell>
          <TableCell>Arslan@gmail.com</TableCell>
          <TableCell>012</TableCell>
          <TableCell>92</TableCell>
          <TableCell>9hr 5min</TableCell>
          <TableCell>Flexible</TableCell>
        </TableRow>
        {userData.map((user, index) => (
          <TableRow key={index}>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.price}</TableCell>
            <TableCell>{user.rate}</TableCell>
            <TableCell>{user.duration}</TableCell>
            <TableCell>{user.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

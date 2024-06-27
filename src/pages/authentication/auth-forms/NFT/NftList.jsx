import React, { useContext } from 'react';
import { NftContext } from './NftContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function NftTablePage() {
  const { nftData } = useContext(NftContext);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Price</TableCell>
          <TableCell>Rate</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell>Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>9213</TableCell>
          <TableCell>123</TableCell>
          <TableCell>2d 2h 2m 4s</TableCell>
          <TableCell>Flexible</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>9213</TableCell>
          <TableCell>123</TableCell>
          <TableCell>4d</TableCell>
          <TableCell>fixed</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>9213</TableCell>
          <TableCell>123</TableCell>
          <TableCell>4d</TableCell>
          <TableCell>fixed</TableCell>
        </TableRow>
        {nftData.map((nft, index) => (
          <TableRow key={index}>
            <TableCell>{nft.price}</TableCell>
            <TableCell>{nft.rate}</TableCell>
            <TableCell>{nft.duration}</TableCell>
            <TableCell>{nft.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import fetchData from '../../apiRequest/collection';
import { GithubUser } from 'apiPath/apiPath';

const CollectionListPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(GithubUser);
        setData(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Collection List</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Logo</TableCell>
            <TableCell>BannerImg</TableCell>
            <TableCell>Kind</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Collection Address</TableCell>
            <TableCell>BlockChain</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Collection</TableCell>
            <TableCell>WWW.Example.Com</TableCell>
            <TableCell>DESCRIP</TableCell>
            <TableCell>LOGO GAME</TableCell>
            <TableCell>sadasdw</TableCell>
            <TableCell>DIGITAL</TableCell>
            <TableCell>WORK</TableCell>
            <TableCell>1231123</TableCell>
            <TableCell>BSC BLOCKCHAIN</TableCell>
          </TableRow>
          {data.map((collection, index) => (
            <TableRow key={index}>
              <TableCell>{collection.name}</TableCell>
              <TableCell>{collection.url}</TableCell>
              <TableCell>{collection.description}</TableCell>
              <TableCell>{collection.logo}</TableCell>
              <TableCell>{collection.bannerImg}</TableCell>
              <TableCell>{collection.kind}</TableCell>
              <TableCell>{collection.category}</TableCell>
              <TableCell>{collection.collectionAddress}</TableCell>
              <TableCell>{collection.blockchain}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CollectionListPage;

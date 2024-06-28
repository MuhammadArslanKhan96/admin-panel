import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import fetchData from '../../apiRequest/collection';
import { getCollectionData } from 'apiPath/apiPath';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const CollectionListPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(getCollectionData);
        console.log(data);
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
            <TableCell>NFT's</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((collection, index) => (
            <TableRow key={index}>
              <TableCell>{collection.name}</TableCell>
              <TableCell>{collection.url}</TableCell>
              <TableCell>{collection.description}</TableCell>
              <TableCell>{collection.logo_image}</TableCell>
              <TableCell>{collection.banner_image}</TableCell>
              <TableCell>{collection.kind}</TableCell>
              <TableCell>{collection.category}</TableCell>
              <TableCell>{collection.collection_address}</TableCell>
              <TableCell>{collection.blockchain}</TableCell>
              <TableCell>
              <Button variant="contained" color="primary" onClick={() => navigate(`/nft/${collection.id}`)} sx={{ mb: { xs: -3, sm: 4 } }}>
              View NFT's
            </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CollectionListPage;

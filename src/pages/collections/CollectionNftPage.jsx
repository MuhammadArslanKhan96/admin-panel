import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import fetchData from '../../apiRequest/collection';
import { useParams } from 'react-router';
import { getCollectionNftData } from '../../apiPath/apiPath';
import Button from '@mui/material/Button';

const CollectionNftPage = () => {
  const id = useParams('collectionId');
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCollectionNfts = async () => {
      try {
        const data = await fetchData(`${getCollectionNftData}/${id.collectionId}`);
        console.log(data);
        setData(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getCollectionNfts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Grid container spacing={3} padding="60px">
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Collection NFTs</Typography>
        </Stack>
      </Grid>
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
            <TableCell>Stake</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.response.map((nft, index) => (
            <TableRow key={index}>
              <TableCell>{nft.name}</TableCell>
              <TableCell>{nft.description}</TableCell>
              <TableCell>{nft.royalty_commission}</TableCell>
              <TableCell>{nft.primary_owner}</TableCell>
              <TableCell>{nft.type}</TableCell>
              <TableCell>{nft.category}</TableCell>
              <TableCell>{nft.img}</TableCell>
              <TableCell>{nft.collection_id}</TableCell>
              <TableCell>{nft.kind}</TableCell>
              <TableCell>{nft.blockchain}</TableCell>
              <TableCell>{nft.supply_quantity}</TableCell>
              <TableCell>{nft.contact_address}</TableCell>
              <TableCell>{nft.token_id}</TableCell>
              <TableCell>{nft.token_standard}</TableCell>
              <TableCell>{nft.creator_fee}</TableCell>
              <TableCell>{nft.open_auction.price}</TableCell>
              <TableCell>{nft.fix_price.price}</TableCell>
              <TableCell>{nft.mystery_box.price}</TableCell>
              <TableCell>{nft.level}</TableCell>
              <TableCell>{nft.sub_category}</TableCell>
              <TableCell>{nft.insurance_per_hour}</TableCell>
              <TableCell>{nft.listingid}</TableCell>
              <TableCell>{nft.created_at}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(`/nft/${id.collectionId}/${nft.id}`)}
                  sx={{ mb: { xs: -3, sm: 4 } }}
                >
                  View Stake
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default CollectionNftPage;

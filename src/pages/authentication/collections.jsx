// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// project import
import CollectionList from '../collections/CollectionList';
import { useNavigate } from 'react-router-dom';

export default function CollectionListPage() {
  const navigate = useNavigate();

  return (
    <Grid container spacing={1} padding="90px">
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Collection</Typography>
          <Button variant="contained" color="primary" onClick={() => navigate('/collections')} sx={{ mb: { xs: -3, sm: 4 } }}>
            Add Collection
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ overflowX: 'auto' }}>
        <CollectionList />
      </Grid>
    </Grid>
  );
}

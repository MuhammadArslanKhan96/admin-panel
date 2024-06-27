// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
// import AuthWrapper from './AuthWrapper';
import NftList from './auth-forms/NFT/NftList';

// ================================|| LOGIN ||================================ //

export default function Nft() {
  return (
    // <AuthWrapper>
    <Grid container spacing={3} padding="60px">
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">NFT</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ overflowX: 'auto' }}>
        <NftList />
      </Grid>
    </Grid>
    // </AuthWrapper>
  );
}

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
// import AuthWrapper from './AuthWrapper';
import CollectionForm from '../collections/CollectionForm';

// ================================|| LOGIN ||================================ //

export default function CollectionFormPage() {
  return (
    // <AuthWrapper>
    <Grid container spacing={3} padding="60px">
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Collection</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ overflowX: 'auto' }}>
        <CollectionForm />
      </Grid>
    </Grid>
    // </AuthWrapper>
  );
}

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
// import AuthWrapper from './AuthWrapper';
import UserForm from './auth-forms/User/UserForm';

// ================================|| LOGIN ||================================ //

export default function User() {
  return (
    // <AuthWrapper>
    <Grid container spacing={3} padding="60px">
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">User</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <UserForm />
      </Grid>
    </Grid>
    // </AuthWrapper>
  );
}

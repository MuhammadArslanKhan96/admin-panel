import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NftContext } from './NftContext';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import * as Yup from 'yup';
import { Formik } from 'formik';
import styled from 'styled-components';
import AnimateButton from 'components/@extended/AnimateButton';

const Select = styled.select`
  padding: 0.5rem;
  margin-top: 8px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 14px;
`;

export default function NftFormPage() {
  const { setNftData } = useContext(NftContext);
  const navigate = useNavigate();

  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    setNftData((prevData) => [...prevData, values]);
    setSubmitting(false);
    resetForm();
    navigate('/nftlist'); // Navigate to the nft lists after form submission
  };

  return (
    <Formik
      initialValues={{
        price: '',
        rate: '',
        duration: '',
        type: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        price: Yup.string().required('Price is required'),
        rate: Yup.string().required('Rate is required'),
        duration: Yup.string().required('Duration is required'),
        type: Yup.string().required('Type is required')
      })}
      onSubmit={handleFormSubmit}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="price">Price</InputLabel>
                <OutlinedInput
                  id="price"
                  type="number"
                  value={values.price}
                  name="price"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Price"
                  fullWidth
                  error={Boolean(touched.price && errors.price)}
                />
              </Stack>
              {touched.price && errors.price && (
                <FormHelperText error id="standard-weight-helper-text-price">
                  {errors.price}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="rate">Rate</InputLabel>
                <OutlinedInput
                  id="rate"
                  type="number"
                  value={values.rate}
                  name="rate"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Rate"
                  fullWidth
                  error={Boolean(touched.rate && errors.rate)}
                />
              </Stack>
              {touched.rate && errors.rate && (
                <FormHelperText error id="standard-weight-helper-text-rate">
                  {errors.rate}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="duration">Duration</InputLabel>
                <OutlinedInput
                  id="duration"
                  type="number"
                  value={values.duration}
                  name="duration"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Duration"
                  fullWidth
                  error={Boolean(touched.duration && errors.duration)}
                />
              </Stack>
              {touched.duration && errors.duration && (
                <FormHelperText error id="standard-weight-helper-text-duration">
                  {errors.duration}
                </FormHelperText>
              )}
              <InputLabel htmlFor="type">Type</InputLabel>
              <Select id="type" name="type" value={values.type} onBlur={handleBlur} onChange={handleChange}>
                <option value="">Select Type</option>
                <option value="fixed">Fixed</option>
                <option value="flexible">Flexible</option>
              </Select>
              {touched.type && errors.type && (
                <FormHelperText error id="standard-weight-helper-text-type">
                  {errors.type}
                </FormHelperText>
              )}
            </Grid>

            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}
            <Grid item xs={12}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                  Add Nft Details
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

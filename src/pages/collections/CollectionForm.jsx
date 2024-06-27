import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CollectionContext } from './CollectionsContext';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import * as Yup from 'yup';
import { Formik } from 'formik';
// import styled from 'styled-components';
import AnimateButton from 'components/@extended/AnimateButton';

// const Select = styled.select`
//   padding: 0.5rem;
//   margin-top: 8px;
//   border: 1px solid lightgrey;
//   border-radius: 4px;
//   font-size: 14px;
// `;

export default function CollectionFormPage() {
  const { setCollectionData } = useContext(CollectionContext);
  const navigate = useNavigate();

  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    setCollectionData((prevData) => [...prevData, values]);
    setSubmitting(false);
    resetForm();
    navigate('/collection-list'); // Navigate to the collection list page after form submission
  };

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        category: '',
        priceRange: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Name is required'),
        description: Yup.string().required('Description is required'),
        category: Yup.string().required('Category is required'),
        priceRange: Yup.string().required('Price Range is required')
      })}
      onSubmit={handleFormSubmit}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="name">Name</InputLabel>
                <OutlinedInput
                  id="name"
                  type="text"
                  value={values.name}
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  fullWidth
                  error={Boolean(touched.name && errors.name)}
                />
              </Stack>
              {touched.name && errors.name && (
                <FormHelperText error id="standard-weight-helper-text-name">
                  {errors.name}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="description">Description</InputLabel>
                <OutlinedInput
                  id="description"
                  type="text"
                  value={values.description}
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Description"
                  fullWidth
                  error={Boolean(touched.description && errors.description)}
                />
              </Stack>
              {touched.description && errors.description && (
                <FormHelperText error id="standard-weight-helper-text-description">
                  {errors.description}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="category">Category</InputLabel>
                <OutlinedInput
                  id="category"
                  type="text"
                  value={values.category}
                  name="category"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Category"
                  fullWidth
                  error={Boolean(touched.category && errors.category)}
                />
              </Stack>
              {touched.category && errors.category && (
                <FormHelperText error id="standard-weight-helper-text-category">
                  {errors.category}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="priceRange">Price Range</InputLabel>
                <OutlinedInput
                  id="priceRange"
                  type="text"
                  value={values.priceRange}
                  name="priceRange"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Price Range"
                  fullWidth
                  error={Boolean(touched.priceRange && errors.priceRange)}
                />
              </Stack>
              {touched.priceRange && errors.priceRange && (
                <FormHelperText error id="standard-weight-helper-text-priceRange">
                  {errors.priceRange}
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
                  Add Collection
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

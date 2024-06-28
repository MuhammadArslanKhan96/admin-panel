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
        url: '',
        description: '',
        logo_image: '',
        featured_image: '',
        banner_image: '',
        kind: '',
        category: '',
        sub_category: '',
        blockchain: '',
        collection_address: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Name is required'),
        url: Yup.string().required('URL is required'),
        description: Yup.string().required('Description is required'),
        logo_image: Yup.string().required('Logo Image URL is required'),
        featured_image: Yup.string().required('Featured Image URL is required'),
        banner_image: Yup.string().required('Banner Image URL is required'),
        kind: Yup.string().required('Kind is required'),
        category: Yup.string().required('Category is required'),
        sub_category: Yup.string().required('Sub Category is required'),
        blockchain: Yup.string().required('Blockchain is required'),
        collection_address: Yup.string().required('Collection Address is required')
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
                <InputLabel htmlFor="url">URL</InputLabel>
                <OutlinedInput
                  id="url"
                  type="text"
                  value={values.url}
                  name="url"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter URL"
                  fullWidth
                  error={Boolean(touched.url && errors.url)}
                />
              </Stack>
              {touched.url && errors.url && (
                <FormHelperText error id="standard-weight-helper-text-url">
                  {errors.url}
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
                <InputLabel htmlFor="logo_image">Logo Image</InputLabel>
                <OutlinedInput
                  id="logo_image"
                  type="text"
                  value={values.logo_image}
                  name="logo_image"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Logo Image URL"
                  fullWidth
                  error={Boolean(touched.logo_image && errors.logo_image)}
                />
              </Stack>
              {touched.logo_image && errors.logo_image && (
                <FormHelperText error id="standard-weight-helper-text-logo_image">
                  {errors.logo_image}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="featured_image">Featured Image</InputLabel>
                <OutlinedInput
                  id="featured_image"
                  type="text"
                  value={values.featured_image}
                  name="featured_image"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Featured Image URL"
                  fullWidth
                  error={Boolean(touched.featured_image && errors.featured_image)}
                />
              </Stack>
              {touched.featured_image && errors.featured_image && (
                <FormHelperText error id="standard-weight-helper-text-description">
                  {errors.featured_image}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="banner_image">Banner Image</InputLabel>
                <OutlinedInput
                  id="banner_image"
                  type="text"
                  value={values.banner_image}
                  name="banner_image"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Banner Image URL"
                  fullWidth
                  error={Boolean(touched.banner_image && errors.banner_image)}
                />
              </Stack>
              {touched.banner_image && errors.banner_image && (
                <FormHelperText error id="standard-weight-helper-text-banner_image">
                  {errors.banner_image}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="kind">Kind</InputLabel>
                <OutlinedInput
                  id="kind"
                  type="text"
                  value={values.kind}
                  name="kind"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Kind"
                  fullWidth
                  error={Boolean(touched.kind && errors.kind)}
                />
              </Stack>
              {touched.kind && errors.kind && (
                <FormHelperText error id="standard-weight-helper-text-kind">
                  {errors.kind}
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
                <InputLabel htmlFor="sub_category">Sub Category</InputLabel>
                <OutlinedInput
                  id="sub_category"
                  type="text"
                  value={values.sub_category}
                  name="sub_category"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Sub Category"
                  fullWidth
                  error={Boolean(touched.sub_category && errors.sub_category)}
                />
              </Stack>
              {touched.sub_category && errors.sub_category && (
                <FormHelperText error id="standard-weight-helper-text-sub_category">
                  {errors.sub_category}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="blockchain">Blockchain</InputLabel>
                <OutlinedInput
                  id="blockchain"
                  type="text"
                  value={values.blockchain}
                  name="blockchain"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Blockchain"
                  fullWidth
                  error={Boolean(touched.blockchain && errors.blockchain)}
                />
              </Stack>
              {touched.blockchain && errors.blockchain && (
                <FormHelperText error id="standard-weight-helper-text-blockchain">
                  {errors.blockchain}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="collection_address">Collection Address</InputLabel>
                <OutlinedInput
                  id="collection_address"
                  type="text"
                  value={values.collection_address}
                  name="collection_address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter Collection Address"
                  fullWidth
                  error={Boolean(touched.collection_address && errors.collection_address)}
                />
              </Stack>
              {touched.collection_address && errors.collection_address && (
                <FormHelperText error id="standard-weight-helper-text-collection_address">
                  {errors.collection_address}
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

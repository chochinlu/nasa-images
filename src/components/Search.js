import React from 'react';
import { Formik, Form, Field } from 'formik';
// import nasa from '../images/nasa.png';
import { Button, InvertButton, SearchWrapper } from './style';

const SearchForm = ({ handleReset, isSubmitting, values, ...props }) => (
  <Form>
    <Field type="text" name="query" placeholder="keyword" />
    <Button type="submit" disabled={isSubmitting}>
      Search
    </Button>
    <InvertButton
      type="reset"
      onClick={handleReset}
      disabled={values.query === '' ? 'disabled' : ''}
    >
      Clear
    </InvertButton>
  </Form>
);

const initValues = { query: '' };

const NASA_QUERY_URL = 'https://images-api.nasa.gov/search?media_type=image&q=';
const queryUrl = query => `${NASA_QUERY_URL}${query}`;

const Search = props => {
  return (
    <SearchWrapper>
      <Formik
        initialValues={initValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          props.queryImage(queryUrl(values.query));
          resetForm(initValues);
        }}
        component={SearchForm}
      />
    </SearchWrapper>
  );
};

export default Search;

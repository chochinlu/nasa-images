import React from 'react';
import { Formik, Form, Field } from 'formik';

const SearchForm = ({ handleReset, isSubmitting, ...props }) => (
  <Form>
    <Field type="text" name="query" placeholder="image keyword" />
    <button type="submit" disabled={isSubmitting}>
      Search
    </button>
    <button type="reset" onClick={handleReset}>
      Clear
    </button>
  </Form>
);

const initValues = { query: '' };

const NASA_QUERY_URL = 'https://images-api.nasa.gov/search?media_type=image&q=';
const queryUrl = query => `${NASA_QUERY_URL}${query}`;

const Search = props => {
  return (
    <div>
      <Formik
        initialValues={initValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          props.queryImage(queryUrl(values.query));
          resetForm(initValues);
        }}
        component={SearchForm}
      />
      <p>Search type: image</p>
    </div>
  );
};

export default Search;

import React from 'react';
import { Formik, Form, Field } from 'formik';

const SearchForm = ({ handleReset, isSubmitting, ...props }) => (
  <Form>
    <Field type="text" name="query" />
    <button type="submit" disabled={isSubmitting}>
      Search - {isSubmitting}
    </button>
    <button type="reset" onClick={handleReset}>
      Clear
    </button>
  </Form>
);

const initValues = { query: '' };

const Search = props => {
  return (
    <div>
      <h1>Search</h1>
      <Formik
        initialValues={initValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          props.queryImage(values.query);
          resetForm(initValues);
        }}
        component={SearchForm}
      />
      <p>Search type: image</p>
    </div>
  );
};

export default Search;

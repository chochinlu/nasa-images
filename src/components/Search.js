import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background-color: blue;
  font-size: 3rem;
  padding: 5px 10px;
  border: none;
  margin-right: 1rem;
`;

const InvertButton = styled(Button)`
  color: blue;
  background-color: white;
`;

const SearchForm = ({ handleReset, isSubmitting, ...props }) => (
  <Form>
    <Field type="text" name="query" placeholder="image keyword" />
    <Button type="submit" disabled={isSubmitting}>
      Search
    </Button>
    <InvertButton type="reset" onClick={handleReset}>
      Clear
    </InvertButton>
  </Form>
);

const initValues = { query: '' };

const NASA_QUERY_URL = 'https://images-api.nasa.gov/search?media_type=image&q=';
const queryUrl = query => `${NASA_QUERY_URL}${query}`;

const SearchWrapper = styled.div`
  background-color: orange;
  padding: 2rem;

  input {
    padding: 5px 10px;
    font-size: 3rem;
    margin-right: 2rem;
    border: none;
  }
`;

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

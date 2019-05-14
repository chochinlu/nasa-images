import React, { useState } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin:0;
    padding: 0;
    box-sizing: inherit;    
  }

  html {
    font-family: "Lato", sans-serif;
    font-size: 62.5%;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
  }
`;

const Main = styled.div`
  padding: 1rem;
  /* border: 1px solid red; */
`;

const Info = styled.h3`
  font-size: 3rem;
  margin: 1rem;
`;

function App() {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState(null);
  const [links, setLinks] = useState(null);

  const queryImage = async url => {
    try {
      setFetching(true);
      const result = await axios.get(url);
      const { items, links } = result.data.collection;
      setItems(items);
      if (links) {
        setLinks(links);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setFetching(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <div>
        <Search queryImage={queryImage} />
        <Main>
          {fetching && <Info>Fetching .....</Info>}
          {error && <Info>{error}</Info>}
          <SearchResult items={items} links={links} queryImage={queryImage} />
        </Main>
      </div>
    </>
  );
}

export default App;

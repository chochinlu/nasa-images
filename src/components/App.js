import React, { useState } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';

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

function App() {
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState(null);
  const [links, setLinks] = useState(null);

  const queryImage = async url => {
    try {
      setFetching(true);
      const result = await axios.get(url);
      // console.log(result);
      const { items, links } = result.data.collection;
      setItems(items);
      setLinks(links);
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
        {fetching && <p>fetching result .....</p>}
        {error && <p>{error}</p>}
        <SearchResult items={items} links={links} queryImage={queryImage} />
      </div>
    </>
  );
}

export default App;

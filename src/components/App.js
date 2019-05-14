import React, { useState } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import axios from 'axios';
import { GlobalStyle, Main, Info } from './style';

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

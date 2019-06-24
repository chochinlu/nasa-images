import React, { useState } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import axios from 'axios';
import { GlobalStyle, Main, Info, Result } from './style';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

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
      <ThemeProvider theme={theme}>
        <Main>
          <Search queryImage={queryImage} />
          <Result>
            {fetching && <Info>Fetching .....</Info>}
            {error && <Info>{error}</Info>}
            <SearchResult items={items} links={links} queryImage={queryImage} />
          </Result>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;

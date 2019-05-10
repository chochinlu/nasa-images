import React, { useState } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import axios from 'axios';

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
    <div>
      <Search queryImage={queryImage} />
      {fetching && <p>fetching result .....</p>}
      {error && <p>{error}</p>}
      <SearchResult items={items} links={links} queryImage={queryImage} />
    </div>
  );
}

export default App;

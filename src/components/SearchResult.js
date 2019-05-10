import React from 'react';

const SearchResult = ({ items, links }) => {
  if (!items) {
    return null;
  }

  if (items.length === 0) {
    return <h3>Sorry, no matching results.</h3>;
  }

  return (
    <div>
      {items && <pre>{JSON.stringify(items[0], null, 2)}</pre>}
      {links && <pre>{JSON.stringify(links, null, 2)}</pre>}
    </div>
  );
};

export default SearchResult;

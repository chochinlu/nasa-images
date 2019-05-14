import React from 'react';
import { Gallery, Thumbnail, Info, PreBlock } from './style';

// {
//   "data": [
//     {
//       "center": "JPL",
//       "description": "Mars Rover Studies Soil on Mars",
//       "nasa_id": "PIA07081",
//       "media_type": "image",
//       "description_508": "Mars Rover Studies Soil on Mars",
//       "secondary_creator": "NASA/JPL",
//       "title": "Mars Rover Studies Soil on Mars",
//       "keywords": [
//         "Mars",
//         "Mars Exploration Rover MER"
//       ],
//       "date_created": "2004-11-30T21:29:24Z"
//     }
//   ],
//   "href": "https://images-assets.nasa.gov/image/PIA07081/collection.json",
//   "links": [
//     {
//       "rel": "preview",
//       "render": "image",
//       "href": "https://images-assets.nasa.gov/image/PIA07081/PIA07081~thumb.jpg"
//     }
//   ]
// }
// [
//   {
//     "rel": "next",
//     "prompt": "Next",
//     "href": "https://images-api.nasa.gov/search?q=mars&media_type=image&page=2"
//   }
// ]

const SearchResult = ({ items, links, queryImage }) => {
  if (!items) {
    return null;
  }

  if (items.length === 0) {
    return <Info>Sorry, no matching results.</Info>;
  }

  return (
    <Gallery>
      {items &&
        items
          // .slice(0, 3)
          .map(item => (
            <Thumbnail
              key={item.data[0].nasa_id}
              src={item.links[0].href}
              alt={`nasa_image-${item.data.nasa_id}`}
            />
          ))}
      {links &&
        links.map(link => (
          <button key={link.rel} onClick={() => queryImage(link.href)}>
            {link.rel === 'next' ? `${link.prompt} >` : `< ${link.prompt}`}
          </button>
        ))}

      {items && <PreBlock>{JSON.stringify(items[0], null, 2)}</PreBlock>}
      {links && <PreBlock>{JSON.stringify(links, null, 2)}</PreBlock>}
    </Gallery>
  );
};

export default SearchResult;

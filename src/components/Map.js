// components/Map.js

import React from 'react';

function Map({ selectedProfile }) {
  return (
    <div className="map">
      {selectedProfile && <p>Map for {selectedProfile.name}</p>}
    </div>
  );
}

export default Map;

// components/ProfileCard.js

import React from 'react';

function ProfileCard({ profile, onSelect }) {
  return (
    <div className="profile-card" onClick={onSelect}>
      <img src={profile.photo} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button>View on Map</button>
    </div>
  );
}

export default ProfileCard;

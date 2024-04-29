// components/ProfileList.js

import React from 'react';
import ProfileCard from './ProfileCard';
import profilesData from '../components/data/profiles';

function ProfileList({ onSelectProfile }) {
  return (
    <div className="profile-list">
      {profilesData.map(profile => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onSelect={() => onSelectProfile(profile)}
        />
      ))}
    </div>
  );
}

export default ProfileList;

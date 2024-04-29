// components/AdminDashboard.js

import React, { useState } from 'react';
import profilesData from '../components/data/profiles';

function AdminDashboard() {
  const [profiles, setProfiles] = useState(profilesData);
  const [newProfile, setNewProfile] = useState({
    id: profiles.length + 1,
    name: '',
    photo: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleAddProfile = () => {
    setProfiles([...profiles, newProfile]);
    setNewProfile({
      id: profiles.length + 1,
      name: '',
      photo: '',
      description: ''
    });
  };

  const handleDeleteProfile = (id) => {
    const updatedProfiles = profiles.filter(profile => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Add New Profile</h3>
        <input
          type="text"
          name="name"
          value={newProfile.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="photo"
          value={newProfile.photo}
          onChange={handleInputChange}
          placeholder="Photo URL"
        />
        <input
          type="text"
          name="description"
          value={newProfile.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <button onClick={handleAddProfile}>Add Profile</button>
      </div>
      <div>
        <h3>Profiles</h3>
        <ul>
          {profiles.map(profile => (
            <li key={profile.id}>
              {profile.name}
              <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;

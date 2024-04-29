// App.js

import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import Map from './components/Map';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className="app">
      <h1>Profile Viewer</h1>
      <div className="main-content">
        <ProfileList onSelectProfile={setSelectedProfile} />
        <Map selectedProfile={selectedProfile} />
      </div>
      <AdminDashboard />
    </div>
  );
}

export default App;

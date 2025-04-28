import { useState } from 'react';
import profilePlaceholder from '../assets/profile-placeholder.webp';
import './index.css';

const Dashboard = () => {
  const [user] = useState({
    name: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    photo: profilePlaceholder,
  });

  return (
    <div style={{ backgroundColor: '#F7F8F9', minHeight: '100vh', minWidth: '100vw' }}>
      {/* Top White Section */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '20px 20px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '600', color: '#2d3436' }}>Account Settings</h1>
      </div>

      {/* Profile Info Section */}
      <div style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{ position: 'relative' }}>
          <img
            src={user.photo}
            alt="Profile"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          {/* Camera Icon Overlay */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            backgroundColor: '#6c5ce7',
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid white',
            cursor: 'pointer'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
          </div>
        </div>

        {/* User Info */}
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#2d3436', marginBottom: '5px' }}>
            {user.name}
          </h2>
          <p style={{ fontSize: '1rem', color: '#636e72' }}>{user.email}</p>
        </div>
      </div>

      {/* Bio Section */}
      <div style={{
        padding: '20px',
        borderBottom: '1px dashed #ccc'
      }}>
        <p style={{
          fontSize: '1rem',
          color: '#2d3436',
          lineHeight: '1.6',
        }}>
          Welcome to your dashboard! Here you can manage your account settings, update your profile, and explore various features tailored just for you. Feel free to navigate through the options available and make the most out of your experience with us.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

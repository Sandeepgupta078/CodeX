import { Link } from 'react-router-dom';
import './index.css';

const HomePage = () => {
  return (
    <div className="welcome-page" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingBottom: '80px',
      background: 'linear-gradient(to bottom, #f0f4f8, #d9e2ec)'
    }}>
      <div className="container">
        <div style={{ maxWidth: '600px', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: '#102a43',
            marginBottom: '20px'
          }}>Welcome to CodeX</h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#334e68',
            marginBottom: '10px',
            lineHeight: '1.6'
          }}>Discover the best platform to enhance your coding skills and collaborate with a vibrant community of developers.</p>
          <p style={{
            fontSize: '1.1rem',
            color: '#334e68',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>Join us to unlock your potential and take your coding journey to the next level.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/register" className="btn btn-primary">Create Account</Link> 
            <Link to="/login" className="btn btn-login">Already Registered? Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
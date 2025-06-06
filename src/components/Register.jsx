import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    hasExperience: 'no'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.fullName && formData.phone && formData.email &&
    formData.password && formData.company;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Here you would typically make an API call to register
      // For now, we'll just redirect to dashboard
      navigate('/dashboard');
    }
  };

  return (
    <div className="container" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '500px',
      paddingBottom: '40px'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#1D2226',
          marginBottom: '20px'
        }}>Create your <br /> CodeX Account</h1>
        <p style={{
          fontSize: '1rem',
          color: '#2d3436',
          marginBottom: '10px',
          lineHeight: '1.6'
        }}>Join us to explore the best opportunities and resources for your growth.</p>
        <p style={{
          fontSize: '1rem',
          color: '#2d3436',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>Already have an account? <Link to="/login" style={{ color: '#6c5ce7', fontWeight: '600' }}>Login</Link></p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name<span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Sandy Smith"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number<span style={{ color: 'red' }}>*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="9876******8"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email<span style={{ color: 'red' }}>*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Sandy@gmail.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password<span style={{ color: 'red' }}>*</span></label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company Name<span style={{ color: 'red' }}>*</span></label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="company name"
          />
        </div>

        <div className="form-group">
          <label style={{
            position: 'static',
            color: '#2d3436',
            padding: 0,
            background: 'transparent'
          }}>Are you an Agency?<span style={{ color: 'red' }}>*</span></label>
          <div className="radio-group">
            <div className="radio-option">
              <input
                type="radio"
                id="yes"
                name="hasExperience"
                value="yes"
                checked={formData.hasExperience === 'yes'}
                onChange={handleChange}
              />
              <label htmlFor="yes" style={{
                position: 'static',
                color: '#2d3436',
                padding: '0',
                background: 'transparent'
              }}>Yes</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="no"
                name="hasExperience"
                value="no"
                checked={formData.hasExperience === 'no'}
                onChange={handleChange}
              />
              <label htmlFor="no" style={{
                position: 'static',
                color: '#2d3436',
                padding: 0,
                background: 'transparent'
              }}>No</label>
            </div>
            
          </div>
        </div>

        <button
          type="submit"
          className={isFormValid ? 'btn btn-primary' : 'btn btn-disabled'}
          // style={{ width: '100%', marginTop: '20px' }}
          style={{
            width: '100%',
            marginTop: '30px',
            backgroundColor: isFormValid ? '#6246ea' : '#ccc',
            color: '#fff',
            padding: '12px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
          }}
          disabled={!isFormValid}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;

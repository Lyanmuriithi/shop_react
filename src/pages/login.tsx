import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const apiUrl = 'http://127.0.0.1:5000/login';
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { access_token } = response.data;

      // Save the access token to local storage
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('isLogedIn',"true")
      console.log('Login successful.', response.data);
      setIsLoggedIn(true);
      setError('');

      // Redirect to the product page after successful login
      navigate('/product');
    } catch (error) {
      console.error('Login failed.');
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    // Clear the access token from local storage
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <div>
          <p>Welcome! You are logged in.</p>
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;

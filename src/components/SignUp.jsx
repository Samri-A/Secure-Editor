import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Link,
} from '@mui/material';
import axios  from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

async function addUser(formdata) {
    const res = await axios.post('/api/signup', formdata);
    return res;
  }
const SignUp = () => {
   
const [message, setMessage] = useState('');
      const [formdata, setFormdata] = useState({
          name: '',
          email: '',
          password: ''
      });
      const navigate = useNavigate();
      
      const handleChange = (e) =>{
        setFormdata({
          ...formdata,
        [e.target.name]: e.target.value})
      }
      const handlesubmit = async (e) =>{
      e.preventDefault();
       try{
      const response = await addUser(formdata);
      setMessage(response.data.message);
      navigate('/editor');
    }
    catch(error){
      setMessage(error.response?.data?.message || 'Error signing up. Please try again.');
    }
      }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Create Account
        </Typography>
        <Box component="form" noValidate autoComplete="off" onSubmit={handlesubmit}>
          <TextField
            name="name"
            fullWidth
            margin="normal"
            label="Full Name"
            value={formdata.name}
            onChange={handleChange}
            type="text"
            required
          />
          <TextField
            name="email"
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            value={formdata.email}
            onChange={handleChange}
            required
          />
          <TextField
            name="password"
            value={formdata.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            required
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 2, borderRadius: 2 }}
            size="large"
          >
            Sign Up
          </Button>
          {message && (
              <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
                {message}
              </Typography>
             )}
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <Link component={RouterLink} to="/signin">
              Sign in
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;

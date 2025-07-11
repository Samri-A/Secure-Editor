  import { useState } from 'react';
  import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Paper,
    Link,
  } from '@mui/material';
  import { Link as RouterLink } from 'react-router-dom';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  async function addUser(formdata) {
    const res = await axios.post('/api/login', formdata);
    return res;
  }
  const SignIn = () => {
      const [message, setMessage] = useState('');
      const [formdata, setFormdata] = useState({
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
      setMessage(response.data.message)
      navigate('/editor');
    }catch(error){{
      setMessage(error.response?.data?.message || 'Error signing in. Please try again.');
    }}
      }
   
    return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, mt: 8, borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom align="center">
            Sign In
          </Typography>
          <Box component="form" noValidate autoComplete="off" onSubmit={ handlesubmit}>
              
            <TextField
            name='email'
              fullWidth
              margin="normal"
              label="Email"
              type="email"
              value = {formdata.email}
              onChange={handleChange}
              required
            />
            <TextField
            name='password'
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              value = {formdata.password}
              onChange={handleChange}
              required
            />        
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2, borderRadius: 2 }}
              size="large"
              type="submit"
            >
              Sign In
            </Button>
            {message && (
              <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
                {message}
              </Typography>
            )}

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don't have an account?{' '}
              <Link component={RouterLink} to="/signup">
                Create one
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    );
  };

  export default SignIn;

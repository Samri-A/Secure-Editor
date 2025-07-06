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
async function addUser(formdata) {
   const res = await axios.post('http://localhost:5000/api/signin', formdata);
   return res;
}
const SignIn = () => {
    const [message, setMessage] = useState('');
    const [formdata, setFormdata] = useState({
        username: '',
        email: '',
        password: ''
    });
    
    const handleChange = (e) =>{
       setFormdata({
        ...formdata,
       [e.target.name]: e.target.value})
    }
    const handlesubmit = (e) =>{
     e.preventDefault();
    }
   try{
    const response = addUser(formdata);
    setMessage(response.data.message);
   }catch(error){{
    setMessage('Error signing in. Please try again.');
   }}
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Sign In
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <form onSubmit={ handlesubmit}>
            <TextField
            fullWidth
            margin="normal"
            label="Username"
            type="text"
            value={formdata.username}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            value = {formdata.email}
            onChange={handleChange}
            required
          />
          <TextField
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
          </form>

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

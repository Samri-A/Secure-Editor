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
import { Link as RouterLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Create Account
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            type="text"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            required
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, borderRadius: 2 }}
            size="large"
          >
            Sign Up
          </Button>

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

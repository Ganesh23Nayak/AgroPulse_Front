/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

export default function RegisterView() {
  const router = useRouter();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showconPassword, setShowconPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [ emailc, setEmailc ] = useState('');
  const [ phonec, setPhonec ] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passstrength, setpassstrength] = useState('');
  const [passmatched, setpassmatched] = useState(false);
  
  function passmatch(pass1, pass2) {
    if (pass1 === pass2) {
      return true;
    }
    return false;
  }
  function checkPasswordStrength() {
    // Define a scoring system
    const minLength = 4;
    
    // Regular expressions to match character types
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[^a-zA-Z0-9]/;
  
    let score = 0;
  
    // Check the length
    if (password.length >= minLength) {
      score += 2;
    }
  
    // Check lowercase letters
    if (password.match(lowercaseRegex)) {
      score+= 1;
    }
  
    // Check uppercase letters
    if (password.match(uppercaseRegex)) {
      score+=1;
    }
  
    // Check numbers
    if (password.match(numberRegex)) {
      score+=1;
    }
  
    // Check special characters
    if (password.match(specialCharRegex)) {
      score+=1;
    }
  
    // Additional bonus for a mix of character types
    if (score === 5 || score === 6) {
      score+=1;
    }
    
    if (score < 5) return 'Weak';
    if (score < 7) return 'Medium';
    if (score >= 7) return 'Strong';
    return '';
  }
  const toggleEmailPhone = () => {
    setShowEmail(!showEmail);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    // Remove any non-numeric characters from the phone number
    const numericPhone = phone.replace(/\D/g, '');
  
    // Check if the numeric phone number has 10 digits and starts with 7, 8, or 9
    return /^[789]\d{9}$/.test(numericPhone);
  };
  
  
  
  const handleRegister = async (e) => {
    e.preventDefault();
    // Validate registration data and send it to the server
   
  };

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Card
        sx={{
          p: 5,
          maxWidth: 450,
          width: '100%',
          overflow: 'scroll',
          overflowX: 'hidden',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Typography variant="h4">Register for an Account</Typography>
        <Stack direction="column" spacing={1} sx={{pt:1}}>
        <Typography variant="body">Sign up quickly using socials</Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{pt:1}}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="contained"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="contained"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="contained"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack>

        <Divider sx={{ my: 3 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            OR
          </Typography>
        </Divider>

        <Stack spacing={3} sx={{ width: '100%' }}>
          <TextField required
            label="First Name"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
            helperText="What do you go by?"
          />
          <TextField required
            label="Last Name"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
            helperText="We need this to use Honorifics"
          />
          <TextField required
            label={showEmail? "Email" : "Phone"}
            type={showEmail ? 'email' : 'number'}
            name={showEmail? "email" : "phone"}
            helperText="You're gonna need this to log in"
            error={showEmail? !isValidEmail(emailc) : !isValidPhone(phonec)}
            onChange={(e) => 
              showEmail? setEmailc(e.target.value) : setPhonec(e.target.value)
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleEmailPhone} edge="end">
                    <Iconify icon={showEmail ? 'solar:phone-broken' : 'logos:google-gmail'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField required
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            helperText={passstrength}
            onChange={(e) => {setPassword(e.target.value);setpassstrength(checkPasswordStrength(e.target.value));setpassmatched(passmatch(e.target.value, confirmPassword))}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            autoComplete='new-password'
          />
          <TextField required
            label="Confirm Password"
            type={showconPassword? 'text' : 'password'}
            value={confirmPassword}
            error={!passmatched}
            onChange={(e) => {setConfirmPassword(e.target.value);setpassmatched(passmatch(e.target.value, password));}}
            helperText={!passmatched? "Passwords don't match" : null}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowconPassword(!showconPassword)} edge="end">
                      <Iconify icon={showconPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
          />
        </Stack>

        <Button
          fullWidth
          size="large"
          variant="contained"
          color="inherit"
          sx={{ mt: 3 }}
          onClick={handleRegister}
        >
          Register
        </Button>
        
        <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ mt: 3 }}>
          <Link variant="subtitle2" underline="hover" onClick={() => router.push('/login')} style={{cursor: 'pointer'}}>
            Already have an account? Login here
          </Link>
        </Stack>
      </Card>
    </Box>
  );
}

import Axios from 'axios';
// import { Axios } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

// import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';


// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();
  const navigate = useNavigate();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async(e) => {
    e.preventDefault();
    const emails = document.getElementsByName("email")[0].value;
    const passwords = document.getElementsByName("password")[0].value;

    const data={
      email :emails,
      password : passwords
    };

    console.log('Form Data:', data);
  

		Axios.post("http://localhost:3000/api/auth/login", data, {
    headers: {
        'Content-Type': 'application/json',
    },
      })
      .then((response) => {
          if (response.status === 200) {
              console.log('Login Successful');
              localStorage.setItem('user', JSON.stringify(response.data.user));
              console.log(JSON.parse(localStorage.getItem('user')).role);
              const userData = response.data.user;
              if (userData.role === 'LABOUR') {
                  navigate('/employee');
              } else if (userData.role === 'CUSTOMER') {
                  navigate('/client');
              } else {
                  navigate('/admin');
              }
          } else {
              console.error('Login Failed:', response.statusText);
              // Handle login failure here
          }
      })
			.catch((error) => {
				// Handle any errors
				alert(error);
				console.error('Error:', error);
			});
    
    router.push('/dashboard');
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" sx={{color:"black"}}/>

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          sx={{color:"black"}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <a href='/'>
      <img src="../../../public/favicon/agrofav.png" alt="logo" className="logoIcon"/>
        </a>
      

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }} href="/register">
              Get started
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
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

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}

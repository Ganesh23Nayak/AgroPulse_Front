import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import {Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));
  
export default function Admin() {
  const router = useNavigate();
  return (
    <Container style={{ marginTop: '200px' }}>
	 <Stack  direction="row"
  justifyContent="space-around"
  alignItems="center"
  spacing={12} >
    

<Item onClick={router("/admin")} >
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia component="img"
          height="140"
          image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="green iguana"
		  />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Admin
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Manage Admins
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
	</Item>

     

	<Item>
      <Card sx={{ maxWidth: 345 }} onClick={() => router("/admin/user")}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="green iguana"
		  />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Customers
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Manage customers
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
	</Item>

	<Item>
      <Card sx={{ maxWidth: 345 }} onClick={router("/admin/user")}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="green iguana"
		  />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Farmers
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage Farmers
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
	</Item>

	</Stack>   
    </Container>
  );
}








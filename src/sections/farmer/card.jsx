import * as React from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export default function FarmerCard() {
const [value1, setValue1] = React.useState(2);
const [value2, setValue2] = React.useState(3);
  return (
    <Stack direction="row"
    spacing={2}>
    <Card sx={{ maxWidth: 345,}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1609252509102-aa73ff792667?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Darshan&apos;s Rating
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Tractor Owner
          </Typography>
          <Rating
        name="simple-controlled"
        value={value1}
        onChange={(event, newValue) => {
            setValue1(newValue);
        }}
        />
        </CardContent>
      </CardActionArea>
</Card>
<Card sx={{ maxWidth: 345 ,marginTop: 5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1609252509102-aa73ff792667?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
          alt="farmer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ram&apos;s Rating
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Tractor Owner
          </Typography>
          <Rating
        name="simple-controlled"
        value={value2}
        onChange={(event, newValue) => {
          setValue2(newValue);
        }}
      />
        </CardContent>
      </CardActionArea>
    </Card>

<Card sx={{ maxWidth: 345 ,marginTop: 5}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1609252509102-aa73ff792667?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
          alt="farmer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Alice Rating
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Tractor Owner
          </Typography>
          <Rating
        name="simple-controlled"
        value={value2}
        onChange={(event, newValue) => {
          setValue2(newValue);
        }}
      />
        </CardContent>
      </CardActionArea>
    </Card>





    </Stack>
    
  );
}

import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
      />
    </div>
  );
}
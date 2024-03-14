import React, { useState } from 'react';

import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

import './MessageList.css'; // Import CSS for styling (create this file with your styles)
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const messages = [
  { sender: 'Alice', content: 'Hi there!' },
  { sender: 'Bob', content: 'Hey! How are you?' },
  { sender: 'Bob1', content: 'Lmao' },
  { sender: 'Bob2', content: 'Hehe' },
  { sender: 'Bob3', content: ':3' },
  { sender: 'Bob4', content: 'XD' },
  { sender: 'Bob5', content: '0.0' },
  { sender: 'Bob6', content: 'Heya! How are you?' },
  { sender: 'Bob7', content: 'Hehe! How are you?' },
  { sender: 'Bob8', content: 'Hmm! How are you?' },
  { sender: 'Bob9', content: 'Lol! How are you?' },
  { sender: 'Bob10', content: 'Kiki! How are you?' },
  { sender: 'Bob11', content: 'Sup?' },
  { sender: 'Bob12', content: 'Hey! How are you?' },
];

const MessageList = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedSender, setSelectedSender] = useState(null);

const handleClickOpen = () => {
  setOpen(true);
};

  
  const handleSenderClick = (sender) => {
    setSelectedSender(sender);
  };
const handleClose = () => {
  setOpen(false);
};
const handleButtonClick = async(e) => {
    e.preventDefault();
    const emails = document.getElementsByName("email")[0].value;
    const names = document.getElementsByName("name")[0].value;
    const phones = document.getElementsByName("phone")[0].value;
    const LandSize = document.getElementsByName("land_Size")[0].value;

    const data={
      email :emails,
      name : names,
      phone : phones,
      land_Size : LandSize
    };
    console.log('Form Data:', data);
    handleClose();
  }



  return (
    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} sx={{ height: '100%', overflowY: 'auto' }}>
      <Item sx={{ flex: '0 0 30%', minWidth: '200px', maxHeight: '80vh', overflowY: 'auto' }}>
        <div className="message-list-container">
          <div className="message-list">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message-item ${message.sender === selectedSender ? 'selected' : ''}`} 
                onClick={() => handleSenderClick(message.sender)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSenderClick(message.sender);
                  }
                }}
                role="button" 
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSenderClick(message.sender);
                  }
                }}
              >
                <div className="message-sender">{message.sender}</div>
              </div>
              
            ))}
          </div>
          <Box>
              <Button variant="contained" sx={{ width: '10%' ,position: 'absolute',
            bottom: 105, // Adjust this value to position the box where you want
            left: '750px', // Center horizontally
            transform: 'translateX(-100%)', // Center horizontally
            zIndex: 1,
            textAlign: 'left',}} style={{ marginTop: '625px',}} onClick={handleClickOpen}>Add Customer</Button>
            
            </Box>
        </div>
        <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const {email} = formJson;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Enter full name"
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="phone"
            name="phone"
            label="Phone Number"
            type="numeric"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="land_Size"
            name="land_Size"
            label="Enter Land Size"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleButtonClick}>Add Client</Button>
        </DialogActions>
      </Dialog>



      </Item>
      <Item sx={{ flex: '0 0 70%' }}>

        <div className="message-list-container">
          <div className="message-list">
            {selectedSender === null ? (
              <div className="empty-page">Select a sender to view messages.</div>
            ) : (
              messages
                .filter((message) => message.sender === selectedSender)
                .map((message, index) => (
                  <div key={index} className={`message-item ${message.sender === 'You' ? 'sent' : 'received'}`}>
                    <div className="message-content">{message.content}</div>
                   
                  </div>
                ))
            )}
          </div>
        </div>
      </Item>
    </Stack>
  );
};

export default MessageList;

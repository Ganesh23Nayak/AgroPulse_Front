import React, { useState } from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
// import Alert from '@mui/material/Alert';
// import CheckIcon from '@mui/icons-material/Check';


// import FarmerCard from '../farmer/card';

// import './MessageList.css'; // Import CSS for styling (create this file with your styles)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AdminFarmer = () => {
  
  const [selectedSender, setSelectedSender] = useState(null);


  
  const handleSenderClick = (sender) => {
    setSelectedSender(sender);
  };


const messages = [
  { sender: 'Ram', equipment:'Tractor',Rating:4.5,phone:1909090912,email:"cddssd@gmail.com",loction:"Karkala"}, 
  { sender: 'Sham', equipment:'Planter',Rating:3.5,phone:19097512,email:"csfdsa@gmail.com",loction:"Karkala"}, 
  { sender: 'Alice', equipment:'Tiller',Rating:4.5,phone:190990912,email:"cadSs@gmail.com",loction:"Karkala"}, 
  { sender: 'Raju', equipment:'Harvester',Rating:5,phone:1909090912,email:"ffgrtc@gmail.com",loction:"Karkala"}, 
  
  

  
];

 

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
            
            
          </div>
          
      </Item>

      {/* <Item sx={{ flex: '0 0 10%' }}>
        <Button variant="contained" sx={{ width: '100%' }}>Send</Button>
      </Item> */}

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
                    <div className="message-content">Name :{message.sender}</div>
                    <div className="message-content">Phone :{message.phone}</div>
                    <div className="message-content">Email :{message.email}</div>
                    <div className="message-content">Location :{message.location}</div>
                    <div className="message-content">Equipments :{message.equipment}</div>
                   
                  </div>
                ))
            )}
          </div>
        </div>
      </Item>
    </Stack>
  );
};

export default AdminFarmer;

import React, { useState } from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

import FarmerCard from '../farmer/card';

// import './MessageList.css'; // Import CSS for styling (create this file with your styles)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const messages = [
  { sender: 'Alice', content: <FarmerCard/> },
  { sender: 'Bob', content: 'Hey! How are you?' },
];

const AdminFarmer = () => {
  const [selectedSender, setSelectedSender] = useState(null);

  const handleSenderClick = (sender) => {
    setSelectedSender(sender);
  };

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

export default AdminFarmer;

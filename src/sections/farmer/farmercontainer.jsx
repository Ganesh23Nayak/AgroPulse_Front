import React from 'react';

import FarmerCard from './card'; // Assuming the FarmerCard component is in a separate file

const FarmerCardsContainer = () => (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
      <FarmerCard />
      <FarmerCard />
      <FarmerCard />
    </div>
  )

export default FarmerCardsContainer;

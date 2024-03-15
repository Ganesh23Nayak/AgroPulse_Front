import axios from "axios";

export default async function getFarmerDb() {    
    try {
      const response = await axios.get("http://localhost:3000/api/clients");
  
      if (!response.ok) {
        return null;
      }
  
      const jsonData = await response.json();
      
      if(jsonData.data) {
        const users = await Promise.all(jsonData.data.map(async (farmer, index) => ({
          fid: farmer.fid,
          name: `${farmer.fname} ${farmer.lname}`,
          avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
          equipment: farmer.equipment,
          rating: farmer.rating,
          status: farmer.status
        })));
        return users;
      } 
      return null;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  }
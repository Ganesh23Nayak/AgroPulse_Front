import axios from "axios";

export default async function getclientDb() {    
    try {
      const response = await axios.get("http://localhost:3000/api/clients");
  
      if (!response.ok) {
        return null;
      }
  
      const jsonData = await response.json();
      
      if(jsonData.data) {
        const users = await Promise.all(jsonData.data.map(async (client, index) => ({
          fid: client.fid,
          name: `${client.fname} ${client.lname}`,
          avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
          equipment: client.equipment,
          rating: client.rating,
          status: client.status
        })));
        return users;
      } 
      return null;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  }
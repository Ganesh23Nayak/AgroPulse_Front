export default async function getFarmerDb() {
    async function fetchsize(id) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/farmers/farmsize/${id}`);
        const jsonData = await response.json();
        if(!jsonData.data[0].size){
            return null;
        }
        return jsonData.data[0].size;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        return null;
      }
    }

    async function fetchfarms(id) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/farmers/farms/${id}`);
        const jsonData = await response.json();
        if(!jsonData.data[0].count){
            return null;
        }
        return jsonData.data[0].count;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        return null;
      }
    }
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/farmers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        return null;
      }
  
      const jsonData = await response.json();
      
      if(jsonData.data) {
        const users = await Promise.all(jsonData.data.map(async (farmer, index) => ({
          fid: farmer.fid,
          name: `${farmer.fname} ${farmer.lname}`,
          avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
          contact: farmer.email ? `${farmer.phone}   ${farmer.email}` : farmer.phone,
          address: farmer.address,
          totfarms: await fetchfarms(farmer.fid),
          totsize: await fetchsize(farmer.fid),
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
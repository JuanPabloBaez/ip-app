import { useEffect, useState } from 'react';
import axios from  'axios'; 
import './App.css';
import IpAdd from './components/ipAdd/ipAdd';
import IpMap from './components/ipMap/ipMap';


function App() {
  const [ipAdd, setIpAdd] = useState ("")

  useEffect(() => {
    
    async function getIp() {
      try {
           axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_KEY}&ipAddress=8.8.8.8`)
          .then(
            (response) => { 
            const data = response.data;
            setIpAdd(data);
            }
          );
  } catch(error) {
      
      alert ('fatal error')}
    }

    getIp();
    

  },[])     


  return (
    <div className="App">
      
      <IpAdd ipAdd={ipAdd} /* country={ipAdd.location.country} region={ipAdd.location.region} */ />

      <IpMap />

    </div>
  );
}

export default App;

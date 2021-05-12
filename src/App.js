import { useEffect, useState } from 'react';
import axios from  'axios'; 
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import IpAdd from './components/ipAdd/ipAdd';
import IpMap from './components/ipMap/ipMap';


function App() {
  const [ipAdd, setIpAdd] = useState ("");
  const [position, setPosition] = useState();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [flagLink, setFlagLink] = useState("");

  useEffect(() => {
    
    async function getIp() {
      try {
           axios.get(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_KEY}`)
          .then(
            (response) => {
            const data = response.data; 
            setIpAdd(data.ip);
            setPosition([data.location.lat, data.location.lng]);
            setCountry(data.location.country);
            setRegion(data.location.region);
            setIsloading(false);
            return
           
            })
      }catch(error) {
             console.log('fatal error')
            }
    }
      getIp();

    }, []);   

useEffect(() => {
  async function getInfo() {
    
    try {
      axios.get(`https://restcountries.eu/rest/v2/alpha/${country}`)
      .then(
        (response) =>{
          setIsloading(true);
          const data = response.data;
          setFlagLink(data.flag); 
          setIsloading(false);
          return
        }
      )
    }catch(error) {
      console.log('fatal error')
     }
  }
    getInfo();

},[]);



 
  return (
    <div className="App">
      
      {isLoading ? (
        <h1>Loading</h1>
      ):(
      <div>
        <IpAdd ipAdd={ipAdd} country={country} region={region} flagLink={flagLink} />
      <div id="mapid">
        <IpMap position={position}/>
      </div>
      </div>
      )}
      
    
    </div>
  );
}

export default App;

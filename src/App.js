import { useEffect, useState } from 'react';
import axios from  'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { DateTime } from "luxon";
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import IpAdd from './components/ipAdd/ipAdd';
import IpMap from './components/ipMap/ipMap';
import Loader from './images/loader.gif';
import ipIcon from './images/ip-address.png';
import Calendar from './images/calendar.png';
import Clock from './images/clock.png';



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

},[country]);



 
  return (
    <div className="App">
      
      {isLoading ? (

        <img id="loading" src={Loader} alt="loading"/>

      ):(


        <div id="container">
          

          
          <div id="card-wrap"> 
            <div id='cardHeader'>
              <img id='iconIP' src={ipIcon} alt='' />
              <h1>What's my IP?</h1>
            </div>
            
            <Card  style={{ width: 'auto', height: 'auto', backgroundColor:'hsla(183, 100%, 100%, 0.8)' }}>            
              <Card.Body style={{ padding: '0' }}>               
                <Card.Img  src={flagLink} alt="flag" style={{ marginBottom:'2%' }} />
                <IpAdd ipAdd={ipAdd} country={country} region={region}  />          
              </Card.Body>
              <Card.Footer className="text-muted"> 
                <Card.Img  src={Calendar} alt="" style={{ height:'1rem', width:'auto', marginRight:"2%" }} />We are the {DateTime.now().toFormat('D')} <br/> 
                <Card.Img  src={Clock} alt="" style={{ height:'1rem', width:'auto', marginRight:"2%" }} />Your local time is {DateTime.now().toFormat('t')} 
              </Card.Footer>                
            </Card>
          </div>
          <div id="mapid">
            <IpMap position={position}/>
          </div>      
      </div>
      )}
      
    
    </div>
  );
}

export default App;

import React from 'react';


export default function IpAdd ({ipAdd, country, region }) {
    
    return (
        <div>
            <h4> Your IP address is {ipAdd}</h4>
           <p>You are currently located in {region}, {country}  </p>   
        </div>
    )
}

 
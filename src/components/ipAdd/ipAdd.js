import React from 'react';


export default function IpAdd ({ipAdd, country, region, flagLink }) {
    console.log(flagLink)
    return (
        <div>
            <h1> IP Address {ipAdd}</h1>
           <h2>Location: {region}, {country}  </h2>
           <img className="flagPic" src={flagLink} alt="flag" /> 
           
        </div>
    )
}

 
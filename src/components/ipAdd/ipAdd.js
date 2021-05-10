import React from 'react';

export default function IpAdd ({ipAdd, country, region }) {
    console.log(ipAdd)
    return (
        <div>
            <h1> IP Address {ipAdd.ip}</h1>
           {/*  <h2>Location: {ipAdd.location.country}, {ipAdd.location.region}  </h2> */}
        </div>
    )
}

 
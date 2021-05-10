import React from 'react';

export default function IpAdd ({ipAdd, location }) {
    console.log(ipAdd)
    return (
        <div>
            <h1> IP Address {ipAdd.ip}</h1>
            <h2>Location: {ipAdd.location.region}, {ipAdd.location.country}  </h2>
        </div>
    )
}

 
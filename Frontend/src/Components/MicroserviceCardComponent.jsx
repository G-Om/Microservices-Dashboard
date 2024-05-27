import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

// Assuming you have a separate component for the information page
import MicroserviceDetailedCardComponent from './MicroserviceDetailedCardComponent'; // Import Details component
import { Card } from './Card';

export const MicroserviceCardComponent = ( props ) => {

  return (
    <div className="microservicesCard-list">
      {props.data.map((item, index) => (
        <Card key={index}
        id = {item.id}
        title = {item.name}
        portNumber = {item.version}
        status = {item.environment}
        link = {item.url}
        className="microserviceCardComponent"
        ></Card>
      ))}
    </div>
  );
};

 
// DetailedView.js
import React from 'react';
import { useParams } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import {ApiEndpoints} from './ApiEndpoints';



const microservicesCardData = 
  {
    serviceName: "Microservice 1",
    description: "100.80.111",
    version: "Active",
    environment: "xyz",
    uptime : "10.00",
    dependentMicroservices : [
          { "id": 1, "API Name": "Alice", "Request Type": 25, "Path Variable":"Pune", "Body": "xyz", "Role":"abc" },
          { "id": 2, "API Name": "Bob", "Request Type": 30,"Path Variable":"Mumbai", "Body": "xyz", "Role":"abc" },
          { "id": 3, "API Name": "Charlie", "Request Type": 35,"Path Variable":"Delhi ", "Body": "xyz", "Role":"abc" }
    ],   
  };

export const MicroserviceDetailedCardComponent = () => {
  const id = useParams().id;
  console.log(id)
 
  if (microservicesCardData == null) {
    return <div>Item not found</div>;
  }

  // API Endpoints
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //     // Simulate fetching data
  //     const fetchData = async () => {
  //         const response = await fetch('/path/to/your/data.json'); // Adjust the path as needed
  //         const result = await response.json();
  //         setData(result.data);
  //     };

  //     fetchData();
  // }, []);


  return (
    <div>
       
      <div className='detailed-card'>
      <div className='service-overview'>
        <h1>Service Overview</h1>
        <div className='service-overview-info'>
          <p className='serviceName'>Service Name : {microservicesCardData.serviceName}</p>
          <p className='description'>Description : {microservicesCardData.description}</p>
          <p className='version'>Version : {microservicesCardData.version}</p>
          <p className='environment'>Environment : {microservicesCardData.environment}</p>
          <p className='uptime'>Uptime : {microservicesCardData.uptime}</p>
        </div>
      </div>
      <div className='Api-endpoints'>
        <h1>API Endpoints</h1>
         <div className='api-endpoints-info'>
            <ApiEndpoints data={microservicesCardData.dependentMicroservices} />
          </div>   

      </div>
      <div className='dependencies'>
        <h1>Dependencies</h1>
      </div>
      <div className='configuration'>
        <h1>Configuration</h1>
      </div>
      </div>

    </div>
  );
};

 

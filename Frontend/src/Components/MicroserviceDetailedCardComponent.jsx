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
    apiList : [
          { "id": 1, "API Name": "Nirmal", "Request Type": 25, "Path Variable":"Pune", "Body": "Black book neet kar re", "Role":"Devops King" },
          { "id": 2, "API Name": "Mayur", "Request Type": 30,"Path Variable":"Mumbai", "Body": "anime kam dekh", "Role":"All rounder" },
          { "id": 3, "API Name": "Om", "Request Type": 35,"Path Variable":"Delhi ", "Body": "chinese ka paisa time management ke course me laga", "Role":"Backend Beast" }
    ], 
    dependencyArray : ["Product Management","Order Management","Cart Management","User Management"]  
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
            <ApiEndpoints data={microservicesCardData.apiList} />
          </div>   

      </div>
      <div className='dependencies'>
        <h1>Dependencies</h1>
        <ul>
        {microservicesCardData.dependencyArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </div>
      <div className='configuration'>
        <h1>Configuration</h1>
      </div>
      </div>

    </div>
  );
};

 

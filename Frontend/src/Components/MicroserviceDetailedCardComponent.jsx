// DetailedView.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ApiEndpoints} from './ApiEndpoints';
import MicroserviceApi from '../api/MicroserviceApi';



const data = 
  {
    name: "Microservice 1",
    description: "100.80.111",
    version: "Active",
    environment: "xyz",
    uptime : "10.00",
    apiList : [
          { "id": 1, "API Name": "Alice", "Request Type": 25, "Path Variable":"Pune", "Body": "xyz", "Role":"abc" },
          { "id": 2, "API Name": "Bob", "Request Type": 30,"Path Variable":"Mumbai", "Body": "xyz", "Role":"abc" },
          { "id": 3, "API Name": "Charlie", "Request Type": 35,"Path Variable":"Delhi ", "Body": "xyz", "Role":"abc" }
    ],   
  };

export const MicroserviceDetailedCardComponent = () => {
  const id = useParams().id;
  console.log(id)
  // API Endpoint Calls
  const [data, setData] = useState([]);

   useEffect(() => {
       // Simulate fetching data
       MicroserviceApi.getService(id).then(
        (response)=>{
          setData(response.data)
          console.log(response.data)
        }
       ).catch((e)=>{
        console.log(e)
       })
   }, []);


  return (
    <div>
       
      <div className='detailed-card'>
      <div className='service-overview'>
        <h1>Service Overview</h1>
        <div className='service-overview-info'>
          <p className='name'>Service Name : {data.name}</p>
          <p className='description'>Description : {data.description}</p>
          <p className='version'>Version : {data.version}</p>
          <p className='environment'>Environment : {data.environment}</p>
          <p className='uptime'>Uptime : {data.uptime}</p>
        </div>
      </div>
      <div className='Api-endpoints'>
        <h1>API Endpoints</h1>
         <div className='api-endpoints-info'>
            <ApiEndpoints data={data.apiList} />
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

 

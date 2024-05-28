// DetailedView.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ApiEndpoints} from './ApiEndpoints';
import MicroserviceApi from '../api/MicroserviceApi';



const microservicesCardData = 
  {
    serviceName: "Microservice 1",
    description: "100.80.111",
    version: "Active",
    environment: "xyz",
    uptime : "10.00",
    apiList : [
        {
          "API Name": "getUser",
          "Request Type": "GET",
          "Path URL": "/api/users/{id}",
          "Body": null,
          "Role": "admin, user"
        },
        {
          "API Name": "addUser",
          "Request Type": "POST",
          "Path URL": "/api/users",
          "Body": null,
          "Role": "admin"
        },
        {
          "API Name": "updateUser",
          "Request Type": "PUT",
          "Path URL": "/api/users/{id}",
          "Body": null,
          "Role": "admin"
        },
        {
          "API Name": "deleteUser",
          "Request Type": "DELETE",
          "Path URL": "/api/users/{id}",
          "Body": null,
          "Role": "admin"
        }
      ], 
      
    dependencyArray : ["Product Management","Order Management","Cart Management","User Management"]  
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
        {/* <h1>Configuration</h1> */}
      </div>
      </div>

    </div>
  );
};

 

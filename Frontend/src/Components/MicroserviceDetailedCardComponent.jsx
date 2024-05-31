// DetailedView.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ApiEndpoints} from './ApiEndpoints';
import MicroserviceApi from '../api/MicroserviceApi';



const microservicesCardData = 
  {
    serviceName: "User Management",
    description: "Users managed",
    version: "1.1.0",
    environment: "Production",
    uptime : "10.00",
    apiList : [
        {
          "API Name": "Get Data",
          "Request Type": "GET",
          "Path URL": "localhost:8080/services/api/um/users",
          "Body": null,
          "Role": "admin, user"
        },
        {
          "API Name": "Get single user",
          "Request Type": "GET",
          "Path URL": "localhost:8080/services/api/um/users?userId=52",
          "Body": null,
          "Role": "user"
        },
        {
          "API Name": "Post data",
          "Request Type": "POST",
          "Path URL": "localhost:8083/services/api/um/users",
          "Body": null,
          "Role": "user"
        },
        {
          "API Name": "Update data",
          "Request Type": "PUT",
          "Path URL": "localhost:8080/services/api/um/users",
          "Body": null,
          "Role": "user"
        },
        {
          "API Name": "Delete data",
          "Request Type": "PUT",
          "Path URL": "localhost:8080/services/api/um/users",
          "Body": null,
          "Role": "user, admin"
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

 

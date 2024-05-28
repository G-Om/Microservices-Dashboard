import { MicroserviceCardComponent } from "../Components/MicroserviceCardComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';
import { MicroserviceDetailedCardComponent } from "../Components/MicroserviceDetailedCardComponent";
import { useEffect, useState } from "react";
import MicroserviceApi from "../api/MicroserviceApi";
import { AddMicroserviceForm } from "../Components/AddMicroserviceForm";
import "../Styles/HomeDashboardPage.css";


export const HomeDashboardPage = () => {
  const[showForm, setShowForm] = useState(false);
  // array of microservices
  const microserviceArray = [
    {
      "id" : "1",
      "name": "Auth Service",
      "url": "Handles authentication and authorization",
      "version": "1.2.3",
      "environment": "Production",
      "status" : "online",
    },
    {
      "id" : "2",
      "name": "User Service",
      "url": "Manages user data and profiles",
      "version": "1.5.0",
      "environment": "Staging",
      "status" : "online",
    },
    {
      "id" : "3",
      "name": "Payment Service",
      "url": "Processes payments and transactions",
      "version": "2.1.1",
      "environment": "Production",
      "status" : "offline",
    },
    {
      "id" : "4",
      "name": "Notification Service",
      "url": "Sends notifications to users",
      "version": "1.0.5",
      "environment": "Development",
      "status" : "online",
    },
    {
      "id" : "5",
      "name": "Analytics Service",
      "url": "Collects and processes analytics data",
      "version": "3.0.2",
      "environment": "Production",
      "status" : "online",
    },
    {
      "id" : "6",
      "name": "Inventory Service",
      "url": "Manages product inventory and stock levels",
      "version": "1.8.7",
      "environment": "Staging",
      "status" : "offline",
    }
  ];

  const [listOfMicroservices, setList] = useState(microserviceArray);

  useEffect(
    ()=> {

      MicroserviceApi.getAllServices().then(
        (response)=>{
        console.log(response.data)
        setList(response.data)
        }
      ).catch((e)=>{
        console.log(e)
       })
    }
    ,[]
  )

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="dashboard">
      <div className="LeftNavbar">
        <div className="LeftNavbar-Container">
          <div className="LeftNavbar-heading-container">
            <h1 className="LeftNavbar-heading">Microservices Dashboard</h1>
          </div>
          <div className="LeftNavbar-username-container">
            {/* <p className="LeftNavbar-username"> {username} </p> */}
          </div>
          <div className="LeftNavbar-content-container">
            <ul className="LeftNavbar-content">
              <li className="LeftNavbar-content-each">Content 1</li>
              <li className="LeftNavbar-content-each">Content 2</li>
              <li className="LeftNavbar-content-each">Content 3</li>
              <li className="LeftNavbar-content-each">Content 4</li>
            </ul>
            <button className="addMicroservice" onClick={toggleForm}>Add Service</button>
          </div>
        </div>
      </div>

      <div className="microservice-content">
      {showForm ? (
          // Render your form component here
          <div className="microservice-form">
            <AddMicroserviceForm></AddMicroserviceForm>
          </div>
      ) : (
          //Render microservice cards if form is not shomn
          <div className="microservice-content-cards">
          <div className="microservice-card">
           
                  <MicroserviceCardComponent
                    data={listOfMicroservices}
                  ></MicroserviceCardComponent>      
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

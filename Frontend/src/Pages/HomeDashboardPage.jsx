import { MicroserviceCardComponent } from "../Components/MicroserviceCardComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';
import { MicroserviceDetailedCardComponent } from "../Components/MicroserviceDetailedCardComponent";
import { useEffect, useState } from "react";
import MicroserviceApi from "../api/MicroserviceApi";

export const HomeDashboardPage = () => {
  // array of microservices
  const [listOfMicroservices, setList] = useState([]);

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

  return (
    <div className="dashboard">
      <div className="LeftNavbar">
        <div className="LeftNavbar-Container">
          <div className="LeftNavbar-heading-container">
            <h1 className="LeftNavbar-heading">Microservices Dashboard</h1>
          </div>
          <div className="LeftNavbar-username-container">
            <p className="LeftNavbar-username"> Sreyash Kunkekar </p>
          </div>
          <div className="LeftNavbar-content-container">
            <ul className="LeftNavbar-content">
              <li className="LeftNavbar-content-each">Content 1</li>
              <li className="LeftNavbar-content-each">Content 2</li>
              <li className="LeftNavbar-content-each">Content 3</li>
              <li className="LeftNavbar-content-each">COntent 4</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="microservice-content">
        <div className="microservice-content-cards">
          <div className="microservice-card">
           
                  <MicroserviceCardComponent
                    data={listOfMicroservices}
                  ></MicroserviceCardComponent>
               
                {/* <Route
                  path="/microservice/:id"
                  element={<MicroserviceDetailedCardComponent />}
                />
               */}
          </div>
        </div>
      </div>
    </div>
  );
};

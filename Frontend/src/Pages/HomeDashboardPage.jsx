import { MicroserviceCardComponent } from "../Components/MicroserviceCardComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';
import { MicroserviceDetailedCardComponent } from "../Components/MicroserviceDetailedCardComponent";

export const HomeDashboardPage = () => {
  // array of microservices
  const microservicesCardData = [
    {
      title: "Microservice 1",
      portNumber: "100.80.111",
      status: "Active",
      link: "xyz",
    
    },
    {
      title: "Microservice 2",
      portNumber: "100.80.112",
      status: "Inactive",
      link: "xyz",
    },
    {
      title: "Microservice 3",
      portNumber: "100.80.113",
      status: "Active",
      link: "xyz",
    },
    {
      title: "Microservice 4",
      portNumber: "100.80.114",
      status: "Active",
      link: "xyz",
    },
    {
      title: "Microservice 5",
      portNumber: "100.80.115",
      status: "Inactive",
      link: "xyz",
    },
    {
      title: "Microservice 6",
      portNumber: "100.80.116",
      status: "Active",
      link: "xyz",
    },
  ];

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
                    data={microservicesCardData}
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

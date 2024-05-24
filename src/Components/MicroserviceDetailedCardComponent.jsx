// DetailedView.js
import React from 'react';
import { useParams } from 'react-router-dom';

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



export const MicroserviceDetailedCardComponent = () => {
  const id = useParams().id;
  console.log(id)
  const selectedItem = microservicesCardData.at(id);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div>
        {/* <h1>{selectedItem.title}</h1>
        <p>Port : {selectedItem.portNumber}</p>
        <p>Status : {selectedItem.status}</p>
        <p>Link : {selectedItem.link}</p> */}

<table  className="card-table">
                <thead>
                    <tr>
                        <th>{selectedItem.title}</th>
                        <th>Port</th>
                        <th>Status</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{selectedItem.title}</td>
                        <td>{selectedItem.portNumber}</td>
                        <td>{selectedItem.status}</td>  
                        <td>{selectedItem.link}</td>
                    </tr>
                </tbody>
            </table>
    </div>
  );
};

 

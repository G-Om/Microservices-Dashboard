import { useNavigate } from "react-router-dom";

export const Card = (props) => {
    const redirect = useNavigate();    
    const handleClick = () => {
        console.log("Welcome to hell");
        redirect(`/microservice/${props.id}`);
    }
    
    return(
        <div className="card" onClick={handleClick}>
            <div className="microserviceCard">
            <h1 className="microserviceCard-title">{props.title}</h1> 
            <div className="microserviceCard-info">
                <p>Port : {props.portNumber}</p> 
                <p>Link : {props.status}</p>              
                <p>Status : {props.link}</p>              
            </div>       
            </div>
        </div>
    );
};

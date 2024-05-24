import { useNavigate } from "react-router-dom";

export const Card = (props) => {
    const redirect = useNavigate();    
    const handleClick = () => {
        console.log("Welcome to hell");
        redirect(`/microservice/${props.id}`);
    }
    
    return(
        <div className="card" onClick={handleClick}>
            <table  className="card-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Port</th>
                        <th>Status</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.title}</td>
                        <td>{props.portNumber}</td>
                        <td>{props.status}</td>
                        <td>{props.link}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

import { Route, Routes } from "react-router-dom"
import { HomeDashboardPage } from "./Pages/HomeDashboardPage"
import { MicroserviceDetailedCardComponent } from "./Components/MicroserviceDetailedCardComponent"


export const MainComponent = ()=>{

    return(
        <div>

            <Routes>
                <Route path="/" 
                    element = {<HomeDashboardPage></HomeDashboardPage> }
                ></Route>
                <Route path="/microservice/:id" 
                    element = {<MicroserviceDetailedCardComponent></MicroserviceDetailedCardComponent> }
                ></Route>
 

            </Routes>

            
        </div>
    )
}
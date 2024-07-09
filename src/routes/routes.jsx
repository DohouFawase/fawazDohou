import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homepage";
import Layout from "../layouts/interfacelayout";

const root =createBrowserRouter([
     {
        path: "/",
        element: <Layout />,
        children:[
            {
                path:'',
                element: <Home />
            }
        ]
        
     }
])




export default root
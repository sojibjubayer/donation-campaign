import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Donation from "../pages/donation/Donation";
import Statistics from "../pages/statistics/Statistics";
import DonationDetails from "../component/DonationDetails/DonationDetails";
import NotFound from "../layout/NotFound";


const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/donation_cat.json')
            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/donations/:id',
                element:<DonationDetails></DonationDetails>,
                loader:()=>fetch('/donation_cat.json')
            }
        ]
    }
])

export default myCreatedRoute;
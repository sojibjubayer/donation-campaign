import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";



const DonationDetails = () => {
    const params = useParams();
    console.log(params.id);

    const donations = useLoaderData();

    const [donation, setDonation] = useState();
    useEffect(()=>{
        const searchDonation=donations.find(donation=>donation.id==params.id)
        console.log(searchDonation);
        if(searchDonation){
            setDonation(searchDonation)
        }
    },[donations,params.id])
    
    return (
        <div>
           <DonationDetailsCard donation={donation}></DonationDetailsCard>
        </div>
    );
};

export default DonationDetails;
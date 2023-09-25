import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationsCard from "../../component/header/Donations/DonationsCard";


const DonationDetails = () => {
    const params = useParams();

    const donations = useLoaderData();

    const [donation, setDonation] = useState();
    useEffect(()=>{
        const searchDonation=donations.find(donation=>donation.id===params.id)
        
        if(searchDonation){
            setDonation(donation)
        }
    },[])
    
    return (
        <div>
           <DonationsCard donation={donation}></DonationsCard>
        </div>
    );
};

export default DonationDetails;
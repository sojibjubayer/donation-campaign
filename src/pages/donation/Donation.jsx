import { useEffect, useState } from "react";


import DonationCard from "./DonationCard";


const Donation = () => {
    const [donations, setDonations] = useState([])
    const [nofound, setNofound] = useState('')
    const [isShow,setIsShow]=useState(false)
    


    useEffect(() => {
        const getDonation = JSON.parse(localStorage.getItem('donation'))
        
        if (getDonation) {
           
            setDonations(getDonation)
            // const total=getItem.reduce((preValue,currentItem)=>preValue+currentItem.price,0)
            // // console.log(total);
            // setTotal(total)

        }
        else {
            setNofound('No Data Found')
        }
    }, [])
    

    console.log(donations);


    return (
        <div>
          
                {nofound ? <p className="h-[70vh] flex justify-center items-center" >No data Found</p> :
                    <div>
                     
                        <div className="grid grid-cols-2 gap-5 ">
                            {
                                isShow? donations.map(donation => 
                                <DonationCard key={donation.id} donation={donation}></DonationCard>)
                                : donations.slice(0,4).map(donation => 
                                <DonationCard key={donation.id} donation={donation}></DonationCard>)
                            }
                        </div>
                        {donations.length> 4 && !isShow &&  <button onClick={()=>setIsShow(!isShow)} 
                         className="bg-green-600 text-white py-1 px-7 mt-5 rounded font-semibold block mx-auto">See All</button>
                         }
                         
                         
                    </div>
                }
            

        </div>
    );
};

export default Donation;


import { useEffect, useState } from "react";




const Statistics = () => {
    const [donations, setDonations] = useState([])
    const [nofound, setNofound] = useState('')
 
    


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
          
            

        </div>
    );
};

export default Statistics;
import { useLoaderData } from "react-router-dom";

// import Donations from "../../component/header/Donations/Donations";
import DonationsCard from "../../component/header/Donations/DonationsCard";
import { useEffect, useState } from "react";


const Home = () => {
    const donations = useLoaderData();
    const [allDonations, setAllDonations] = useState()

    const fontStyle={
        fontFamily:'Inter'
    }



    const [tempoData, setTempoData] = useState('')
    const [searchData, setSearchData] = useState('')
    const handleSearchClick = () => {
        setSearchData(tempoData)

    }
  
    useEffect(() => {
        if (searchData) {

            const filterDonations = donations.filter(donation => donation.category.toLowerCase() == searchData.toLowerCase())

            if (filterDonations) {
                setAllDonations(filterDonations)
            }
        }
        else {
            setAllDonations(donations)
        }
    }, [donations, searchData])
    console.log(allDonations);


    return (
        <div>
           {/* Banner  */}
            <div style={fontStyle} className=" ">
                <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/2qNDmwJ/helping-hand.png)' }}>
                    <div className="hero-overlay bg-white bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                            <input className="p-2 rounded text-black " type="text" value={tempoData}
                                onChange={(e) => setTempoData(e.target.value)}
                                placeholder="Search here...." />

                            <button style={fontStyle} onClick={handleSearchClick} className="p-2 rounded-r -ml-2 bg-[#FF444A] text-white">Search</button>
                        </div>
                    </div>
                </div>
                {
                    // inputData && <Home inputData={inputData}></Home>
                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 py-7'>
                {
                    allDonations?.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
                }
            </div>


        </div>
    );
};

export default Home;
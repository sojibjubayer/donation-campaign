import { useLoaderData } from "react-router-dom";
import Banner from "../../component/header/banner/Banner";
import Donations from "../../component/header/Donations/Donations";


const Home = () => {
    const donations=useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Donations donations={donations}></Donations>
           
            
        </div>
    );
};

export default Home;
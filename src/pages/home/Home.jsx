import { useLoaderData } from "react-router-dom";
import Banner from "../../component/header/banner/Banner";


const Home = () => {
    const multiDonation=useLoaderData();
    console.log(multiDonation);
    return (
        <div>
            <Banner></Banner>
            
        </div>
    );
};

export default Home;
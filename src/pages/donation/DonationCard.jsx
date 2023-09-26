
import { Link } from "react-router-dom";


const DonationCard = ({donation}) => {
    // console.log(donation);
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {};

    const myStyle = {
      color: `${text_button_bg}`,
      // fontSize: '24px',
      backgroundColor: `${card_bg}`,
    };
    

    return (
      <div>
      
      <div style={myStyle} className={`relative flex w-[600px] gap-5 gap-y-6 rounded
      bg-clip-border text-gray-700 shadow-md`}>
        <div className="relative  overflow-hidden rounded-t-xl bg-white bg-clip-border ">
          <img
            src={picture}
            className="h-[200px] w-[220px] object-cover"/>
        </div>
        <div className="p-6">
        <p style={myStyle} className={`block py-1 px-2 w-fit rounded-md font-sans  text-base font-medium leading-relaxed  antialiased mb-2`}>
            {category}
          </p>
          <p  className={`block text-black text-2xl  font-sans  font-semibold leading-relaxed  antialiased`}>
            {title}
          </p>
          <p style={{color:`${text_button_bg}`}} className='block font-sans text-base font-semibold leading-relaxed  antialiased mb-2'>
            {price}
          </p>
          <Link to={`/donations/${id}`}>
          <button style={{color:'white',backgroundColor:`${text_button_bg}`}} className="p-2 rounded font-semibold text-lg ">View Details</button>
          </Link>
        </div>
      </div>
     
    </div>
     
    );
};

export default DonationCard;
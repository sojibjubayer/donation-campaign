
import { Link } from "react-router-dom";


const DonationCard = ({donation}) => {
    // console.log(donation);
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {};

    return (
      <div>
      
      <div className={`relative flex w-[600px] gap-5 gap-y-6 rounded bg-[${card_bg}]
      bg-clip-border text-gray-700 shadow-md`}>
        <div className="relative  overflow-hidden rounded-t-xl bg-white bg-clip-border ">
          <img
            src={picture}
            className="h-[200px] w-[220px] object-cover"/>
        </div>
        <div className="p-6">
          <p className={`block text-[${text_button_bg}] bg-[${card_bg}] py-1 px-2 w-fit rounded-md font-sans  text-base font-medium leading-relaxed  antialiased mb-2`}>
            {category}
          </p>
          <p className={`}block text-[${text_button_bg}]  font-sans text-base font-medium leading-relaxed  antialiased`}>
            {title}
          </p>
          <p className={`}block text-[${text_button_bg}]  font-sans text-base font-medium leading-relaxed  antialiased`}>
            {price}
          </p>
          <Link to={`/donations/${id}`}>
          <button className="p-2">View Details</button>
          </Link>
        </div>
      </div>
     
    </div>
     
    );
};

export default DonationCard;
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DonationDetailsCard = ({ donation }) => {
  console.log(donation);
  const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {};
  return (
    <div>
      
      <div className={`relative flex w-full flex-col  bg-[${card_bg}]
      bg-clip-border text-gray-700 shadow-md`}>
        <div className="relative rounded h-[70vh]  overflow-hidden  bg-white bg-clip-border ">
          <img
            src={picture}
            className="h-full w-full object-cover"/>
        </div>
        <div className='bg-black bg-opacity-40 p-8 -mt-[120px] relative'> 
        <Link to={`/donations/${id}`}>
            <button className={`bg-[${category_bg}] text-white px-6 py-4 rounded font-semibold`}>Donate $290</button>
            </Link>
        </div>
        <div className="">
          <p className={`block text-black font-bold text-[40px] font-sans text-base  leading-relaxed  antialiased`}>
            {title}
          </p>
          <p className={`}block text-black  font-sans text-base font-medium leading-relaxed  antialiased`}>
            {description}
          </p>
        </div>
      </div>
      
    </div>
  );
};
DonationDetailsCard.propTypes = {
  donation: PropTypes.object
}

export default DonationDetailsCard;
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DonationsCard = ({ donation }) => {
  console.log(donation);
  const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {};
  return (
    <div>
      <Link to={`/donations/${id}`}>
      <div className={`relative flex w-[300px] flex-col rounded-xl bg-[${card_bg}]
      bg-clip-border text-gray-700 shadow-md`}>
        <div className="relative  h-[180px] overflow-hidden rounded-t-xl bg-white bg-clip-border ">
          <img
            src={picture}
            className="h-full w-full object-cover"/>
        </div>
        <div className="p-6">
          <p className={`block text-[${text_button_bg}] bg-[${card_bg}] py-1 px-2 w-fit rounded-md font-sans  text-base font-medium leading-relaxed  antialiased mb-2`}>
            {category}
          </p>
          <p className={`}block text-[${text_button_bg}]  font-sans text-base font-medium leading-relaxed  antialiased`}>
            {title}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};
DonationsCard.propTypes = {
  donation: PropTypes.object
}

export default DonationsCard;
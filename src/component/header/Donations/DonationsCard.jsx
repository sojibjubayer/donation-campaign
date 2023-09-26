import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const DonationsCard = ({ donation }) => {

  const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = donation || {};

  const myStyle = {
    color: `${text_button_bg}`,
    // fontSize: '24px',
    backgroundColor: `${card_bg}`,
  };
  return (
    <div>
     
      <Link to={`/donations/${id}`}>
      <div style={myStyle} className={`relative flex w-[300px] flex-col rounded-xl ]
      bg-clip-border text-gray-700 shadow-md`}>
        <div className="relative  h-[180px] overflow-hidden rounded-t-xl bg-white bg-clip-border ">
          <img
            src={picture}
            className="h-full w-full object-cover"/>
        </div>
        <div className="p-6">
          <p style={myStyle} className={`block py-1 px-2 w-fit rounded-md font-sans  text-base font-medium leading-relaxed  antialiased mb-2`}>
            {category}
          </p>
          <p  className={`block  font-sans text-lg font-semibold leading-relaxed  antialiased`}>
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
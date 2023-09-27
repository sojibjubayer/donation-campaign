import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import swal from 'sweetalert'

const DonationDetailsCard = ({ donation }) => {
  const { id, picture, title, category_bg, card_bg, description, price } = donation || {};


  const singleDonationStyle = {
    backgroundColor: `${category_bg}`
  }
  const fontStyle={
    fontFamily:'Inter'
}

  const handleAddToDonation = () => {

    const donationArray = [];
    const getDonation = JSON.parse(localStorage.getItem('donation'))
    if (!getDonation) {
      donationArray.push(donation)
      localStorage.setItem('donation', JSON.stringify(donationArray))
      swal("Good job!", "Successfully Added", "success");
    }
    else {
      const isExist = getDonation.find(item => item.id == id)

      if (!isExist) {
        donationArray.push(...getDonation, donation)
        localStorage.setItem('donation', JSON.stringify(donationArray))
        swal("Good job!", "Successfully Added", "success");

      }
      else {
        swal("Ooops!", "Already Exist", "error");

      }


    }
  }

  return (
    <div style={fontStyle}>

      <div className={`relative flex w-full flex-col  bg-[${card_bg}]
      bg-clip-border text-gray-700 shadow-md`}>
        <div className="relative rounded h-[70vh]  overflow-hidden  bg-white bg-clip-border ">
          <img
            src={picture}
            className="h-full w-full object-cover" />
        </div>
        <div className='bg-black bg-opacity-40 p-8 -mt-[120px] relative'>
          <Link to={`/donations/${id}`}>
            <button style={singleDonationStyle} onClick={handleAddToDonation} className={` text-white px-3 py-2 md:px-6 md:py-4 rounded font-semibold`}>Donate {price}</button>
          </Link>
        </div>
        <div className="">
          <p className='block text-black font-bold text-2xl md:text-3xl lg:text-4xl font-sans  leading-relaxed  antialiased mt-5'>
            {title}
          </p>
          <p className='block text-black  font-sans text-base font-medium leading-relaxed  antialiased mt-2 mb-4'>
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
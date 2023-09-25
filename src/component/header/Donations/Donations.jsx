import PropTypes from 'prop-types'
import DonationsCard from './DonationsCard';

const Donations = ({donations}) => {
    return (
        <div>
             <h1 className='text-2xl text-center py-4'>All categories Donation here</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 py-7'>
            {
                donations?.map(donation=><DonationsCard key={donation.id} donation={donation}></DonationsCard> )
            }
        </div>
        </div>
    );
};
Donations.propTypes={
    donations:PropTypes.array
}

export default Donations;


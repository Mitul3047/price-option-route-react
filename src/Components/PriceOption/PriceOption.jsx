import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({gymMembershipOption}) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className='text-2xl'>{gymMembershipOption.name}</h2>
    <p>{gymMembershipOption.description}</p>
    <p>Monthly Fee: ${gymMembershipOption.price}</p>
    <div>
        {
            gymMembershipOption.features.map(feature => (
                // console.log(feature)
           <div key={feature.idx}>
            <Features feature={feature}></Features>
           </div>
           
                ))
        }
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-accent">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};


PriceOption.propTypes ={
    gymMembershipOption: PropTypes.object
}
export default PriceOption;
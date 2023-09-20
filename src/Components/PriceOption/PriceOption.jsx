import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({gymMembershipOption}) => {
    return (
        <div className=''> 
            <div className="card  shadow-xl hover:bg-yellow-300  bg-yellow-200">
  <div className="card-body">
    <h2 className='text-2xl font-bold'>{gymMembershipOption.name}</h2>
    <p>{gymMembershipOption.description}</p>
    <p className='text-center font-semibold'><span className='text-5xl '>${gymMembershipOption.price}</span>/Month</p>
    <div >
        {
            gymMembershipOption.features.map((feature,idx) => (
                // console.log(feature)
           <div key={idx}>
            <Features feature={feature}></Features>
           </div>
           
                ))
        }
    </div>
    <div className="card-actions ">
      <button className="btn bg-blue-500  text w-full">Buy Now</button>
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
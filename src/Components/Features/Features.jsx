import { AiFillCheckCircle } from 'react-icons/Ai';

const Features = ({feature}) => {
    return (
        <div className='text-left'>
            <p><AiFillCheckCircle className='inline-block text-green-500'/> {feature}</p>
        </div>
    );
};

export default Features;
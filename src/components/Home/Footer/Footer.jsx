
import { Link } from 'react-router-dom';
import img from './../../../assets/assets/logo.svg'
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mb-10 bg-black text-white flex justify-around py-6 md:py-10 lg:py-20 px-8   mt-20'>
            <div>
                <img src={img} alt="" />
                <p className='text-sm'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br />trainer who is also a serial .</p>
                <div className='my-4 flex gap-4'>
 
                    <button> <FaGoogle></FaGoogle> </button>
                    <button><FaTwitter></FaTwitter></button>
                    <button><FaInstagram></FaInstagram></button>
                    <button><FaLinkedin></FaLinkedin></button>

                </div>
            </div>


            {/* section 2 */}

            <div>
                <p className='text-2xl font-bold mb-3 text-white'>About</p>
                <Link to="/"><p className='mb-2 hover:text-lg'>Home</p></Link>
                <Link to="/service"><p className='mb-2 hover:text-lg'>service</p></Link>
                <Link to="/contact"><p className='mb-2 hover:text-lg'>Contact</p></Link>
            </div>
            {/* section 3 */}

            
            <div>
                <p className='text-2xl font-bold mb-3 text-white'>Company</p>
                <p className='mb-2 '>Why Car Doctor</p> 
                <p className='mb-2 '>About</p> 
                 
            </div>
            {/* four  */}
            <div>
                <p className='text-2xl font-bold mb-3 text-white'>Support</p>
                <p className='mb-2 '>Support Center</p> 
                <p className='mb-2 '>Feedback</p> 
                <p className='mb-2 '>Accesbility</p> 
                 
            </div>
        </div>
    );
};

export default Footer;
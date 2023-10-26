import img from './../../../../assets/assets/icons/open.png'
import img2 from './../../../../assets/assets/icons/phone.png'
import img3 from './../../../../assets/assets/icons/location.jpg'
const Moreservice = () => {
    return (
        <div className='my-8'>
            <div className='text-center'>
                <button className="btn btn-outline btn-secondary">More Service </button>

            </div>
            {/* bg div */}
            <div className='bg-black  justify-around mt-8 py-16 px-10 grid grid-cols-3'>

                <div className='flex items-center'>
                    <div>
                        <img className='h-10 w-10 mr-3 rounded-xl' src={img} alt="" />
                    </div>
                    <div>
                        <p className="text-sm text-white">We are open monday-friday</p>
                        <p className="text-white text-xl font-bold">7:00 am - 9:00 pm</p>
                    </div>
                </div>

 

                <div className='flex items-center'>
                    <div>
                        <img className='h-10 w-10 mr-3 rounded-xl' src={img2} alt="" />
                    </div>
                    <div>
                        <p className="text-sm text-white">Need a repair? our address</p>
                        <p className="text-white text-xl font-bold">Liza Street, New York</p>
                    </div>
                </div>


                <div className='flex items-center'>
                    <div>
                        <img className='h-10 w-10 mr-3 rounded-xl' src={img3} alt="" />
                    </div>
                    <div>
                        <p className="text-sm text-white">We are open monday-friday</p>
                        <p className="text-white text-xl font-bold">7:00 am - 9:00 pm</p>
                    </div>
                </div>



            </div>


        </div>
    );
};

export default Moreservice;
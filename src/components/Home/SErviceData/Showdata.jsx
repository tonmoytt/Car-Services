import { Link } from 'react-router-dom';
import img2 from './../../../assets/assets/arrow/images.png'
const Showdata = ({ propsData }) => {
    const { _id,title, img, price } = propsData;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-60 rounded-lg' src= {img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">   {title} </h2>
                    
                    <div className="card-actions items-center flex mt-6 justify-between">
                        <div className="text-lg text-orange-600 font-bold">Price : {price}$</div>
                        <Link to={`/details/${_id}`}> <button> <img className='h-10 w-8' src={img2} alt="" /> </button>  </Link> 
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Showdata;
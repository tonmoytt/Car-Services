import { stringify } from "postcss";
import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";



const Details = () => {
    const { id } = useParams()

    const data2 = useLoaderData()
    const [data, setData] = useState()
    console.log(data2);
    console.log(data);


    const findloader = data2?.find(data => data._id === id)
    console.log(findloader);




    return (
        <div className="text-center mt-6 mx-40">
            <div className="card w-full bg-base-100 border-4 p-2 text-center  shadow-xl">
                <figure><img className='max-h-[600px] w-full rounded-lg' src={findloader?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">   {findloader?.title} </h2>
                    <p className="">   {findloader?.description} </p>

                    <div className="card-actions items-center flex mt-6 justify-between">
                        <div className="text-lg text-orange-600 font-bold">Price : {findloader?.price}$</div>
                        <Link to="/login">  <button className="btn btn-warning">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;
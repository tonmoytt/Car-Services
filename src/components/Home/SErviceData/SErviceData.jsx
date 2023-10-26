import { useEffect } from "react";
import { useState } from "react";
import Showdata from "./Showdata";



const SErviceData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="mt-10">
            <div className="text-center mt-4 ">
                <p className="text-orange-400 text-xl mb-6 "> Service</p>
                <p className="text-4xl font-bold mb-6"> Our Service Area</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="mt-10 grid md:grid-cols-3 lg: grid-cols-3 gap-6 bg-teal-100 p-6">
                {
                    data.map(data => <Showdata key={data._id} propsData={data}></Showdata>)
                }
            </div>
        </div>
    );
};

export default SErviceData;
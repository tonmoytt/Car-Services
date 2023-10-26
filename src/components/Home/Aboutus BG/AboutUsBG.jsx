import img from './../../../assets/assets/images/about_us/person.jpg'
import img2 from './../../../assets/assets/images/about_us/parts.jpg'

const AboutUsBG = () => {
    return (
        <div className="mt-20">

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex">

                    <div className='relative'>
                        <img src={img} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={img2} className="w-1/2 border-8 border-white right-16 top-1/2 rounded-lg shadow-2xl absolute" />
                    </div>

                    <div>
                        <p className='text-2xl mb-6 text-red-600'>About us</p>
                        <h1 className="text-3xl font-bold">We are qualified & of experience in this field!</h1>
                        <p className="py-6 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};






export default AboutUsBG;
import img1 from './../../../assets/assets/images/banner/1.jpg'
import img2 from './../../../assets/assets/images/banner/2.jpg'
import img3 from './../../../assets/assets/images/banner/3.jpg'
import img4 from './../../../assets/assets/images/banner/4.jpg'
// import img5 from './../../../assets/assets/images/banner/5.jpg'
// import img6 from './../../../assets/assets/images/banner/6.jpg'

const Baneerrpic = () => {
    return (
        <div className="carousel w-full max-h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />

                <div className="absolute flex h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='w-1/3 ml-8 md:ml-16 mt-10 md:mt-16 lg:mt-20'>
                        <p className='text-3xl  md:text-4xl lg:text-5xl mb-8 font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex mt-8'>
                            <button className='btn btn-secondary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-error'>Latest project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute justify-end flex transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-red-500">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />

                <div className="absolute flex h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='w-1/3 ml-8 md:ml-16 mt-10 md:mt-16 lg:mt-20'>
                        <p className='text-3xl  md:text-4xl lg:text-5xl mb-8 font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex mt-8'>
                            <button className='btn btn-secondary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-error'>Latest project</button>
                        </div>
                    </div>
                </div>


                

                <div className="absolute justify-end flex transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-red-500">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />

                <div className="absolute flex h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='w-1/3 ml-8 md:ml-16 mt-10 md:mt-16 lg:mt-20'>
                        <p className='text-3xl  md:text-4xl lg:text-5xl mb-8 font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex mt-8'>
                            <button className='btn btn-secondary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-error'>Latest project</button>
                        </div>
                    </div>
                </div>


                <div className="absolute justify-end flex transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-red-500">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />

                <div className="absolute flex h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='w-1/3 ml-8 md:ml-16 mt-10 md:mt-16 lg:mt-20'>
                        <p className='text-3xl  md:text-4xl lg:text-5xl mb-8 font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className=' text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex mt-8'>
                            <button className='btn btn-secondary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-error'>Latest project</button>
                        </div>
                    </div>
                </div>


                <div className="absolute justify-end flex transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-red-500">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Baneerrpic;
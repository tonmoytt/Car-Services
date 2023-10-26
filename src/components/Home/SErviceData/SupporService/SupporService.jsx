import img from './../../../../assets/assets/icons/man2.jpg'
import img2 from './../../../../assets/assets/icons/man.jpg'

const SupporService = () => {
  return (
    <div>
      <div className="text-center mt-20">

        <p className="text-orange-700 my-6 text-xl font-semibold">Core Features</p>
        <h1 className="text-3xl my-6 font-bold">Why Choose Us</h1>
        <p className="text-sm">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
      </div>

      <div className='grid grid-cols-2 gap-6 mx-20'>


        <div className='border-2 mt-10'>


          <div className='flex items-center p-4'>
            <div>
              <img className='h-10 w-10 mr-3 rounded-xl ' src={img} alt="" />
            </div>
            <div>
              <p className="text-sm  ">Awlad Hossain</p>
              <p className="  text-xl font-bold">Businessman</p>
            </div>
          </div>

          <div className='p-4 '>
            <p>There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't <br />look even slightly believable. </p>


            <p>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
            </p>
          </div>
        </div>


        {/*  secend review */}
        <div className='border-2 mt-10'>


          <div className='flex items-center  p-4'>
            <div>
              <img className='h-10 w-10 mr-3 rounded-xl ' src={img2} alt="" />
            </div>
            <div>
              <p className="text-sm  ">Awlad Hossain</p>
              <p className="  text-xl font-bold">Businessman</p>
            </div>
          </div>

          <div className='p-4 '>
            <p>There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't <br />look even slightly believable. </p>


            <p>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupporService;
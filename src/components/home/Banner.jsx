import bgImg from '../../assets/images/banner/ussama-azam-Pb_QtB442h4-unsplash.jpg'
import sideImg from '../../assets/images/banner/anshuman-gaikwad-YOditKKj384-unsplash.jpg'


const Banner = () => {
  return (
    <div className="relative w-full flex flex-col-reverse md:flex-row items-center overflow-hidden">
      {/* :HERO IMAGE */}
      <div
        className="absolute w-full h-full bg-gradient-to-t from-pink-400 to-red-600"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 75%)" }}
      >
        <img
          src={bgImg}
          alt=""
          className="absolute w-full h-full object-cover object-top opacity-20"
        />
      </div>

      {/* :PRODUCT */}
      <div className="hidden sm:block relative w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src={sideImg}
          alt=""
          className="relative mx-auto sm:w-40 md:w-60 xl:w-80 xl:mt-20 rounded-2xl opacity-80"
        />
      </div>

      {/* :HERO MAIN */}
      <div className="relative pt-20 pb-10 md:py-40 px-3 w-full md:w-1/2 h-full sm:h-1/2 md:h-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-white">
        {/* ::Small Title */}
        <h2 className="text-xl sm:text-3xl font-mulish">Marketplace for</h2>

        {/* ::Big Title */}
        <h1 className="text-5xl sm:text-7xl font-mulish">Fancy Hero 25</h1>

        {/* ::Text */}
        <p className="max-w-lg py-5 font-thin leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          dolores sunt sequi ab repellendus, molestias odit rerum beatae
          voluptates quidem numquam explicabo non voluptatum accusamus itaque
          natus eveniet amet veniam.
        </p>

        {/* :Sign Up */}
        <div className="flex-shrink-0 py-5 flex flex-col sm:flex-row items-center">
          <button className="py-2 px-5 text-xl bg-white text-black rounded hover:bg-black hover:text-white hover:scale-125 duration-300"> 
                    Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

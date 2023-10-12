import { Link } from "react-router-dom";
import bgImg from "../../assets/images/parallax/erik-mclean-8SeJUmfahu0-unsplash.jpg";
const ParallaxBanner = () => {
  return (
    <div
      className="w-full bg-fixed bg-cover h-96 md:h-[45rem] text-white my-20 flex justify-center items-center"
      style={{ backgroundImage: `url('${bgImg}')` }}
    >
      <div className="pl-10 md:pl-0">
        <p className="text-5xl font-bold underline mb-10">
          Set you toys to be listed
        </p>
        <Link
          to="/login"
          className="py-2 px-5 text-xl bg-white text-black rounded hover:bg-black hover:text-white hover:scale-125 duration-300"
        >
          Join Us
        </Link>
      </div>
    </div>
  );
};

export default ParallaxBanner;

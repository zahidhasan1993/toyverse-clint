import SectionTItle from "../shared/SectionTItle";
import Banner from "./Banner";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionTItle name="Our Gallery"></SectionTItle>
      <Gallery></Gallery>
      
    </div>
  );
};

export default Home;

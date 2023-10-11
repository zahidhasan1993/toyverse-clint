import { useEffect } from "react";
import SectionTItle from "../shared/SectionTItle";
import Banner from "./Banner";
import Gallery from "./Gallery";
import TopToys from "./TopToys";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner></Banner>
      <SectionTItle name="Our Gallery"></SectionTItle>
      <Gallery></Gallery>
      <TopToys></TopToys>
    </div>
  );
};

export default Home;

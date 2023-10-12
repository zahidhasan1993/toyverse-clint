import { useEffect } from "react";
import SectionTItle from "../shared/SectionTItle";
import Banner from "./Banner";
import Gallery from "./Gallery";
import TopToys from "./TopToys";
import useTitle from "../../customHooks/useTitle";
import ParallaxBanner from "./ParallaxBanner";
import TabItems from "./TabItems";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle('ToyVerse | Home')

  return (
    <div>
      <Banner></Banner>
      <SectionTItle name="Our Gallery"></SectionTItle>
      <Gallery></Gallery>
      <ParallaxBanner></ParallaxBanner>
      <TopToys></TopToys>
      <SectionTItle name="Get Your Toy"></SectionTItle>
      <TabItems></TabItems>
    </div>
  );
};

export default Home;

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MainCard from "../shared/MainCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useToys from "../../customHooks/useToys";

const TabItems = () => {
  const toys = useToys();
  useEffect(() => {
    AOS.init();
  }, []);

  const carToys = toys.filter((car) => car.category === "car");
  const superHeros = toys.filter(
    (superHero) => superHero.category === "superhero"
  );
  const softToys = toys.filter((softToy) => softToy.category === "softtoy");
  const scineceToys = toys.filter((science) => science.category === "science");

  return (
    <div className="mb-20">
      <Tabs>
        <TabList>
          <Tab>Cars</Tab>
          <Tab>SuperHeros</Tab>
          <Tab>Soft Toys</Tab>
          <Tab>Science Toys</Tab>
        </TabList>
        {/* give tab contents here */}
        <TabPanel>
          <div data-aos="fade-up" className="md:grid md:grid-cols-4 gap-5 px-8">
            {carToys.map((car) => (
              <MainCard key={car._id} item={car}></MainCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div data-aos="fade-up" className="md:grid md:grid-cols-4 gap-5 px-8">
            {superHeros.map((superHero) => (
              <MainCard key={superHero._id} item={superHero}></MainCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div data-aos="fade-up" className="md:grid md:grid-cols-4 gap-5 px-8">
            {softToys.map((softToy) => (
              <MainCard key={softToy._id} item={softToy}></MainCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div data-aos="fade-up" className="md:grid md:grid-cols-4 gap-5 px-8">
            {scineceToys.map((scienceToy) => (
              <MainCard key={scienceToy._id} item={scienceToy}></MainCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabItems;

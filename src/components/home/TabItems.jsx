import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";
import { useEffect, useState } from "react";

const TabItems = () => {
    
    const [toys,setToys] = useState([]);


    useEffect(() => {
        fetch('alltoys.json')
        .then(res => res.json())
        .then(data => {
            setToys(data)
        })
    }, [])
    // console.log('this is our toys', toys);
    const carToys = toys.filter(car => car.category === 'car');
    const superHeros = toys.filter(superHero => superHero.category === 'superhero');
    const softToys = toys.filter(softToy => softToy.category === 'softtoy');
    const scineceToys = toys.filter(science => science.category === 'science');
    
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Cars</Tab>
          <Tab>SuperHeros</Tab>
          <Tab>Soft Toys</Tab>
          <Tab>Science Toys</Tab>
        </TabList>
        {/* give tab contents here */}
        <TabPanel>
         <div className="md:grid md:grid-cols-4 gap-5 px-8">
         {
            carToys.map((car) => <TabCard key={car.id} item={car}></TabCard>)
          } 
         </div>
        </TabPanel>
        <TabPanel>
        <div className="md:grid md:grid-cols-4 gap-5 px-8">
         {
            superHeros.map((superHero) => <TabCard key={superHero.id} item={superHero}></TabCard>)
          } 
         </div>
        </TabPanel>
        <TabPanel>
        <div className="md:grid md:grid-cols-4 gap-5 px-8">
         {
            softToys.map((softToy) => <TabCard key={softToy.id} item={softToy}></TabCard>)
          } 
         </div>
        </TabPanel>
        <TabPanel>
        <div className="md:grid md:grid-cols-4 gap-5 px-8">
         {
            scineceToys.map((scienceToy) => <TabCard key={scienceToy.id} item={scienceToy}></TabCard>)
          } 
         </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabItems;

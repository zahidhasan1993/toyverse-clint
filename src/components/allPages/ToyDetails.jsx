import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const item = useLoaderData();
  console.log(item);
  return (
    <div className="w-full">
    <div className="inline-block overflow-hidden shadow-xl  cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300 w-full mt-32 rounded-xl">
      <div className="relative group w-full overflow-hidden bg-black h-[35rem] ">
        <LazyLoadImage
          src={item.picture}
          className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
          alt="item image"
        />
        <div className="absolute bg-gradient-to-t from-black w-full h-full flex items-end justify-center -inset-y-0">
          <h1 className="font-bold text-2xl text-white mb-2">{item.name}</h1>
        </div>
      </div>
      <div className="bg-white">
        <div className="text-center px-3 pb-6 pt-2">
          <p className="mt-2 font-sans font-light text-slate-700">
            {item.details}
          </p>
        </div>
        <div className="flex justify-center pb-3 text-slate-700">
          <div className="text-center mr-3 border-r pr-3 last:border-r-0">
            <h2>Price</h2>
            <span>${item.price}</span>
          </div>
          <div className="text-center mr-3 border-r pr-3 last:border-r-0">
            <h2>Seller Email</h2>
            <span>{item.email}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ToyDetails;

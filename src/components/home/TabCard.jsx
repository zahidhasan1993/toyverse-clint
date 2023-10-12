import { Link } from "react-router-dom";

const TabCard = ({ item }) => {
  console.log(item);
  return (
    <div className="relative mx-auto w-full max-w-sm pt-6">
      <a
        href="#"
        className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
      >
        <div className="rounded-lg">
          <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
            <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
              <img src={item.picture} alt="toy images" />
            </div>

            <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
              {" "}
              {item.category}
            </span>
          </div>

          <div className="">
            <div className="mt-4 grid grid-cols-2">
              <div className="flex items-center">
                <div className="relative">
                  <h2
                    className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                    
                  >
                    {item.name}
                  </h2>
                  <p
                    className="mt-2 line-clamp-1 text-sm text-gray-800"
                    title="New York, NY 10004, United States"
                  >
                    Ratings : {item.rating}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                  <span className="text-sm uppercase"> $ </span>
                  <span className="text-lg">{item.price}</span>
                </p>
              </div>
            </div>

            <div className="mt-2 mb-5 border-t border-gray-200 pt-3 text-sm text-gray-600">
              {item.details.slice(0, 130)}...
            </div>
            <Link to="">
              <button className="py-2 px-5 bg-red-500 text-white rounded-lg font-semibold text-sm hover:bg-red-600 hover:scale-125 duration-300 ease-in-out">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </a>
    </div>
  );
};

export default TabCard;

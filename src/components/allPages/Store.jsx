import pic1 from "../../assets/images/gallery/12.jpg";
import pic2 from "../../assets/images/gallery/3.jpg";
import pic3 from "../../assets/images/gallery/6.jpg";
import pic4 from "../../assets/images/gallery/9.jpg";
import pic5 from "../../assets/images/gallery/10.jpg";
import pic6 from "../../assets/images/gallery/5.jpg";
import pic7 from "../../assets/images/gallery/7.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import SectionTItle from "../shared/SectionTItle";
import useToys from "../../customHooks/useToys";
import MainCard from "../shared/MainCard";
import { useEffect } from "react";
import useTitle from "../../customHooks/useTitle";
const Store = () => {
    const toys = useToys();
    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    useTitle("ToyVerse | Store")

  return (
    <div className="mb-20">
      <section className="pt-10">
        <div className="relative items-center w-full px-5 py-24 mx-auto overflow-hidden md:px-12 lg:px-16 max-w-7xl">
          <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <div className="max-w-xl lg:p-10">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    TAll toys of toyverse
                  </p>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                    Have a look to our toys, its unique and interesting. Register for have more features and to place your toy for the world.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  <Link
                    to='/login'
                    className="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                  >
                    Register
                  </Link>
                  <Link
                    to='/contact'
                    className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                  >
                    Contact Us &nbsp; →
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-10 lg:flex-row lg:gap-6">
                
              </div>
            </div>
            <div className="lg:mt-0 lg:ml-auto">
              <div className="absolute transform lg:-translate-y-1/2 lg:left-1/2 lg:top-1/2 lg:translate-x-8 sm:left-1/2 sm:top-0 sm:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-full overflow-hidden w-44 lg:opacity-100 sm:opacity-0">
                      <LazyLoadImage
                        alt="Lexingtøn thumbnail"
                        className="object-cover"
                        src={pic1}
                        decoding="async"
                        height="926"
                        loading="lazy"
                        width="428"
                      />
                    </div>
                    <div className="h-full overflow-hidden w-44">
                      <LazyLoadImage
                        alt="Lexingtøn thumbnail"
                        className="object-cover"
                        src={pic2}
                        decoding="async"
                        height="926"
                        loading="lazy"
                        width="428"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-full overflow-hidden w-44">
                      <LazyLoadImage
                        alt="Lexingtøn thumbnail"
                        className="object-cover"
                        src={pic3}
                        decoding="async"
                        height="926"
                        loading="lazy"
                        width="428"
                      />
                    </div>
                    <div className="h-full overflow-hidden w-44">
                      <LazyLoadImage
                        alt="Lexingtøn thumbnail"
                        className="object-cover"
                        src={pic4}
                        decoding="async"
                        height="926"
                        loading="lazy"
                        width="428"
                      />
                    </div>
                    <div className="h-full overflow-hidden w-44">
                      <LazyLoadImage
                        alt="Lexingtøn thumbnail"
                        className="object-cover"
                        src={pic5}
                        decoding="async"
                        height="926"
                        loading="lazy"
                        width="428"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-full overflow-hidden w-44">
                      <LazyLoadImage
                        alt="Lexingtøn thumbnail"
                        className="object-cover"
                        src={pic6}
                        decoding="async"
                        height="926"
                        loading="lazy"
                        width="428"
                      />
                    </div>
                    <div className="h-full overflow-hidden w-44">
                      <LazyLoadImage
                        alt="Lexingtøn thumbnail"
                        className="object-cover"
                        src={pic7}
                        decoding="async"
                        height="926"
                        loading="lazy"
                        width="428"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionTItle name="Our Toys"></SectionTItle>
      <div className="md:grid md:grid-cols-4 gap-10">
        {
            toys.map(toy => <MainCard key={toy._id} item={toy}></MainCard>)
        }
      </div>
    </div>
  );
};

export default Store;

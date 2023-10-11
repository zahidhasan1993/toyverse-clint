import pic1 from "../../assets/images/gallery/1.jpg";
import pic2 from "../../assets/images/gallery/2.jpg";
import pic3 from "../../assets/images/gallery/3.jpg";
import pic4 from "../../assets/images/gallery/4.jpg";
import pic5 from "../../assets/images/gallery/5.jpg";
import pic6 from "../../assets/images/gallery/6.jpg";
import pic7 from "../../assets/images/gallery/7.jpg";
import pic8 from "../../assets/images/gallery/8.jpg";
import pic9 from "../../assets/images/gallery/9.jpg";
import pic10 from "../../assets/images/gallery/10.jpg";
import pic11 from "../../assets/images/gallery/11.jpg";
import pic12 from "../../assets/images/gallery/12.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Gallery = () => {
  return (
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <LazyLoadImage
            className="h-auto max-w-full rounded-lg"
            src={pic1}
            alt=""
          />
        </div>
        <div>
          <LazyLoadImage
            className="h-auto max-w-full rounded-lg"
            src={pic3}
            alt=""
          />
        </div>
        <div>
          <LazyLoadImage
            className="h-auto max-w-full rounded-lg"
            src={pic6}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <LazyLoadImage
            className="h-auto max-w-full rounded-lg"
            src={pic8}
            alt=""
          />
        </div>
        <div>
          <LazyLoadImage
            className="h-auto max-w-full rounded-lg"
            src={pic2}
            alt=""
          />
        </div>
        <div>
          <LazyLoadImage
            className="h-auto max-w-full rounded-lg"
            src={pic5}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <LazyLoadImage
            className="h-auto max-w-full rounded-lg"
            src={pic4}
            alt=""
          />
        </div>
        <div>
          <LazyLoadImage
            className="h-auto max-w-full rounded-lg"
            src={pic9}
            alt=""
          />
        </div>
        <div>
          <LazyLoadImage
            className="h-auto max-w-full rounded-lg"
            src={pic7}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <LazyLoadImage
            className="h-auto max-w-full rounded-lg"
            src={pic10}
            alt=""
          />
        </div>
        <div>
          <LazyLoadImage
            className="h-auto max-w-full rounded-lg"
            src={pic11}
            alt=""
          />
        </div>
        <div>
          <LazyLoadImage
            className="h-auto max-w-full rounded-lg"
            src={pic12}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

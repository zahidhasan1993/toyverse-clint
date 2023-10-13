import Swal from "sweetalert2";

const Contact = () => {
    const handleSubmit = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent",
            showConfirmButton: false,
            timer: 2000,
          });
    }
  return (
    <section className="text-gray-600 body-font relative min-h-screen">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9594074027727!2d90.3392404756588!3d23.784459787467306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c08b6ef3d4db%3A0x2ea7b068734c669f!2sBagbari%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1697158921419!5m2!1sen!2sbd"
          height="450"
          className="border-0 w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-red-600 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Please give us some tips
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            ></textarea>
          </div>
          <button onClick={handleSubmit} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import React from "react";
// import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Cards = () => {
  return (
    <div
      id="plans"
      className="w-full py-12 px-4 min:h-[100vh] bg-white text-black"
    >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <ScrollAnimation animateIn="bounceInDown" animateOut="fadeIn">
          <div className="w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-500 hover:bg-gray-300">
            <h2 className="text-2xl font-bold text-center py-6">
              Starter Plan
            </h2>
            <p className="text-center font-bold text-2xl">$300</p>
            <div className="text-center font-medium">
              <p className="py-1 border-b-2 mx-8 mt-8 border-t-2">
                Fully-Featured Custom Website
              </p>
              <p className="py-1 border-b-2 mx-8">
                Mobile Responsive across devices
              </p>
              <p className="py-1 border-b-2 mx-8">
                Compatible with Google Chrome, Safari, Microsoft Edge, Samsung &
                other major browsers.
              </p>
              <p className="py-1 border-b-2 mx-8">
                Well Designed and Fully Functional
              </p>
              <p className="py-1 border-b-2 mx-8">
                Reliable Hosting and Domain Providers
              </p>
              <p className="py-1 border-b-2 mx-8">
                Secured with trusted SSL Certificates
              </p>
              <p className="py-1 border-b-2 mx-8">
                Global Exposure through SEO Practices
              </p>
              <p className="py-1 border-b-2 mx-8">Post-Project Support</p>
              <p className="py-1 border-b-2 mx-8">
                Hosting and Domain up to 12-24 Months
              </p>
            </div>

            <button className="mx-auto bg-[#00DF9a] w-[200px] rounded-md font-medium my-6 py-3 text-black">
              <a target="blank" href="https://flutterwave.com/pay/qjwvkpuhh2dw">
                Choose Plan
              </a>
            </button>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInDown" animateOut="fadeIn">
          <div className="bg-gray-100 w-full shadow-xl flex flex-col md:my-0 my-4 p-4 rounded-lg hover:scale-105 hover:bg-white duration-500">
            <h2 className="text-2xl font-bold text-center py-6">
              Business Plan
            </h2>
            <p className="text-center font-bold text-2xl">$600</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b-2 mx-8 mt-8 border-t-2">
                All Features in the Starter Plan
              </p>
              <p className="py-2 border-b-2 mx-8">User and Mobile Friendly</p>
              <p className="py-2 border-b-2 mx-8">
                Industry Standard E-commerce and Marketing Features
              </p>
              <p className="py-2 border-b-2 mx-8">
                Full Designed and Featured to suit your needs
              </p>
              <p className="py-2 border-b-2 mx-8">
                Marketing copies that scales your needs
              </p>
              <p className="py-2 border-b-2 mx-8">
                Training on Website Developement
              </p>
              <p className="py-2 border-b-2 mx-8">
                {" "}
                Sell and receive money from anywhere in the world through our
                in-built e-commerce management systems and secured payment
                platforms
              </p>
            </div>
            <button className="mx-auto bg-black w-[200px] rounded-md font-medium my-6 py-3 text-[#00DF9a]">
              <a target="blank" href="https://flutterwave.com/pay/wqenbb5umsvb">
                Choose Plan
              </a>
            </button>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInDown" animateOut="fadeIn">
          <div className="w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 hover:bg-gray-300 duration-500">
            <h2 className="text-2xl font-bold text-center py-6">Custom Plan</h2>
            {/* <p className="text-center font-bold text-4xl">$600</p> */}

            <div className="text-center font-medium">
              <p className="py-2 border-b-2 mx-8 mt-8 border-t-2">
                The Starter and Business Plan doesn't meet your needs? <br />
                Speak to us, We will bring your Ideas to life.
              </p>
              {/* <p className="py-2 border-b-2 mx-8">10 Granted User</p>
            <p className="py-2 border-b-2 mx-8">Send up to 10 GB</p> */}
            </div>

            <button className="mx-auto bg-[#00DF9a] w-[200px] rounded-md font-medium my-6 py-3 text-black">
              <a href="mailto:micah@devdrive.xyz">Choose Plan</a>
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Cards;

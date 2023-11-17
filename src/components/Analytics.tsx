// import analy from "../assets/971.jpg";
import Frame1 from "../assets/Frame (4).png";
import Frame2 from "../assets/Frame (6).png";
import Frame3 from "../assets/Frame (8).png";
import Frame4 from "../assets/S1.png";
import Frame5 from "../assets/S2.png";
import Frame6 from "../assets/S3.png";
// import ScrollAnimation from "react-animate-on-scroll";

const Analytics = () => {
  return (
    // <div id="analysis" className="w-full bg-white py-16 px-4">
    //   <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
    //     <img className="w-[500px] mx-auto my-4" src={analy} alt="laptop" />
    //     <div className="flex flex-col justify-center mx-2 max-md:text-center">
    //       <p className="text-[#00DF9a] uppercase font-bold">
    //         data analytics dashboard
    //       </p>
    //       <h1 className="md:text-4xl sm:text-3xl text-2xl text-black font-bold py-2">
    //         Manage Data Analytics Centrally
    //       </h1>
    //       <p className="text-black">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit et
    //         voluptatum iusto asperiores reprehenderit obcaecati quibusdam
    //         voluptates earum autem possimus blanditiis, sapiente unde nulla
    //         minima sequi! Aliquid id ipsa sapiente!
    //       </p>
    //       <button className="mx-auto bg-black w-[200px] rounded-md font-medium my-6 py-3 text-[#00DF9a] md:mx-0">
    //         Get Started
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div id="about" className="w-full text-black bg-white pt-16">
      <div className=" mx-auto max-w-[1240px]">
        <div className=" text-center">
          <h1 className="text-4xl font-bold">What We Do</h1>
          <h3 className=" font-medium text-3xl my-8 md:w-[60%] mx-auto">
            Sometimes, all you have to do is is give up the good to attain the
            great!
          </h3>
        </div>
        <div className="flex md:flex-row flex-col justify-center gap-10">
          <div className="shadow-2xl rounded-3xl p-4 my-4">
            <img className="w-12 mx-auto bg-white" src={Frame1} alt="" />
            <h1 className="text-center font-semibold text-2xl text-black my-4">
              Web Developement
            </h1>
            <p className="text-xl text-gray-700 p-4">
              The world is digital and your brand should be too. let's work with
              you to create a top digital platform for your brand.
            </p>
          </div>
          <div className="shadow-2xl rounded-3xl p-4">
            <img className="w-12 mx-auto bg-white" src={Frame2} alt="" />
            <h1 className="text-center font-semibold text-2xl text-black my-4">
              Mobile Developement
            </h1>
            <p className="text-xl text-gray-700 p-4">
              The world is evolving and you need to be easily accessible
              everywhere people go with on their devices and we are your best
              provider for that.
            </p>
          </div>
          <div className="shadow-2xl rounded-3xl p-4 my-4">
            <img className="w-12 mx-auto bg-white" src={Frame3} alt="" />
            <h1 className="text-center font-semibold text-2xl text-black my-4">
              IT Consultancy
            </h1>
            <p className="text-xl text-gray-700">
              DevDrive offers top IT Consultancy for your organisation &
              training services for your team & users.
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-16 bg-black text-white py-16">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center">
            <h1 className="font-semibold text-5xl my-4">
              Bring <span className="italic text-[#ff9041]">Innovation</span> to
              Your Company
            </h1>
            <p className="w-[60%] max-lg:w-[95%] mx-auto text-md lg:text-lg">
              Employ the services of a top IT & Web Development Agency to start
              the journey towards success and improve your business revenue.
            </p>
          </div>
          <div className="flex justify-center mt-16 flex-wrap gap-6">
            <div className="rounded-3xl w-[370px] border border-[#141F72] px-6 py-14 hover:scale-105 duration-300 text-center shadow-inner shadow-[#00DF9a] bg-white">
              <img className="w-18 mx-auto bg-white" src={Frame4} alt="" />
              <h1 className="text-[#141F72] text-xl mb-6 font-semibold">
                Gain Digital Advantage
              </h1>
              <p className="text-[#666666] font-medium">
                DevDrive employs the use of innovative strategies to position
                your brand to stand out in the digital space.
              </p>
            </div>
            <div className="rounded-3xl w-[370px] border border-[#141F72] px-6 py-14 hover:scale-105 duration-300 text-center shadow-inner shadow-[#00DF9a] bg-white">
              <img className="w-18 mx-auto bg-white" src={Frame5} alt="" />
              <h1 className="text-[#141F72] text-xl mb-6 font-semibold">
                Result-Oriented Solutions
              </h1>
              <p className="text-[#666666] font-medium">
                Using strategic insights, solutions are dosigned to achieve your
                business goals.
              </p>
            </div>
            <div className="rounded-3xl w-[370px] border border-[#141F72] px-6 py-10 hover:scale-105 duration-300 text-center shadow-inner shadow-[#00DF9a] bg-white">
              <img className="w-18 mx-auto bg-white" src={Frame6} alt="" />
              <h1 className="text-[#141F72] text-xl mb-6 font-semibold">
                Working with Your Audience in Mind
              </h1>
              <p className="text-[#666666] font-medium">
                Your audience is the goal and we achieve this by taking the
                position of your audience to develop a working solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

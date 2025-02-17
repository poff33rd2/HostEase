import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="font-sans">
        {/* Header */}
        <header className="bg-white shadow sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 ">
            <div className="flex justify-between items-center">
              <div className="flex justify-stretch items-center text-2xl font-bold text-gray-800">
                <img
                  className="w-15 px-2"
                  src="https://res.cloudinary.com/dtkhwq0je/image/upload/v1712778357/HE-red-logo_fjqyti.png"
                  href=""
                ></img>
                <h3>HostEase <span className="font-light text-lg">tech for waiters</span></h3>
              </div>
              <nav className="space-x-6 px-6">
                <a href="#" className="text-black text-xl hover:text-gray-900">
                  Solutions
                </a>
                <a href="#" className="text-black text-xl hover:text-gray-900">
                  Business Cases
                </a>
                <a href="#" className="text-black text-xl hover:text-gray-900">
                  Resources
                </a>
                <a href="#" className="text-black text-xl hover:text-gray-900">
                  Pricing
                </a>
                <a href="#" className="text-black text-xl hover:text-gray-900">
                  Contact
                </a>
              </nav>
              <div className="flex space-x-6 items-center">
              <a href="" className="text-black">Login</a>
              <button className="mt-4 w-auto mx-auto text-white px-6 py-3 rounded-full"> Get Started</button>
            </div>
            </div>
            
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-[#B6311F] mx-auto px-10">
          <div className="flex flex-col md:flex-row items-center py-4 mx-10">
            <div className="md:w-1/2">
              <h1 className="text-left font-bold whitespace-pre text-white leading-tight">
                Host Smarter, 
                Serve Better
              </h1>

              <form className="mt-8 flex flex-col items-start p-6 rounded-lg border border-gray-300 shadow-lg bg-white space-y-4">
                <p className="text-3xl text-gray-600 text-left mt-4 mb-4">
                  Boost Efficiency and Revenue with Self-Service Table Ordering and Payment Technology
                </p>
                <input
                  type="text"
                  placeholder="Enter your business name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Enter your business address"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="tel"
                  placeholder="Enter your business phone number"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="submit"
                  className="mt-4 w-100 mx-auto text-white px-6 py-3 rounded-full"
                >
                  Get Started
                </button>
              </form>
            </div>
            <div className="relative w-full md:w-1/2 h-96 pl-10">
              {/* Base Image */}
              <img
                src="https://res.cloudinary.com/dtkhwq0je/image/upload/v1739756421/he-content/1_wabzda.png"
                alt="Hero Image"
                className="rounded-3xl absolute w-125 h-125 rotate-2"
                style={{ zIndex: 1 }}
              />

              {/* Top Image 1 */}
              <img
                src="https://res.cloudinary.com/dtkhwq0je/image/upload/v1739763182/he-dinnerfood_blqnji.png"
                alt="Hero Image"
                className="rounded-lg absolute w-60 h-60 rotate-2 "
                style={{ bottom: "-100px", right: "100px", zIndex: 2 }}
              />
            </div>
          </div>
        </section>

        {/* Why Choose This Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Minutes of waiting, Now instantaneous.
            </h1>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
                          {/* Card 1 */}

              <div className=" w-95 bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://res.cloudinary.com/dtkhwq0je/image/upload/v1739756421/he-content/2_zm5goo.png
"
                  alt="Card 1"
                  className="w-auto h-80 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Higher satisfaction in less time</h3>
                <p className="text-gray-600 mt-2">
                HostEase reduces table trips, minimizes wait times, and streamlines service by letting guests order, request help, modify orders, and pay seamlessly.
                </p>
              </div>
              {/* Card 2 */}
              <div className="w-95 bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://res.cloudinary.com/dtkhwq0je/image/upload/v1739771332/he-content-2/6_zrimzc.png"
                  alt="Card 2"
                  className="w-auto h-80 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">It all happens at the table</h3>
                <p className="text-gray-600 mt-2">
                You can order, request service, adjust your meal, and pay—all without waiting—making your dining experience effortless and enjoyable.
                </p>
              </div>
              {/* Card 3 */}
              <div className="w-95 bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://res.cloudinary.com/dtkhwq0je/image/upload/v1739813907/he-kitchen_agbfox.png"
                  alt="Card 2"
                  className="w-auto h-80 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Smarter, Smoother Kitchens</h3>
                <p className="text-gray-600 mt-2">
                HostEase enhances kitchen efficiency with real-time order tracking, fewer errors, faster modifications, and seamless POS integration for smoother service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="container rounded-lg bg-[#B6311F] mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className=" text-left text-3xl font-bold text-white mb-8">
                What Our Customers Say
              </h2>
              <p className="text-left text-white whitespace-pre-line">
              "Our waitstaff spends less time running back and forth, and our guests love the convenience of ordering, requesting service, and paying right from their table. The system seamlessly integrates with our kitchen, reducing errors and keeping everything running smoothly, even on our busiest nights. The customer support team has been outstanding—responsive, knowledgeable, and always ready to help. If you're in the restaurant business, this is the upgrade you need!"

              <span  className="font-bold block">
              — Marco R., Owner of La Bella Trattoria
              </span>
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://res.cloudinary.com/dtkhwq0je/image/upload/v1739815443/he-italianchef_cwzvug.png"
                alt="Review Image"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Make It Work For You Section */}
        <section className=" bg-white mx-10 px-5 py-16">
          <div className="flex flex-col md:flex-row items-center">

            {/* Explaination Column */}
            <div className="md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Smarter Service, Smoother Operations
              </h2>
              <p className="text-gray-600">
              Empower processes with automated table-side ordering, real-time service requests, and integrated digital payments—reducing bottlenecks, increasing staff productivity, and improving overall guest satisfaction.
              </p>
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Learn More
              </button>
            </div>

            {/* image section */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://res.cloudinary.com/dtkhwq0je/image/upload/v1739771335/he-content-2/4_j3wkqp.png"
                alt="Make It Work Image"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Make It Work For You Section 2 */}
<section className="bg-white mx-auto px-10 py-16">
  <div className="flex mx-10 flex-col md:flex-row items-center">
    
    {/* Image Section */}
    <div className="md:w-1/2 mt-8 md:mt-0">
      <img
        src="https://res.cloudinary.com/dtkhwq0je/image/upload/v1739771333/he-content-2/5_pf0p8r.png"
        alt="Make It Work Image"
        className="rounded-lg"
      />
    </div>

    {/* Text & Button Section */}
    <div className="md:w-1/2 text-left">
      <h2 className="text-3xl font-bold text-gray-600 mb-4">
      Streamline Operations & Maximize Efficiency
      </h2>
      <p className="text-gray-600 mb-6">
      Optimize management by reducing wait times, improving table turnover, and minimizing staff workload. With real-time order updates, digital payments, and instant guest requests, your team can operate more efficiently while enhancing the dining experience.
      </p>
      <div className="mt-6">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

      </div>
    </>
  );
}

export default App;

import { Sparkles } from "lucide-react";
import React from "react";

const PricingNew = () => {
  return (
    <div>
      <section>
        <div className="container max-w-full mx-auto py-24 px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium bg-taski-primary/10 text-taski-primary rounded-full dark:bg-taski-primary/20">
              <Sparkles size={12} className="mr-1.5" />
              Plans et tarifs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Un plan adapté à{" "}
              <span className="text-gradient dark:text-gradient-dark">
                chaque besoin
              </span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto dark:text-foreground-dark/70">
              Choisissez l'offre qui vous convient le mieux et commencez à
              optimiser votre productivité dès aujourd'hui.
            </p>
          </div>

          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div className="relative block flex flex-col md:flex-row items-center">
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      Hobby
                    </h1>
                    <h2 className="text-sm text-gray-500 text-center pb-6">
                      FREE
                    </h2>
                    Stripe offers everything needed to run an online business at
                    scale. Get in touch for details.
                  </div>

                  <div className="flex flex-wrap mt-3 px-6">
                    <ul>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            className="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          No setup
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            className="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          No setups
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            className="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          Speed
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="block flex items-center p-8  uppercase">
                    <button
                      className="mt-3 text-lg font-semibold 
        bg-black w-full text-white rounded-lg 
        px-6 py-3 block shadow-xl hover:bg-gray-700"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
                <div className="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
                  Most Popular
                </div>
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    Expert
                  </h1>
                  <h2 className="text-sm text-gray-500 text-center pb-6">
                    <span className="text-3xl">€19</span> /mo
                  </h2>
                  Stripe offers everything needed to run an online business at
                  scale. Get in touch for details.
                </div>
                <div className="flex pl-12 justify-start sm:justify-start mt-3">
                  <ul>
                    <li className="flex items-center">
                      <div className="rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        No setup
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        Hidden fees
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">
                        Original
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="block flex items-center p-8  uppercase">
                  <button
                    className="mt-3 text-lg font-semibold 
        bg-black w-full text-white rounded-lg 
        px-6 py-3 block shadow-xl hover:bg-gray-700"
                  >
                    Select
                  </button>
                </div>
              </div>
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      Enteprise
                    </h1>
                    <h2 className="text-sm text-gray-500 text-center pb-6">
                      €39 /mo
                    </h2>
                    Stripe offers everything needed to run an online business at
                    scale. Get in touch for details.
                  </div>
                  <div className="flex flex-wrap mt-3 px-6">
                    <ul>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            className="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          Electric
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            className="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          Monthly
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            className="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg ml-3">
                          No setup
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="block flex items-center p-8  uppercase">
                    <button
                      className="mt-3 text-lg font-semibold 
        bg-black w-full text-white rounded-lg 
        px-6 py-3 block shadow-xl hover:bg-gray-700"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingNew;

import React from "react";

const Card = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
          <div class="p-4 md:w-1/5 m-5 flex flex-col text-center items-center bg-white shadow-xl">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src="" alt="" />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Water
              </h2>
            </div>
          </div>
          <div class="p-4 md:w-1/5 m-5 flex flex-col text-center items-center bg-white shadow-xl">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src="" alt="" />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Water
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;

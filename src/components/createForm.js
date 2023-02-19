import React from "react";
import "../styles/app.css";
const CreateForm = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-10">
      <div className="w-[388px] h-[431px] border-solid border-[1px] border-gray-300 flex justify-center">
        <div className="w-[348px] h-[390px] border-solid border-[1px] border-gray-300 flex flex-wrap rounded-[15px] bg-white z-20">
          <div className="w-[348px] h-[42px] flex items-center border-b border-gray-300">
            <div className="w-[348px] h-[24px] text-center font-semibold">
              Create new post
            </div>
          </div>
          <div className="w-[348px] h-[348px] self-end p-[24px] flex flex-wrap justify-center content-center">
            <div className="border-solid border-gray-300 w-[90px] h-[77px]">
              <img src="/images/create_logo/create_logo.jpeg" />
            </div>
            <div className="w-[255.95px] h-[40px] pt-[15px] flex justify-center text-xl">
              Drag photos and videos here
            </div>
            <div className="w-[182.01px] h-[40px] mt-[15px] flex justify-center">
              <button className="w-[174.01px] h-[32px] bg-blue-500 rounded-lg text-white text-sm text-center">
                Select from Computer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;

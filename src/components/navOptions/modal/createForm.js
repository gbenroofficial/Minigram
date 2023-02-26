import React, { useRef } from "react";
import "../../../styles/app.css";
import { ClickOutside } from "../../functionalWraps/clickOutside";
// eslint-disable-next-line react/prop-types
const CreateForm = ({ setCreate }) => {
  const hiddenInput = useRef();

  // eslint-disable-next-line no-unused-vars
  const handleClick = (event) => {
    hiddenInput.current.click();
  };

  const handleChange = (event) => {
    // eslint-disable-next-line no-unused-vars
    const selected = event.target.files[0];
    console.log(selected);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-20">
      <ClickOutside
        onClick={setCreate}
        className="items-center flex justify-center"
      >
        <div className="w-[348px] h-[390px] sm:w-[55vh] sm:h-[64vh] lg:w-[570px] lg:h-[600px] border-solid border-[1px] border-gray-300 flex justify-center">
          <div className="w-[348px] h-[390px] sm:w-[55vh] sm:h-[64vh] lg:w-[570px] lg:h-[600px] border-solid border-[1px] border-gray-300 flex flex-wrap justify-center rounded-[15px] bg-white z-20">
            <div className="w-[348px] h-[42px] sm:w-[55vh] lg:w-[570px] flex items-center border-b border-gray-300">
              <div className="w-[348px] h-[24px] sm:w-[55vh] lg:w-[570px] text-center font-semibold">
                Create new post
              </div>
            </div>
            <div className="w-[348px] h-[348px] sm:w-[55vh] sm:h-[60vh] lg:w-[597px] lg:h-[597px] self-end p-[24px] flex flex-wrap flex-col items-center justify-center">
              <div className="border-solid border-gray-300 w-[90px] h-[77px]">
                <img src="/images/create_logo/create_logo.jpeg" />
              </div>

              <div className="w-[255.95px] h-[40px] pt-[15px] flex justify-self-center text-xl">
                Drag photos and videos here
              </div>
              <div className="w-[182.01px] h-[40px] mt-[15px] flex justify-center">
                <button
                  onClick={handleClick}
                  className="w-[174.01px] h-[32px] bg-blue-500 rounded-lg text-white text-sm text-center"
                >
                  Select from Computer
                </button>
                <input
                  className="hidden"
                  type="file"
                  accept="image/jpeg, image/png"
                  ref={hiddenInput}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </ClickOutside>
    </div>
  );
};

export default CreateForm;

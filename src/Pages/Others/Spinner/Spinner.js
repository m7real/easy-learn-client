import React from "react";
import { ThreeDots } from "react-loader-spinner";

// this is a three dots loader-spinner
const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[46.5vh]">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;

import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { GrFormView } from "react-icons/gr";

function DashCard(props) {
  const [activeBtn, setActiveBtn] = useState("Add");
  let TabLayout;
  if (activeBtn === "Add") {
    TabLayout = (
      <div>
        <hr />
        <h1 className="font-semibold text-xl p-4">{props.btnAdd}</h1>
        <div className="p-4">{props.AddComponent}</div>
      </div>
    );
  }
  if (activeBtn === "View") {
    TabLayout = (
      <div>
        <hr />
        <h1 className="font-semibold text-xl p-4">{props.btnView}</h1>

        <div className="p-4 w-80 md:w-full overflow-x-scroll">
          {props.ViewComponents}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen md:px-6 md:py-8">
      <div className="card shadow-md bg-white">
        {/* top section starts  */}
        <div className="flex items-center">
          <div
            className={
              activeBtn === "Add"
                ? "flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8 bg-gray-200"
                : "flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8"
            }
            onClick={() => {
              setActiveBtn("Add");
            }}
          >
            <IoMdAdd />
            {props.btnAdd}
          </div>
          <div
            className={
              activeBtn === "View"
                ? "flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8 bg-gray-200"
                : "flex items-center border-2 border-gray-100 cursor-pointer p-4 md:p-8"
            }
            onClick={() => {
              setActiveBtn("View");
            }}
          >
            <GrFormView className="text-2xl" />
            {props.btnView}
          </div>
        </div>
        {/* top section ends  */}
        {props.children}
        {TabLayout}
      </div>
    </div>
  );
}

export default DashCard;

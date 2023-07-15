import { Button } from "antd";
import React from "react";

const TopUp = ({ item }) => {
  return (
    <div
      style={{ backgroundImage: `url(${item.bgImg})` }}
      className={`rounded-[4px] relative topUp `}
    >
      <div className="flex flex-col justify-between gap-[8px] w-[144px] h-[83px] absolute top-[77px] left-[13px] topUpItem">
        <p className="font-[900] text-[#fff] text-[14px] ">
          {item.title}
        </p>

        <Button className="bg-[#669640] px-[16px] py-[14px] rounded-[4px] h-[31px] flex justify-center items-center border-none text-[#fff] font-[900]">
          Discover Now!
        </Button>
      </div>
    </div>
  );
};

export default TopUp;

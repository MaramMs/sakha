"use client";
import React, { useContext } from "react";
import HomeUrgentNav from "../../../components/HomeUrgentNav";
import Categories from "../../../components/Categories";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "../../../components/CategoryCard";
import { Button, Empty } from "antd";
import { ProjectByCategoryIdContext } from "@/contexts/ProjectByCategoryId";
import Link from "next/link";

const UrgentFundraising = () => {
  const { projectByCategoryId } = useContext(ProjectByCategoryIdContext);

  return (
    <div className="min-h-screen   bg-[#F8F8F8] ">
      <div className="p-[16px] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <HomeUrgentNav title="Urgent Fundraising" />
          <div className="flex flex-col gap-[16px] ">
            <Categories />
{
  projectByCategoryId.length !=0 ? 
  (
    projectByCategoryId.map((item) => {
      return <Link href='/caseDetails'>
      <CategoryCard item={item} type="urgent" />
      </Link>;
    })
  )
  : (<Empty />)
}





          
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgentFundraising;

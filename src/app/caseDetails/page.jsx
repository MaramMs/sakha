"use client";
import React, { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Button, Progress } from "antd";
import Image from "next/image";
import HomeUrgentNav from "../../../components/HomeUrgentNav";
import PrayersCard from "../../../components/PrayersCard";
import Link from "next/link";
import { ProjectByCategoryIdContext } from "@/contexts/ProjectByCategoryId";
import { useSearchParams } from "next/navigation";

const CaseDetails = () => {
  const searchParams = useSearchParams();
  
  
  const id = searchParams.get('id');
  const {projectData, getDetailsProject  } = useContext(ProjectByCategoryIdContext);
  console.log(projectData,'projectData');
  const percentageRaised = ((projectData.raised / projectData.total_price) * 100).toFixed(2);

useEffect(()=>{
  getDetailsProject(id);
},[])
  
  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      <div className="caseDetails">
        {
          projectData?.images?.length !== 0 ? (
            <Swiper
            pagination={{ clickable: true }}
            className="mySwiper"
            modules={[Pagination]}
          >
             {projectData?.images?.map((item) => (
              <SwiperSlide key={item.text} className="relative">
                <p className="absolute left-[13px] top-[260px] text-[#fff] font-[500] text-[18px] w-[303px]">
                  {item.text}
                </p>
                <img src={item.media_link} alt={item.text} width="100%" />
              </SwiperSlide>
            ))}
        
  
       </Swiper>
          ) : (
            <img src={projectData.main_image} alt='' width="100%"/>
          )
        }
      

        <div className="p-[16px] flex flex-col gap-[16px]">
          <div className="flex gap-[16px] flex-col">
            <h3 className="font-[900] text-[18px] text-[#000]">
              {projectData.title}
              {/* Help Orphanage Children to thrive, heal, and build a brighter
              future filled with love. */}
            </h3>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[14px] font-[500] text-[#4D4D4D]">
                {" "}
                <span className="font-[900] text-[#669640]">
                  {projectData.raised}
                  {/* 555 */}
                </span>{" "}
                fund raised from{" "}
                <span className="font-[900] text-[#669640]">
                  {projectData.total_price}
                  {/* 888 */}
                </span>
              </p>
              <Progress percent={percentageRaised} showInfo={false} />

              <div className="flex justify-between">
                <div className="flex gap-[8px] items-center">
                  <span className="font-[900] text-[#669640] text-[14px]">
                    {projectData.donations_count}
                    {/* 789 */}
                  </span>
                  <span className="text-[14px] font-[500] text-[#4D4D4D]">
                    Donators
                  </span>
                </div>

                <div className="flex gap-[8px] items-center">
                  <span className="font-[900] text-[#669640] text-[14px]">
                    {projectData.days_left}
                    {/* 555 */}
                  </span>
                  <span className="text-[14px] font-[500] text-[#4D4D4D]">
                    days left
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-x-[8px]">
            {
              projectData?.company_doners_count != 0 && (
                <div className="bg-[#EFF4EB] flex flex-col h-[152px] px-[26px] py-[16px] rounded-[8px] gap-y-[10px]">
                <div className="flex flex-col gap-y-[8px]">
                  <div className="flex flex-col justify-center items-center gap-y-[4px]">
                    <h2 className="text-[#000000] font-[500] text-[14px]">
                      {projectData?.company_doners_count} Associations
                    </h2>
  
                    <div className="flex justify-between gap-x-[4px]">
                    {
                    projectData?.companyDoners?.map(doner=>{
                      return (
                        <div className="w-[52px] h-[52px] border border-[#669640] rounded-[100px]">
                        <img src={doner.company_logo} width={52} height={52} className="h-[52px] w-[52px] rounded-full"/>
                      </div>
                      )
                    })
                   }
                      {/* <div className="w-[52px] h-[52px] border border-[#669640] rounded-[100px]">
                        <Image src="/images/asss.png" width={52} height={52} />
                      </div>
  
                      <div className="w-[52px] h-[52px] border border-[#669640] rounded-[100px]">
                        <Image src="/images/asss.png" width={52} height={52} />
                      </div>
                      <div className="w-[52px] h-[52px] border border-[#669640] rounded-[100px]">
                        <Image src="/images/asss.png" width={52} height={52} />
                      </div>
                      <div className="w-[52px] h-[52px] border border-[#669640] rounded-[100px]">
                        <Image src="/images/asss.png" width={52} height={52} />
                      </div>
                      <div className="w-[52px] h-[52px] border border-[#669640] rounded-[100px]">
                        <Image src="/images/asss.png" width={52} height={52} />
                      </div> */}
                    </div>
                  </div>
                  <Button className="bg-[#E0EAD8] rounded-[4px] p-[4px] flex justify-center items-center border">
                    See All
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.738 4.56152L12.327 5.97852L17.37 10.9995H3.79102V12.9995H17.369L12.327 18.0215L13.738 19.4385L21.208 11.9995L13.738 4.56152Z"
                        fill="#669640"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              )
            }
        {
projectData?.single_doners_count != 0 && (
  <div className="bg-[#EFF4EB] flex flex-col h-[152px] px-[26px] py-[16px] rounded-[8px] gap-y-[10px]">
  <div className="flex flex-col gap-y-[8px]">
    <div className="flex flex-col justify-center items-center gap-y-[4px]">
      <h2 className="text-[#000000] font-[500] text-[14px]">
        {projectData?.single_doners_count} Associations
      </h2>

      <div className="flex justify-between gap-x-[4px]">
     {
      projectData?.singleDoners?.map(doner=>{
        return (
          <div className="w-[52px] h-[52px] border border-[#669640] rounded-[100px]">
          <img src={doner.user.avatar} width={52} height={52} className="h-[52px] w-[52px] rounded-full"/>
        </div>
        )
      })
     }
        {/* <div className="w-[52px] h-[52px] border border-[#669640] rounded-[100px]">
          <Image src="/images/asss.png" width={52} height={52} />
        </div>

        <div className="w-[52px] h-[52px] border border-[#669640] rounded-[100px]">
          <Image src="/images/asss.png" width={52} height={52} />
        </div>
        <div className="w-[52px] h-[52px] border border-[#669640] rounded-[100px]">
          <Image src="/images/asss.png" width={52} height={52} />
        </div>
        <div className="w-[52px] h-[52px] border border-[#669640] rounded-[100px]">
          <Image src="/images/asss.png" width={52} height={52} />
        </div>
        <div className="w-[52px] h-[52px] border border-[#669640] rounded-[100px]">
          <Image src="/images/asss.png" width={52} height={52} />
        </div> */}
      </div>
    </div>
    <Button className="bg-[#E0EAD8] rounded-[4px] p-[4px] flex justify-center items-center border">
      See All
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.738 4.56152L12.327 5.97852L17.37 10.9995H3.79102V12.9995H17.369L12.327 18.0215L13.738 19.4385L21.208 11.9995L13.738 4.56152Z"
          fill="#669640"
        />
      </svg>
    </Button>
  </div>
</div>
 )
        }
          
          </div>

          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[#000] text-[18px] font-[900]">Fundraiser</h3>
            <div className="flex justify-between items-center">
              <div className="flex gap-[8px]">
                {
                  projectData?.organization?.logo ? (

                    <img src={projectData?.organization?.logo} width={50} height={50} />
                  ) : (
                    <div className="bg-[#E0EAD8] w-[50px] h-[50px] p-[4px] rounded-[4px] flex justify-center items-center ">
                    <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3994 22.239C18.1294 18.2228 14.7169 15.9215 10.0331 15.9215H9.99938C5.30313 15.8953 1.87312 18.2128 0.600625 22.239L0.453125 22.7065L0.870625 22.9615C3.31813 24.454 6.37063 25.2103 9.94063 25.2103C9.98063 25.2103 10.0206 25.2103 10.0594 25.2103C13.6794 25.2103 16.6469 24.474 19.1294 22.9615L19.5469 22.7065L19.3994 22.239Z" fill="#669640"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.1363C13.4038 13.1363 16.1738 10.3675 16.1738 6.96379C16.1738 3.55879 13.4038 0.790039 10 0.790039C6.59628 0.790039 3.82753 3.55879 3.82753 6.96379C3.82753 10.3675 6.59628 13.1363 10 13.1363Z" fill="#669640"/>
    </svg>
                    </div>
                  )

                }
        
                <div className="flex flex-col gap-[8px]">
                  <h4 className="text-[#000] font-[500] text-[14px]">
                   {projectData?.organization?.name_en}
                  </h4>
                  {
                      projectData?.organization?.account_verified === 1 && (
                        <div className="flex gap-[8px] items-center">
                 
                        <span className="text-[#669640] text-[12px] font-[500]">
                          Verified
                        </span>
                        <svg
                          width="15"
                          height="14"
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6396 7.92751C15.1201 7.39562 15.1201 6.6 14.6396 6.0681L14.1213 5.49442C13.8585 5.20354 13.7304 4.82046 13.7671 4.43506L13.8393 3.67585C13.9063 2.97175 13.4258 2.32844 12.7161 2.17181L11.9453 2.00171C11.5574 1.91611 11.2228 1.67957 11.0196 1.34741L10.6171 0.689506C10.2451 0.0813946 9.46668 -0.164578 8.79762 0.114546L8.07315 0.416785C7.70769 0.569252 7.29382 0.569251 6.92835 0.416785L6.20388 0.114546C5.53482 -0.164578 4.75645 0.0813949 4.38443 0.689506L3.98311 1.34551C3.77923 1.67879 3.44304 1.91575 3.05366 2.00063L2.28945 2.16722C1.57787 2.32234 1.09543 2.96657 1.16252 3.67207L1.23455 4.42949C1.27112 4.81402 1.14368 5.19628 0.882014 5.48697L0.35869 6.06832C-0.120211 6.60033 -0.119482 7.39467 0.360393 7.92584L0.880313 8.50135C1.14302 8.79214 1.27113 9.17508 1.23459 9.56036L1.16187 10.3271C1.0951 11.0311 1.5755 11.6742 2.2851 11.8308L3.05623 12.001C3.44408 12.0865 3.77875 12.3231 3.98196 12.6553L4.3828 13.3105C4.75552 13.9197 5.53596 14.1653 6.20556 13.8841L6.92701 13.581C7.29323 13.4272 7.7085 13.4267 8.07511 13.5796L8.79762 13.8811C9.46668 14.1602 10.2451 13.9142 10.6171 13.3061L11.0196 12.6482C11.2228 12.316 11.5574 12.0795 11.9453 11.9939L12.7161 11.8238C13.4258 11.6672 13.9063 11.0239 13.8393 10.3198L13.7671 9.56056C13.7304 9.17516 13.8585 8.79208 14.1213 8.50119L14.6396 7.92751ZM7.07586 9.52468C6.50933 10.0751 5.59081 10.0751 5.02428 9.52468L3.66056 8.19979C3.37787 7.92514 3.37787 7.47986 3.66056 7.20521C3.94287 6.93094 4.40044 6.93051 4.68329 7.20425L5.11075 7.61794C5.62981 8.12028 6.46951 8.11949 6.98758 7.61617L10.3151 4.3834C10.5992 4.10736 11.0601 4.10815 11.3432 4.38517C11.625 4.6608 11.6242 5.10588 11.3414 5.38054L7.07586 9.52468Z"
                            fill="#669640"
                          />
                        </svg>
                      </div>
                      )
                    }
               
                </div>
              </div>

              {/* <Button className="bg-[#DBDBDB] p-[4px] rounded-[4px] h-[40px] text-[#4D4D4D] font-[500] text-[14px] w-[126px]">
                Following
              </Button> */}
            </div>
          </div>
{
  projectData?.patient && (
    <div className="flex flex-col gap-[8px]">
    <h3 className="text-[#000] text-[18px] font-[900]">Patient</h3>
    <div className="flex justify-between items-center">
      <div className="flex gap-[8px] ">
        {
          projectData?.patient?.photo && (
            <img src={projectData?.patient?.photo} width={50} height={50} />

          )
        }
        <div className="bg-[#E0EAD8] w-[50px] h-[50px] p-[4px] rounded-[4px] flex justify-center items-center ">
        <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.3994 22.239C18.1294 18.2228 14.7169 15.9215 10.0331 15.9215H9.99938C5.30313 15.8953 1.87312 18.2128 0.600625 22.239L0.453125 22.7065L0.870625 22.9615C3.31813 24.454 6.37063 25.2103 9.94063 25.2103C9.98063 25.2103 10.0206 25.2103 10.0594 25.2103C13.6794 25.2103 16.6469 24.474 19.1294 22.9615L19.5469 22.7065L19.3994 22.239Z" fill="#669640"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.1363C13.4038 13.1363 16.1738 10.3675 16.1738 6.96379C16.1738 3.55879 13.4038 0.790039 10 0.790039C6.59628 0.790039 3.82753 3.55879 3.82753 6.96379C3.82753 10.3675 6.59628 13.1363 10 13.1363Z" fill="#669640"/>
</svg>
        </div>


        <div className="flex flex-col gap-[8px]">
          <h4 className="text-[#000] font-[500] text-[14px]">
            {projectData?.patient?.name}
          </h4>
          {/* <div className="flex gap-[8px] items-center">
            <span className="text-[#669640] text-[12px] font-[500]">
              Verified
            </span>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6396 7.92751C15.1201 7.39562 15.1201 6.6 14.6396 6.0681L14.1213 5.49442C13.8585 5.20354 13.7304 4.82046 13.7671 4.43506L13.8393 3.67585C13.9063 2.97175 13.4258 2.32844 12.7161 2.17181L11.9453 2.00171C11.5574 1.91611 11.2228 1.67957 11.0196 1.34741L10.6171 0.689506C10.2451 0.0813946 9.46668 -0.164578 8.79762 0.114546L8.07315 0.416785C7.70769 0.569252 7.29382 0.569251 6.92835 0.416785L6.20388 0.114546C5.53482 -0.164578 4.75645 0.0813949 4.38443 0.689506L3.98311 1.34551C3.77923 1.67879 3.44304 1.91575 3.05366 2.00063L2.28945 2.16722C1.57787 2.32234 1.09543 2.96657 1.16252 3.67207L1.23455 4.42949C1.27112 4.81402 1.14368 5.19628 0.882014 5.48697L0.35869 6.06832C-0.120211 6.60033 -0.119482 7.39467 0.360393 7.92584L0.880313 8.50135C1.14302 8.79214 1.27113 9.17508 1.23459 9.56036L1.16187 10.3271C1.0951 11.0311 1.5755 11.6742 2.2851 11.8308L3.05623 12.001C3.44408 12.0865 3.77875 12.3231 3.98196 12.6553L4.3828 13.3105C4.75552 13.9197 5.53596 14.1653 6.20556 13.8841L6.92701 13.581C7.29323 13.4272 7.7085 13.4267 8.07511 13.5796L8.79762 13.8811C9.46668 14.1602 10.2451 13.9142 10.6171 13.3061L11.0196 12.6482C11.2228 12.316 11.5574 12.0795 11.9453 11.9939L12.7161 11.8238C13.4258 11.6672 13.9063 11.0239 13.8393 10.3198L13.7671 9.56056C13.7304 9.17516 13.8585 8.79208 14.1213 8.50119L14.6396 7.92751ZM7.07586 9.52468C6.50933 10.0751 5.59081 10.0751 5.02428 9.52468L3.66056 8.19979C3.37787 7.92514 3.37787 7.47986 3.66056 7.20521C3.94287 6.93094 4.40044 6.93051 4.68329 7.20425L5.11075 7.61794C5.62981 8.12028 6.46951 8.11949 6.98758 7.61617L10.3151 4.3834C10.5992 4.10736 11.0601 4.10815 11.3432 4.38517C11.625 4.6608 11.6242 5.10588 11.3414 5.38054L7.07586 9.52468Z"
                fill="#669640"
              />
            </svg>
          </div> */}
        </div>
      </div>

      {/* <Button className="bg-[#DBDBDB] p-[4px] rounded-[4px] h-[40px] text-[#4D4D4D] font-[500] text-[14px] w-[126px]">
        Following
      </Button> */}
    </div>
  </div>
  )
}
         

{
  projectData?.story && (
    <div className="flex flex-col gap-[8px]">
    <h3 className="text-[#000] text-[18px] font-[900]">Story</h3>
    <p className="text-[#000] text-[12px] font-[300]">
      {projectData.story}
      {/* Lord, we ask that you bless the healthcare providers attending to
      these children with wisdom, skill, and compassion. May their
      efforts be guided by your divine guidance, leading them to make
      the best decisions for the well-being of these young lives */}
    </p>
  </div>
  )
}
         

          <div className="flex flex-col gap-[8px]">
            <HomeUrgentNav title="Prayers from good people" />
            <PrayersCard prayers={ projectData.prays}/>
            {/* {
              projectData?.prays?.map(pray =>{
              return  <PrayersCard pray={pray}/>
                
              })
            } */}
            {/* <Button className="bg-[#EFF4EB] px-[16px] py-[14px] flex justify-center items-center h-[48px] text-[#669640] font-[500] text-[16px] leading-[24.8px] rounded-[8px] border-none">
              Pray for Them!
            </Button> */}
          </div>
        </div>

        <div className="bg-[#fff] rounded-tr-[8px] h-[87px] flex justify-center items-center p-[10px] drop-shadow-[0px_0px_16px_rgba(235,235,235,1)]">
    <Link href='/donate'>
    <Button
          className="bg-[#669640] text-[#fff] font-[900] text-[16px] uppercase rounded-[8px] w-full px-[16px] py-[14px] h-[48px] flex justify-center items-center"
         
        >
       DONATE NOW!
        </Button>
    </Link>
      </div>
      </div>
    </div>
  );
};

export default CaseDetails;

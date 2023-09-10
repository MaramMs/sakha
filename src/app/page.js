"use client";
import { Button, Card, Progress, message } from "antd";
import Image from "next/image";
import TopUp from "../../components/TopUp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import HomeUrgentNav from "../../components/HomeUrgentNav";
import Categories from "../../components/Categories";
import CategoryCard from "../../components/CategoryCard";
import PeopleCard from "../../components/PeopleCard";
import NavBar from "../../components/NavBar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CommingCard from "../../components/CommingCard";
import ImpactsProjects from "../../components/ImpactsProjects";
import PrayersCard from "../../components/PrayersCard";
import { ProjectByCategoryIdContext } from "@/contexts/ProjectByCategoryId";

// const items = [
//   {
//     text: "Humanitarian Assistance – Development Aid Africa",
//     image: "/images/top-up.png",
//   },
//   {
//     text: "Humanitarian Assistance – Development Aid Africa",
//     image: "/images/top-up.png",
//   },
//   {
//     text: "Humanitarian Assistance – Development Aid Africa",
//     image: "/images/top-up.png",
//   },
// ];

export default function Home() {
  const [data, setData] = useState([]);
  const { projectByCategoryId } = useContext(ProjectByCategoryIdContext);
  
const [urgentProjects , setUrgentProjects] = useState([])
useEffect(() => {
  const getUrgentProjects = async () => {
    try {
      const res = await axios.get('https://sakha.danatportal.com/api/projects/1');
      console.log(res , 'res form project');
      setUrgentProjects(res.data.data);
     ;
    } catch (error) {
      // Handle the error here, for example, you can log it or set an error state.
      console.error('Error fetching urgent projects:', error);
    }
  };

  getUrgentProjects();
}, []);

console.log(urgentProjects , 'urgentProjects');

  useEffect(() => {
    const getSliderHome = async () => {
      try {
        const res = await axios.get(
          "https://sakha.danatportal.com/api/sliders"
        );

        setData(res.data.data);
        message.success(res.data.message_en);
      } catch (error) {
        if (error.response && error.response.data) {
          message.error(error.response.data.message_en);
        } else {
          message.error(error.message);
        }
      }
    };
    getSliderHome();
  }, []);
  const topUpItems = [
    {
      bgImg: "/images/top-up.png",
      title: "Donate For Someone Else!",
    },
    { bgImg: "/images/top-up.png", title: "Donate For Someone Else!" },
  ];
  return (
    <div className="min-h-screen   bg-[#F8F8F8] ">
      <div className="p-[16px] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-between">
            <div className="flex gap-[8px]">
              <Image src="/images/tree.svg" width={39.86} height={39.86} />
              <Image src="/images/logo-home.svg" width={118} height={28} />
            </div>

            <div className="flex gap-[8px] items-center">
              <div className="bg-[#fff] p-[8px] rounded-[8px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="8.59922"
                    cy="8.65324"
                    rx="8.59922"
                    ry="8.65324"
                    fill="#828282"
                  />
                  <path
                    opacity="0.4"
                    d="M18.6745 19.9555C18.3405 19.9447 18.0228 19.8073 17.7853 19.5707L15.7488 17.1904C15.3122 16.7912 15.2765 16.1126 15.6688 15.6692V15.6692C15.8524 15.4834 16.102 15.3789 16.3624 15.3789C16.6228 15.3789 16.8725 15.4834 17.0561 15.6692L19.6172 17.7184C19.9861 18.096 20.0999 18.6565 19.9078 19.1495C19.7157 19.6424 19.2535 19.9757 18.7279 20.0003L18.6745 19.9555Z"
                    fill="#828282"
                  />
                </svg>
              </div>

              <div className="bg-[#fff] p-[8px] rounded-[8px]">
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.5 17.6816V8.7998H21.5V17.7528C21.5 21.415 19.1948 23.6666 15.5066 23.6666H6.48189C2.82821 23.6666 0.5 21.3683 0.5 17.6816ZM6.28595 14.8116C5.75576 14.8361 5.31778 14.415 5.29473 13.8795C5.29473 13.3428 5.70966 12.8995 6.23985 12.875C6.75851 12.875 7.18496 13.2845 7.19649 13.8083C7.21954 14.3461 6.80461 14.7895 6.28595 14.8116ZM11.0231 14.8116C10.4929 14.8361 10.0549 14.415 10.0318 13.8795C10.0318 13.3428 10.4468 12.8995 10.9769 12.875C11.4956 12.875 11.9221 13.2845 11.9336 13.8083C11.9566 14.3461 11.5417 14.7895 11.0231 14.8116ZM15.7256 19.105C15.1954 19.0933 14.7689 18.65 14.7689 18.1133C14.7574 17.5766 15.1839 17.1345 15.7141 17.1228H15.7256C16.2673 17.1228 16.7053 17.5661 16.7053 18.1133C16.7053 18.6616 16.2673 19.105 15.7256 19.105ZM10.0318 18.1133C10.0549 18.65 10.4929 19.0711 11.0231 19.0466C11.5417 19.0245 11.9566 18.5811 11.9336 18.0445C11.9221 17.5195 11.4956 17.11 10.9769 17.11C10.4468 17.1345 10.0318 17.5766 10.0318 18.1133ZM5.28321 18.1133C5.30626 18.65 5.74424 19.0711 6.27442 19.0466C6.79308 19.0245 7.20801 18.5811 7.18496 18.0445C7.17344 17.5195 6.74698 17.11 6.22832 17.11C5.69813 17.1345 5.28321 17.5766 5.28321 18.1133ZM14.7805 13.8678C14.7805 13.3311 15.1954 12.8995 15.7256 12.8878C16.2442 12.8878 16.6592 13.3066 16.6822 13.8211C16.6937 14.3578 16.2788 14.8011 15.7602 14.8116C15.23 14.8233 14.792 14.415 14.7805 13.8795V13.8678Z"
                    fill="#828282"
                  />
                  <path
                    opacity="0.4"
                    d="M0.503906 8.79946C0.51889 8.11462 0.576519 6.75546 0.684861 6.31796C1.2381 3.85746 3.1168 2.29412 5.80231 2.07129H16.1986C18.861 2.30579 20.7628 3.87962 21.316 6.31796C21.4232 6.74379 21.4809 8.11346 21.4958 8.79946H0.503906Z"
                    fill="#828282"
                  />
                  <path
                    d="M6.68924 5.68801C7.19638 5.68801 7.57673 5.30417 7.57673 4.78967V1.23251C7.57673 0.718008 7.19638 0.333008 6.68924 0.333008C6.18211 0.333008 5.80176 0.718008 5.80176 1.23251V4.78967C5.80176 5.30417 6.18211 5.68801 6.68924 5.68801"
                    fill="#828282"
                  />
                  <path
                    d="M15.3103 5.68801C15.8059 5.68801 16.1978 5.30417 16.1978 4.78967V1.23251C16.1978 0.718008 15.8059 0.333008 15.3103 0.333008C14.8032 0.333008 14.4229 0.718008 14.4229 1.23251V4.78967C14.4229 5.30417 14.8032 5.68801 15.3103 5.68801"
                    fill="#828282"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex justify-between bg-[#fff] p-[8px] h-[56px] rounded-[8px] items-center">
            <div className="flex gap-[8px]">
              <div className="bg-[#E0EAD8] p-[8px] rounded-[8px] h-[40px]">
                <svg
                  width="28"
                  height="24"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.3289 7.16684H21.6827C19.0551 7.17146 16.9265 9.24686 16.9218 11.8088C16.9183 14.3764 19.0492 16.4611 21.6827 16.4645H27.3337V16.8725C27.3337 21.3514 24.6184 24 20.0234 24H7.9784C3.38225 24 0.666992 21.3514 0.666992 16.8725V7.11715C0.666992 2.63816 3.38225 0 7.9784 0H20.0187C24.6137 0 27.3289 2.63816 27.3289 7.11715V7.16684ZM6.98642 7.15591H14.5064H14.5112H14.5206C15.0836 7.1536 15.5387 6.7064 15.5363 6.15635C15.534 5.60745 15.0741 5.16371 14.5112 5.16602H6.98642C6.42701 5.16834 5.97308 5.61092 5.97071 6.1575C5.96834 6.7064 6.42345 7.1536 6.98642 7.15591Z"
                    fill="#669640"
                  />
                  <path
                    opacity="0.4"
                    d="M19.3839 12.3948C19.6627 13.663 20.7746 14.5553 22.0441 14.5321H26.3773C26.9055 14.5321 27.334 14.0947 27.334 13.5539V10.1785C27.3329 9.63899 26.9055 9.20038 26.3773 9.19922H21.9421C20.4981 9.20386 19.3317 10.4025 19.334 11.8796C19.334 12.0525 19.351 12.2254 19.3839 12.3948"
                    fill="#669640"
                  />
                  <circle
                    cx="22.0003"
                    cy="11.8665"
                    r="1.33333"
                    fill="#669640"
                  />
                </svg>
              </div>

              <div className="flex flex-col gap-[2px]">
                <small className="font-[900] text-[12px] text-[#000]">
                  $483
                </small>
                <p className="font-[300] text-[#000] text-[12px]">
                  My wallet balance
                </p>
              </div>
            </div>

            <Button className="bg-[#EFF4EB] px-[16px] py-[14px] rounded-[8px] text-[#669640] text-[16px] font-[900] flex justify-center items-center border-none w-[126px] h-[40px] uppercase">
              top up !
            </Button>
          </div>

          {/* <div className="bg-[#EFF4EB] flex justify-between  w-full px-[16px] py-[14px] rounded-[8px] h-[172px] gap-[8px]">
            {topUpItems.map((item) => {
              return <TopUp item={item} />;
            })}
          </div> */}
          <Swiper
            pagination={{ clickable: true }}
            className="mySwiper"
            modules={[Pagination]}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className="relative">
                <p className="absolute left-[13px] top-[137px] text-[#fff] font-[500] text-[18px] w-[303px]">
                  {item.title}
                </p>
                <img
                  src={item.main_image}
                  alt={item.title}
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col gap-[8px]">
          <HomeUrgentNav title="Urgent Fundraising" url="/urgentFundraising"/>
          <div className="flex flex-col gap-[16px] ">
            <Categories />

            <Swiper
              slidesPerView={1.5}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper swiper-card"
            >
              {urgentProjects.map((item) => {
                console.log(item , 'item urgent');
                return (
                  <SwiperSlide key={item.id}>
                    <CategoryCard item={item} type='home' />
                  </SwiperSlide>
                );
              })}


            </Swiper>
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <HomeUrgentNav title="Coming to an end" />
          <CommingCard />
        </div>

        <div className="flex flex-col gap-[8px]">
          <HomeUrgentNav title="Impact of Your Donation" />
          <ImpactsProjects />
        </div>

        <div className="flex flex-col gap-[8px]">
          <HomeUrgentNav title="Prayers from good people" />
          <PrayersCard />
          <Button className="bg-[#EFF4EB] px-[16px] py-[14px] flex justify-center items-center h-[48px] text-[#669640] font-[500] text-[16px] leading-[24.8px] rounded-[8px] border-none">
            Pray for Them!
          </Button>
        </div>
      </div>

      <NavBar />
    </div>
  );
}

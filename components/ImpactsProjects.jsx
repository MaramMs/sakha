import { Button, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ImpactsProjects = () => {
  const [lastImpacts, setLastImpacts] = useState([]);

  useEffect(() => {
    const getlastImpacts = async () => {
      try {
        const res = await axios.get(
          "https://sakha.danatportal.com/api/lastImpacts"
        );
        console.log(res.data.data, "dataa");
        setLastImpacts(res.data.data);
      } catch (error) {
        if (error.response && error.response.data) {
          message.error(error.response.data.message_en);
        } else {
          message.error(error.message);
        }
      }
    };
    getlastImpacts();
  }, []);

  console.log(lastImpacts,'lastImpacts');
  return (
    <>
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
        // modules={[Pagination]}
        className="mySwiper swiper-card"
      >
        {lastImpacts.data?.map((item) => {
          return (
            <SwiperSlide>
              <div
                style={{ backgroundImage: `url(${item.main_image})` ,height:'212px' , width:'195px'}}
                className={`rounded-[4px] relative topUp `}
              >
                <div className="flex    w-[144px] h-[83px] absolute bottom-[10px] left-[9px] right-[6px] impact-card">
                  <p className="font-[900] text-[#fff] text-[14px] ">
                    {item.title_en}
                  </p>

                  <Button className="bg-[#669640] px-[16px] py-[14px] rounded-[4px] h-[31px] flex justify-center items-center border-none text-[#fff] font-[900]">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.214335 7.13276L7.06244 2.91355C7.21582 2.81954 7.41218 2.82854 7.55578 2.93955C8.2064 3.44057 8.78766 3.9486 9.17549 4.37562C9.17549 4.37562 9.50959 4.71764 9.65418 4.93465C9.88766 5.23066 10 5.61768 10 5.9937C10 6.41572 9.87691 6.81474 9.63171 7.13376C9.57602 7.19076 9.36403 7.44177 9.16377 7.64678C7.99539 8.92285 4.94549 11.031 3.34141 11.67C3.10793 11.773 2.48466 11.988 2.16131 12C1.84967 12 1.54879 11.932 1.25962 11.783C0.90403 11.578 0.625612 11.26 0.469307 10.8829C0.368686 10.6209 0.213358 9.83489 0.213358 9.81189C0.112736 9.25086 0.0375146 8.46282 0.00039219 7.54278C-0.00644615 7.37777 0.0765909 7.21776 0.214335 7.13276Z" fill="white"/>
<path opacity="0.4" d="M0.672521 4.86003C0.370657 5.04704 -0.00935965 4.80803 0.00529394 4.44901C0.0414395 3.60697 0.103961 2.86493 0.18016 2.31291C0.191883 2.3009 0.347211 1.32186 0.525985 0.990839C0.837618 0.375808 1.44916 -0.000210762 2.10662 -0.000210762H2.16132C2.5853 0.0107899 3.48699 0.386808 3.48699 0.40981C3.94125 0.598819 4.53423 0.918835 5.17215 1.30385C5.45936 1.47786 5.4662 1.90488 5.17899 2.08189L0.672521 4.86003Z" fill="white"/>
</svg>

                  </Button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ImpactsProjects;

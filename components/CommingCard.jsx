import { ProjectByCategoryIdContext } from "@/contexts/ProjectByCategoryId";
import { Card, Empty, Progress, message } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const CommingCard = () => {

  const [commingProjects ,setCommingProjects] = useState([]);

  useEffect(() =>{
 const getAllProjects = async() =>{
  try {
    const res = await axios.get('https://sakha.danatportal.com/api/getAllProjects');
    setCommingProjects(res.data.data.data) ; 
  } catch (error) {
    if (error.response && error.response.data) {
      message.error(error.response.data.message_en);
    } else {
      message.error(error.message);
    }
  }
};
getAllProjects()
  },[]);
  return (
    <>
      {
      commingProjects.length === 0 ? (
        <Empty />
      ) : (
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
      {commingProjects.map((item) => {
        return (

          
          <SwiperSlide>
            <Card
              style={{
                width: 245,
                height:300,
                backgroundColor: "#fff",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "0px 0px 8px 0px",
              }}
              cover={<img alt="example" src={item.main_image}  style={{height:'140px'}}/>}
            >
              <div className="flex gap-[16px] h-[118px] flex-col">
                <h3 className="font-[500] text-[14px] text-[#000]">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[12px] font-[300] text-[#4D4D4D]">
                    {" "}
                    <span className="font-[900] text-[#669640]">
                      {item.raised}
                    </span>{" "}
                    fund raised from{" "}
                    <span className="font-[900] text-[#669640]">
                      {item.total_price}
                    </span>
                  </p>
                  <Progress percent={50} showInfo={false} />

                  <div className="flex justify-between">
                    <div className="flex gap-[8px] items-center">
                      <span className="font-[900] text-[#669640]">
                        {item.donations_count}
                      </span>
                      <span className="text-[12px] font-[300] text-[#4D4D4D]">
                        Donators
                      </span>
                    </div>

                    <div className="flex gap-[8px] items-center">
                      <span className="font-[900] text-[#669640]">
                      {item.days_left}
                      </span>
                      <span className="text-[12px] font-[300] text-[#4D4D4D]">
                      days left
                      </span>
                    </div>
               
                  </div>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
      )
    }
    </>
  
    
  );
};

export default CommingCard;

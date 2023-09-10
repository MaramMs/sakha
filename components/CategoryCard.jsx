import { ProjectByCategoryIdContext } from "@/contexts/ProjectByCategoryId";
import { Card, Empty, Progress } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const CategoryCard = ({item,type}) => {
  const { projectByCategoryId,getDetailsProject} = useContext(ProjectByCategoryIdContext);
  console.log(getDetailsProject,'getDetailsProject');
  console.log( projectByCategoryId , 'project');
  console.log(projectByCategoryId, "id project");
const [projectData,setProjectData] = useState({});
const router = useRouter();
  const handleDetailsProject = async (id) =>{
    console.log('clicked');
    
    // try {
    //   const res = await axios.get(`https://sakha.danatportal.com/api/project/${id}`);
    //   console.log(res.data.data , ' res from project ');
    //   setProjectData(res.data.data);
    //   router.push('/caseDetails')
    // } catch (error) {
      
    // }
    getDetailsProject(id)
  }
  return (
    <>
      {/* {
      projectByCategoryId.length === 0 ? (
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
      {projectByCategoryId.map((item) => {
        return (

          
          <SwiperSlide>
            <Card
              style={{
                width: 245,
                height:320,
                backgroundColor: "#fff",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "0px 0px 8px 0px",
              }}
              cover={<img alt="example" src={item.main_image} style={{height:'140px'}}/>}
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
    } */}

    {
      item.length !==0 ? (
<Card
              style={{
                width:  `{type === 'home' ? '255' : '100%'}`,
                height:`{type === 'home' ? '320' : '100%'}`,
                backgroundColor: "#fff",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "0px 0px 8px 0px",
                position:'relative',
                cursor:'pointer'
              }}
          onClick={()=>handleDetailsProject(item.id)}
              cover={<img alt="example" src={item.main_image}     style={{height:type === 'home' ? '140px' : '100%'}}/>}
            >
              <div className="w-[34px] h-[34px] absolute top-[8px] right-[8px] bg-[#fff] flex justify-center items-center rounded-[8px]" style={{width:'34px' , height:'34px',position:'absolute',top:'8px' ,right:'8px'}}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9.99232 15.5187L4.58255 18.2209C4.17401 18.4427 3.66441 18.2946 3.43591 17.8877C3.36918 17.7598 3.33389 17.6177 3.33301 17.4732V11.4248C3.33301 12.0245 3.67112 12.3946 4.5605 12.8092L9.99232 15.5187Z" fill="#4D4D4D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.41239 1.66699H12.5576C14.8141 1.66699 16.6443 2.55537 16.6663 4.82813V17.4727C16.6654 17.6148 16.6301 17.7546 16.5634 17.8799C16.4563 18.0842 16.2713 18.2359 16.0509 18.3001C15.8305 18.3643 15.5937 18.3356 15.3947 18.2204L9.99232 15.5183L4.5605 12.8087C3.67112 12.3941 3.33301 12.024 3.33301 11.4243V4.82813C3.33301 2.55537 5.16322 1.66699 7.41239 1.66699ZM6.85377 8.01889H13.1235C13.4848 8.01889 13.7777 7.72389 13.7777 7.36001C13.7777 6.99612 13.4848 6.70113 13.1235 6.70113H6.85377C6.49248 6.70113 6.1996 6.99612 6.1996 7.36001C6.1996 7.72389 6.49248 8.01889 6.85377 8.01889Z" fill="#4D4D4D"/>
</svg>

              </div>
          
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
      ) : (<Empty />)
    }


    </>

  
    
  );
};

export default CategoryCard;

import { ProjectByCategoryIdContext } from '@/contexts/ProjectByCategoryId';
import { UserContext } from '@/contexts/UserContext'
import { message } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const Categories = () => {


const {setProjectByCategoryId} = useContext(ProjectByCategoryIdContext)
// const {interestCategories} = useContext(UserContext);
const [interestCategories,setInterestCategories]= useState([]);

useEffect(() =>{
    const getCategories = async () => {
      try {
        const res = await axios.get(
          "https://sakha.danatportal.com/api/categories"
        );
        // setInterestCategories(res.data.data)
        setInterestCategories(res.data.data)        
      } catch (error) {
        if (error.response && error.response.data) {
          message.error(error.response.data.message_en);
        } else {
          message.error(error.message);
        }
      }
    };
    getCategories();
  },[]);

  const handleCategoryFilter = async(id) =>{
   
        try {
            const res = await axios.get(
              `https://sakha.danatportal.com/api/projectsByCategory/${id}`
            );
            // setInterestCategories(res.data.data);
            console.log(res , 'res');
            setProjectByCategoryId(res.data.data.data) ; 
            console.log(res.data.data.data , 'res of data');   
          } catch (error) {
            if (error.response && error.response.data) {
              message.error(error.response.data.message_en);
            } else {
              message.error(error.message);
            }
          }
        };
        
    
  
  return (
    <div className='flex items-center gap-[8px]'>
     


<Swiper
              slidesPerView={1.5}
              // slidesPerView={'auto'}
              // centeredSlides={true}
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
      {
           interestCategories.map((item) => {
            
            return (
             <SwiperSlide key={item.id}>
                   <div className='flex  flex-wrap bg-[#669640] gap-[4px] px-[16px] py-[14px] w-[78px] justify-center items-center h-[36px] rounded-[20px] categories' onClick={() =>handleCategoryFilter(item.id)}>

                   <div className='flex gap-[10px] items-center'>
                   <img  src={item.icon} style={{width:'19px' , height:'17px'}}/>
                    <p className='text-[#fff] text-[12px] font-[400]'>{item.name_en}</p>
                   </div>
                </div>
             </SwiperSlide>
            )
        })
      }
           </Swiper>
      
    </div>
  )
}

export default Categories

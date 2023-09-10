import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import PeopleCard from './PeopleCard';

const PrayersCard = ({prayers}) => {
  // console.log(pray , 'paray');
    // const [prayers , setPrayer] = useState([]);

    // useEffect(() =>{
    //     const getPrayers = async() =>{
    //      try {
    //        const res = await axios.get('https://sakha.danatportal.com/api/lastPrays');
    //        console.log(res.data.data);
    //        setPrayer(res.data.data) ; 
    //      } catch (error) {
    //        if (error.response && error.response.data) {
    //          message.error(error.response.data.message_en);
    //        } else {
    //          message.error(error.message);
    //        }
    //      }
    //    };
    //    getPrayers()
    //      },[]);
  return (


<Swiper
              // slidesPerView={1.5}
              slidesPerView={"auto"}
              // centeredSlides={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
              }}
              // modules={[Pagination]}
              className="mySwiper"
            >

          {
            prayers?.map((prayer, index) => {
                return (
                    <SwiperSlide key={index}>
              
                    <PeopleCard prayer={prayer}/>
        </SwiperSlide>
                )
          })

        }

        
    </Swiper>

      
    
  )
}

export default PrayersCard

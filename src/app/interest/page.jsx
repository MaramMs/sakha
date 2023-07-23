"use client";
import { UserContext } from "@/contexts/UserContext";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Header from "../../../components/Header";
import axios from "axios";
import { useRouter } from "next/navigation";

const Interest = () => {
  const router = useRouter();
  const { user, setUserInfo } = useContext(UserContext);

  const [checked, setCheck] = useState([]);

  const handleChecked = (id) => {
    setCheck((prevState) => {
      return [...prevState, id];
    });
  };

  // const HandleRegister = async () => {
  //   const formData = new FormData();
  //   formData.append('file', user.photo);
  //   formData.append('name', user.name);
  //   formData.append('email', user.email);
  //   formData.append('mobile', user.mobile);
  //   formData.append('password', user.password);
  //   formData.append('country_id', Number(user.country_id));
  //   formData.append('city_id', Number(user.city_id));
  //   formData.append('gender', user.gender);
  //   formData.append('interest_list', checked);
  
  //   try {
  //     const res = await axios.post(
  //       "https://sakha.danatportal.com/api/users/register",
  //       formData,
  //       { headers: { 'Content-Type': 'multipart/form-data' } }
  //     );
  //     setUserInfo(res.data);
  //     console.log(res, "res from register");
  //     message.success(res.data.message_en);
  //     router.push("/myProfile");
  //   } catch (error) {
  //     if (error.response && error.response.data) {
  //       message.error(error.response.data.message_en);
  //     } else {
  //       message.error(error.message);
  //     }
  //   }
  // };
  

  // const HandleRegister = async () => {
  //   try {
  //     const res = await axios.post(
  //       "https://sakha.danatportal.com/api/users/register",
  //       {
  //         name: user.name,
  //         email: user.email,
  //         mobile: user.mobile,
  //         password: user.password,
  //         country_id: Number(user.country_id),
  //         city_id: Number(user.city_id),
  //         gender: user.gender,
  //         interest_list: checked,
  //         photo:user.photo
  //       },
  //    {   headers: { 'Content-Type': 'multipart/form-data' }}
  //     );
  //     setUserInfo(res.data);
  //     console.log(res, "res from register");
  //     message.success(res.data.message_en);
  //     router.push("/myProfile");
  //   } catch (error) {
  //     if (error.response && error.response.data) {
  //       message.error(error.response.data.message_en);
  //     } else {
  //       message.error(error.message);
  //     }
  //   }
  // };

  const HandleRegister = async () => {
    // Create a FormData object
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('mobile', user.mobile);
    formData.append('password', user.password);
    formData.append('country_id', Number(user.country_id));
    formData.append('city_id', Number(user.city_id));
    formData.append('gender', user.gender);
    formData.append('interest_list', checked);
    // formData.append('photo', user.photo);
  
    try {
      const res = await axios.post(
        "https://sakha.danatportal.com/api/users/register",
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      setUserInfo(res.data);
      console.log(res, "res from register");
      message.success(res.data.message_en);
      router.push("/myProfile");
    } catch (error) {
      if (error.response && error.response.data) {
        message.error(error.response.data.message_en);
      } else {
        message.error(error.message);
      }
    }
  };
  
  const interestItem = [
    {
      id: 1,
      img: "/images/Art.svg",
      name: "Art",
    },
    {
      id: 2,
      img: "/images/bag.svg",
      name: "",
    },
    {
      id: 3,
      img: "/images/Education.svg",
      name: "Education",
    },
    {
      id: 4,
      img: "/images/Social.svg",
      name: "Social",
    },
    {
      id: 5,
      img: "/images/Environment.svg",
      name: "Environment",
    },
    {
      id: 6,
      img: "/images/Infrastructure.svg",
      name: "Infrastructure",
    },
    {
      id: 7,
      img: "/images/Disaster.svg",
      name: "Disaster",
    },
    {
      id: 8,
      img: "/images/Orphanage.svg",
      name: "Orphanage",
    },
    {
      id: 9,
      img: "/images/Humanity.svg",
      name: "Humanity",
    },
    {
      id: 10,
      img: "/images/SickChild.svg",
      name: "SickChild",
    },
    {
      id: 11,
      img: "/images/Disablility.svg",
      name: "Disablility",
    },
    {
      id: 12,
      img: "/images/Others.svg",
      name: "Others",
    },
  ];

  const [categories , setCategories] = useState([]);
  const {setInterestCategories} = useContext(UserContext)

  useEffect(() =>{
    const getCategories = async () => {
      try {
        const res = await axios.get(
          "https://sakha.danatportal.com/api/categories"
        );
        setInterestCategories(res.data.data)
        setCategories(res.data.data)        
message.success(res.data.message_en);
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
  console.log(categories, 'category');
  return (
    <div className="bg-[#F8F8F8] flex flex-col min-h-screen justify-between">
      <div className="p-[16px] flex flex-col gap-[10px]">
        <Header text="Select Your Interest" />
        <div className="">
          <Row gutter={[10, 10]}>
            {categories.map((item) => {
              console.log(item.icon , 'icon');
              return (
                <Col span={8}>
                  <div
                    className={`flex justify-center items-center flex-col h-[105px] rounded-[8px] px-[16px] py-[14px] ${
                      checked.includes(item.id)? "bg-[#0062A0]" : "bg-[#fff]"
                    }`}
                    
                    onClick={() => handleChecked(item.id)}
                  >
                    <Image src={item.icon} width={60} height={60} />
                    <span>{item.name_en}</span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <div className="bg-[#fff] rounded-tr-[8px] h-[87px] flex justify-center items-center p-[10px] drop-shadow-[0px_0px_16px_rgba(235,235,235,1)]">
        <Button
          className="bg-[#669640] text-[#fff] font-[900] text-[16px] uppercase rounded-[8px] w-full px-[16px] py-[14px] h-[48px] flex justify-center items-center"
          onClick={HandleRegister}
        >
          save and continue
        </Button>
      </div>
    </div>
  );
};

export default Interest;

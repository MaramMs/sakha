"use client";
import React, { useState } from "react";
import Header from "../../../components/Header";
import { Button, message } from "antd";
import BackToLogin from "../../../components/BackToLogin";

import CustomOtpInput from "../../../components/CustomOtpInput";
import { useRouter } from "next/navigation";

const OtpCode = () => {
  const [otp, setOtp] = useState([]);
  const router = useRouter();
  console.log(otp,'otp');

  const handleChange = (otp) => {
      setOtp(otp);
    };
    
  const handleVerifyCode = async() =>{
    router.push('/newpassword')
    // try {
    //   const res = await axios.post(
    //     "https://sakha.danatportal.com/api/users/check_otp",
    //     {
    //     otp,
    //       email,
    //     }
    //   );
    //   message.success(res.data.message_en);
    //   router.push("/newpassword");
    // } catch (error) {
    //   message.error(res.data.error);
    // }
  }
  return (
    <div className="flex flex-col justify-between p-[16px] bg-[#F8F8F8] min-h-screen">
      <Header text="OTP Sent to " title="ahmedazy.uxui@gmail.com" />

      <div className=" flex flex-col gap-[24px]">
        <CustomOtpInput setOtp={setOtp} otp={otp} handleChange={handleChange}/>
        <Button className="bg-[#669640] flex items-center justify-center h-[48px] px-[16px] py-[14px] rounded-[8px] text-[#fff] uppercase font-[900] text-[16px]" onClick={handleVerifyCode}>
          verify
        </Button>
      </div>
      <BackToLogin />
    </div>
  );
};

export default OtpCode;

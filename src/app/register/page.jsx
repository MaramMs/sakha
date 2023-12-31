"use client";
import { UserContext } from "@/contexts/UserContext";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const Register = () => {
  const {user,setUser} = useContext(UserContext);
  const {setUserInfo} = useContext(UserContext)
  
  const router = useRouter();
  const onFinish = async ({ email, password }) => {
    try {
      const res = await axios.post(
        "https://sakha.danatportal.com/api/users/checkEmail",
        {
          email,
         
        }
      );
      setUser({email,password});

      if(res.status === 200) {
        const resCode = await axios.post(
          "https://sakha.danatportal.com/api/users/sendOTP",
          {
            email,
           
          }
        );
        setUser(prevState => ({ ...prevState, otp: resCode.data.data }));
        console.log(user, 'user data');
        console.log(resCode.data.data,'resCode.data.data');
        console.log(user.otp , 'otp user');
        router.push('/verifyEmail')
      }
      message.success(res.data.message_en);
    } catch (error) {
      message.error(res.data.error);
    }
  };
  return (
    <>
      <div className="flex min-h-screen flex-col  gap-[40px] p-[16px] bg-[#cccccc24]  ">
        <div className="flex justify-center flex-col items-center gap-[8px]">
          <Image src="/images/logo.png" width={60} height={80} />
          <h1 className="text-[#0B0B0B] text-[24px] font-[900]">Register</h1>
          <p className="text-[#76777A] text-[14px] font-[500]  h-[44px] text-center">
            Enter your email address and password to create new account!{" "}
          </p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="text-[#000000] font-[400] text-[14px]"
              >
                Your Email
              </label>
              <Input
                placeholder="Type Your Email"
                className="bg-[#FFFFFF] rounded-[8px] h-[48px] py-[14px] px-[16px] border-[#fff]"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <div className="flex flex-col gap-[10px]">
              <label className="text-[#000000] font-[400] text-[14px]">
                Your Password
              </label>
              <Input.Password
                placeholder="************"
                className="bg-[#FFFFFF] rounded-[8px] h-[48px] py-[14px] px-[16px] border-[#fff]"
              />
            </div>
          </Form.Item>
          {/* <Form.Item>
          <a className="login-form-forgot flex justify-end text-[#000] text-[14px] font-[400]" href="" >
            Forgot password ?
          </a>
        </Form.Item> */}

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="flex justify-start text-[#000] text-[14px] font-[400]">
              Remember me
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-full uppercase bg-[#669640] px-[16px] py-[14px] rounded-[8px]  flex  justify-center items-center h-[48px] text-[#fff] text-[16px] font-[900]"
            >
              register
            </Button>
            <p className="text-[12px] text-[#000] text-center font-[300] leading-[18.9px] mt-[8px]">
              By clicking the Register button you agree on our
              <span className="font-[900] underline">
                {" "}
                Terms of Use and Privacy Policy!
              </span>
            </p>
          </Form.Item>
          <div className="flex justify-center items-center flex-col gap-[16px] mt-[24px]">
            <p className="text-[#000000] text-[14px] font-[400]">
              {" "}
              Or Continue With
            </p>
            <div className="flex gap-[16px]">
              <Button className="bg-[#fff] rounded-[48px] w-[48px] h-[48px] px-[16px] py-[14px] border-[#fff]">
                <Image src="/images/face.svg" width={14.54} height={27.36} />
              </Button>

              <Button className="bg-[#fff] rounded-[48px] w-[48px] h-[48px] px-[16px] py-[14px] border-[#fff]">
                <Image src="/images/google.svg" width={28} height={28} />
              </Button>

              <Button className="bg-[#fff] rounded-[48px] w-[48px] h-[48px] px-[16px] py-[14px] border-[#fff]">
                <Image src="/images/face.svg" width={14.54} height={27.36} />
              </Button>
            </div>
          </div>

          <div className="flex justify-between h-[48px] items-center mt-[16px]">
            <p className="text-[#000] font-[400] text-[13px]">
              Don’t have an account?
            </p>
            <Link href="/login">
              <Button className="rounded-[8px] bg-[#EFF4EB] px-[16px] py-[14px] w-[146px] h-[48px] flex justify-center items-center text-[#669640] text-[16px] font-[500]">
                Login Now !
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;

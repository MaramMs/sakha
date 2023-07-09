'use client'
import React, { useState } from 'react'
import Header from '../../../components/Header'
import { Button, Input, message } from 'antd'
import BackToLogin from '../../../components/BackToLogin'
import { useRouter } from 'next/navigation'

const ResetPassword = () => {
  const [email ,setEmail] = useState('');
  const router = useRouter()

  const handleUserEmail = async() =>{
    router.push('/otpCode')
    
  //   try {
  //     const res = await axios.post('https://sakha.danatportal.com/api/users/send_otp', {
  //       email,
       
  //     });
  //     message.success(res.data.message_en);
  //     router.push('/otpCode');
  // } catch (error) {
  //   if (error.response && error.response.data) {
  //     message.error(error.response.data.message_en);
  //   } else {
  //     message.error(error.message);
  //   }
  // }
  }
  return (
    <div className='flex flex-col justify-between p-[16px] bg-[#F8F8F8] min-h-screen'>

       <Header text='Reset Your Password'/>
     

        <div className=' flex flex-col gap-[24px]'>
           <label className='text-[#000000] font-[400] text-[14px]'>
            Your Email
           </label>
           <Input placeholder='Type your email'  className='bg-[#fff] border-none px-[16px] py-[14px] rounded-[8px]'  onChange={(e)=> setEmail(e.target.value)} value={email} />
           <Button className='bg-[#669640] flex items-center justify-center h-[48px] px-[16px] py-[14px] rounded-[8px] text-[#fff] uppercase font-[900] text-[16px]' onClick={handleUserEmail}>
            reset password
           </Button>

        </div>
 <BackToLogin />
    </div>
  )
}

export default ResetPassword

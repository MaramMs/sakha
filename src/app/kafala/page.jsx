'use client'
import { Button, Input, Radio, Space } from 'antd'
import React, { useState } from 'react'
import HomeUrgentNav from '../../../components/HomeUrgentNav'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'

const Kafala = () => {
    const [value, setValue] = useState(1);
    const searchParams = useSearchParams();
const amount_pay = searchParams.get('amount');
const project_id =parseInt(searchParams.get('projectId'));
const [loading, setLoading] = useState(false);
const [userData,setUserData] = useState([{
  email:'',
  name:'',
  phone:''
}])
const handleUserDataInput = (e) =>{
  const {name,value} = e.target
setUserData({
  ...userData,
  [name] :value,
})
}
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    const postPayRequest = async() =>{
      setLoading(true);
      try {
        const res1 = await axios.post('https://sakha.danatportal.com/api/newDonation', {
          amount: parseInt(amount_pay),
          project_id,
          value,
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
        });
    
        // Check if the first request was successful (you might need to adjust this condition based on the response structure)
        if (res1.status === 200) {
          const res2 = await axios.get('https://sakha.danatportal.com/api/pay',{
            amount: parseInt(amount_pay),
            project_id,
          });
    
          // Check if the second request was successful and has an invoiceURL
          if (res2.data.IsSuccess === "true" && res2.data.Data && res2.data.Data.invoiceURL) {
            const invoiceURL = res2.data.Data.invoiceURL;
    
            // Open the invoiceURL in a new tab
            window.open(invoiceURL, '_blank');
          }
          // Handle the second response here if needed
        } else {
          // Handle the case where the first request was not successful
          console.error('First request failed.');
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle the error if needed
      } finally {
        setLoading(false);
        
      }
    }
  return (
    <div className='min-h-screen bg-[#F8F8F8] md:w-[30%] md:mx-auto md:my-[20px] md:h-[750px] md:min-h-[600px] md:shadow-md md:flex md:justify-center md:items-center'>
    <div className='flex flex-col min-h-screen  justify-between'>
        <div className='p-[16px] md:p-[32px] flex flex-col gap-[32px]'>
        <HomeUrgentNav />
        <div className='flex flex-col gap-[16px]'>
          <span className='text-[14px] text-[#212121c7]'>Give it for</span>
<Radio.Group onChange={onChange} value={value}>
    <div style={{ display: 'flex', alignItems: 'center',flexWrap:'wrap',justifyContent:'space-between' }}>
      <Radio value={1} className='w-[47%] mb-[10px]'>1 month</Radio>
      <Radio value={6} className='w-[47%] mb-[10px]'>6 months</Radio>
      <Radio value={12} className='w-[47%] mb-[10px]'>1 year</Radio>
      <Radio value={18} className='w-[47%] mb-[10px]'>1.5 years</Radio>
      <Radio value={24} className='w-[47%] mb-[10px]'>2 years</Radio>
      <Radio value={30} className='w-[47%] mb-[10px]'>2.5 years</Radio>
      <Radio value={36} className='w-[47%] mb-[10px]'>3 years</Radio>
      <Radio value={8} className='w-[47%] mb-[10px]'>Other</Radio>
      {value === 8 ? (
      <Input placeholder='amount...' className='border-none shadow-sm bg-transparent'/>

      ) : null}
    </div>
</Radio.Group>


<Input name='name' value={userData.name} placeholder='Name'   style={{marginBottom:'10px',border:'none'}} onChange={(e) => handleUserDataInput(e)}/>
       <Input name='email' value={userData.email}placeholder='Email'  style={{marginBottom:'10px',border:'none'}} onChange={(e) => handleUserDataInput(e)}/>
       <Input name='phone' value={userData.phone} placeholder='Phone'  style={{marginBottom:'10px',border:'none'}} onChange={(e) => handleUserDataInput(e)}/>


</div>

</div>

<div className="bg-[#fff] rounded-tr-[8px] h-[87px] flex justify-center items-center p-[10px] drop-shadow-[0px_0px_16px_rgba(235,235,235,1)]">
    <Button
    loading={loading}
    onClick={postPayRequest}
          className="bg-[#669640] text-[#fff] font-[900] text-[16px] uppercase rounded-[8px] w-full px-[16px] py-[14px] h-[48px] flex justify-center items-center"
        >
     {amount_pay} $ Pay
        </Button>
      </div>
</div>
</div>
  )
}

export default Kafala

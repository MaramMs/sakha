'use client'
import { Button, Input, Radio, Space } from 'antd'
import React, { useState } from 'react'
import HomeUrgentNav from '../../../components/HomeUrgentNav'
import { useSearchParams } from 'next/navigation'

const Kafala = () => {
    const [value, setValue] = useState(1);
    const searchParams = useSearchParams();
const amount_pay = searchParams.get('amount');
console.log(amount_pay , 'amount pay');
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
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





</div>

</div>

<div className="bg-[#fff] rounded-tr-[8px] h-[87px] flex justify-center items-center p-[10px] drop-shadow-[0px_0px_16px_rgba(235,235,235,1)]">
    <Button
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

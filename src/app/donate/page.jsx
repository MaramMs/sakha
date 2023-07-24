'use client'
import React from 'react'
import HomeUrgentNav from '../../../components/HomeUrgentNav'
import { Button, Checkbox, Input } from 'antd'

const Donate = () => {
  return (
    <div className='min-h-screen bg-[#F8F8F8]'>
        <div className='flex flex-col min-h-screen justify-between'>
            <div className='p-[16px] flex flex-col gap-[8px]'>
            <HomeUrgentNav title="Donate" />
  <div className='flex flex-col gap-y-[16px]'>
    <div className='bg-[#E7EFF4] border border-[#0062A0] h-[118px] flex flex-col gap-y-[8px] justify-center items-center px-[16px] py-[14px] rounded-[8px]'>
    <p className='text-[14px] font-[500] text-[#000]'>Amount to give - USD</p>
    <div className='flex justify-between items-center'>
    <Input autoFocus className='text-[#0062A0] font-[800] text-[20px] border-b-[#0062A0] bg-transparent border-t-0 border-r-0 border-l-0 rounded-none'  />
        <span className='text-[#0062A0] font-[800] text-[20px]'>$</span>

    </div>
    </div>

    <div className='flex flex-col gap-y-[16px]'>
  <div className='flex justify-between flex-wrap gap-[5.5px]'>
    <div className='bg-[#E7EFF4] h-[40px] w-[108px] px-[24px] py-[5px] rounded-[8px] flex justify-center items-center'>
        1$
    </div>
    <div className='bg-[#E7EFF4] h-[40px] w-[108px] px-[24px] py-[5px] rounded-[8px] flex justify-center items-center'>
        10$
    </div>
    <div className='bg-[#E7EFF4] h-[40px] w-[108px] px-[24px] py-[5px] rounded-[8px] flex justify-center items-center'>
        20$
    </div>
    <div className='bg-[#E7EFF4] h-[40px] w-[108px] px-[24px] py-[5px] rounded-[8px] flex justify-center items-center'>
        1$
    </div>
    <div className='bg-[#E7EFF4] h-[40px] w-[108px] px-[24px] py-[5px] rounded-[8px] flex justify-center items-center'>
        10$
    </div>
    <div className='bg-[#E7EFF4] h-[40px] w-[108px] px-[24px] py-[5px] rounded-[8px] flex justify-center items-center'>
        20$
    </div>
    <div className='bg-[#E7EFF4] h-[40px] w-[108px] px-[24px] py-[5px] rounded-[8px] flex justify-center items-center'>
        1$
    </div>
    <div className='bg-[#E7EFF4] h-[40px] w-[108px] px-[24px] py-[5px] rounded-[8px] flex justify-center items-center'>
        10$
    </div>
    <div className='bg-[#E7EFF4] h-[40px] w-[108px] px-[24px] py-[5px] rounded-[8px] flex justify-center items-center'>
        20$
    </div>
  </div>

  <div className='flex gap-[8px] items-center'>
    <Checkbox className='bg-[#DBDBDB] rounded-[8px] w-[26px] h-[26px]'/>
    <p className='text-[#000] font-[400] text-[14px]'>Donate as anonymous </p>

  </div>
    </div>

  </div>
            </div>

            <div className="bg-[#fff] rounded-tr-[8px] h-[87px] flex justify-center items-center p-[10px] drop-shadow-[0px_0px_16px_rgba(235,235,235,1)]">
    {/* <Link href='/donate'> */}
    <Button
          className="bg-[#669640] text-[#fff] font-[900] text-[16px] uppercase rounded-[8px] w-full px-[16px] py-[14px] h-[48px] flex justify-center items-center"
         
        >
       Next
        </Button>
    {/* </Link> */}
      </div>




    </div>      
    </div>
  )
}

export default Donate

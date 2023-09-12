'use client'
import React, { useState } from 'react'
import HomeUrgentNav from '../../../components/HomeUrgentNav'
import { Button, Checkbox, Input } from 'antd'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import UserModal from '../../../components/UserModal'

const Donate = () => {
const searchParams = useSearchParams();
const project_id =parseInt(searchParams.get('projectId'));
const [userModal, setUserModal] = useState(false);
console.log(userModal ,'userModal');
  const [amount, setAmount] = useState(0)
  const amountItems = [
    {
      id:1,
amount:'1$'
    },
    {
      id:1,
amount:'10$'
    }
    ,
    {
      id:1,
amount:'20$'
    },
    {
      id:1,
amount:'100$'
    },
    {
      id:1,
amount:'150$'
    },
    {
      id:1,
amount:'200$'
    },  {
      id:1,
amount:'400$'
    },  {
      id:1,
amount:'600$'
    },
    {
      id:1,
amount:'1000$'
    }
  ]
  const handleAmountPay = (e) =>{
    setAmount(e.target.value);
  }

  const postPayRequest = async() =>{
    try {
      const res = await axios.post('https://sakha.danatportal.com/api/donations',{
      amount: parseInt(amount),
       project_id
      });
    } catch (error) {
      console.log(error,'error');
    }
  }
  return (
    <div className='min-h-screen bg-[#F8F8F8]'>
        <div className='flex flex-col min-h-screen justify-between'>
            <div className='p-[16px] flex flex-col gap-[8px]'>
            <HomeUrgentNav title="Donate" />
  <div className='flex flex-col gap-y-[16px]'>
    <div className='bg-[#E7EFF4] border border-[#0062A0] h-[118px] flex flex-col gap-y-[8px] justify-center items-center px-[16px] py-[14px] rounded-[8px]'>
    <p className='text-[14px] font-[500] text-[#000]'>Amount to give - USD</p>
    <div className='flex justify-between items-center'>
    <Input value={amount} onChange={(e)=>handleAmountPay(e)} autoFocus className='text-[#0062A0] font-[800] text-[20px] border-b-[#0062A0] bg-transparent border-t-0 border-r-0 border-l-0 rounded-none'  />
        <span className='text-[#0062A0] font-[800] text-[20px]'>$</span>

    </div>
    </div>

    <div className='flex flex-col gap-y-[16px]'>
    <div className="flex flex-col gap-y-[5.5px] ">

      
      <div className='flex justify-between gap-[5.5px] flex-wrap'>
  {
    amountItems.map((item)=>{
      return (
        <div onClick={()=>setAmount(item.amount)} className='bg-[#E7EFF4] h-[40px] w-[108px] px-[24px] py-[5px] rounded-[8px] flex justify-center items-center'>
            {item.amount}
        </div>
     
      
    
      )
    })

  }

  
  </div>
      



  <div className='flex gap-[8px] items-center'>
    <Checkbox className='bg-[#DBDBDB] rounded-[8px] w-[26px] h-[26px]'/>
    <p className='text-[#000] font-[400] text-[14px]'>Donate as anonymous </p>

  </div>
    </div>

  </div>
            

            <div className="bg-[#fff] rounded-tr-[8px] h-[87px] flex justify-center items-center p-[10px] drop-shadow-[0px_0px_16px_rgba(235,235,235,1)]">
    <Button
          className="bg-[#669640] text-[#fff] font-[900] text-[16px] uppercase rounded-[8px] w-full px-[16px] py-[14px] h-[48px] flex justify-center items-center"
         onClick={postPayRequest}
        >
      Pay
        </Button>
      </div>


      <Button type="primary" onClick={()=>setUserModal(true)} >
        Open Modal
      </Button>

    </div>      
    </div>
    </div>
    {
  userModal && <UserModal userModal={userModal} setUserModal={setUserModal}/>
}
    </div>
  )
}

export default Donate

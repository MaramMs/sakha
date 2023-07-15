import React from 'react'

const Categories = () => {
    const items = [{
        id:1,
        img:'/images/all.svg',
        name:'All',
    },{
        id:2,
        img:'/images/all.svg',
        name:'All', 
    },{
        id:3,
        img:'/images/all.svg',
        name:'All',   
    }
]
  return (
    <div className='flex items-center gap-[8px]'>
        {
            items.map((item) => {
                return (
                    <div className='flex bg-[#669640] gap-[4px] px-[16px] py-[14px] w-[78px] justify-center items-center h-[36px] rounded-[20px] categories'>
                       <div className='flex gap-[10px] items-center'>
                       <img  src={item.img}/>
                        <p className='text-[#fff] text-[14px] font-[400]'>{item.name}</p>
                       </div>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Categories

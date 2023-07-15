import { Card, Progress } from 'antd'
import React from 'react'

const CategoryCard = () => {
  return (
    <Card
    style={{
      width: 245,
      backgroundColor:'#fff',
      borderRadius:'8px',
      display:'flex',
      flexDirection:'column',
      gap:'8px',
      padding:'0px 0px 8px 0px'
    }}
    cover={
      <img
        alt="example"
        src="/images/img1.svg"
      />
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    {/* <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    /> */}

    <div className='flex gap-[16px] h-[118px] flex-col'>
    <h3 className='font-[500] text-[14px] text-[#000]'>Help Orphanage Children to thrive, ..</h3>
    <div className='flex flex-col gap-[8px]'>
        <p className='text-[12px] font-[300] text-[#4D4D4D]'> <span className='font-[900] text-[#669640]'>$2,379</span> fund raised from <span className='font-[900] text-[#669640]'>$4,200</span></p>
        <Progress percent={50} showInfo={false} />
        <p className='text-[12px] font-[300] text-[#4D4D4D]'> <span className='font-[900] text-[#669640]'>$2,379</span> fund raised from <span className='font-[900] text-[#669640]'>$4,200</span></p>

    </div>
    </div>
  </Card>
  )
}

export default CategoryCard

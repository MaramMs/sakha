import { Button, Input, Modal } from 'antd'
import React, { useState } from 'react'

const UserModal = ({userModal,setUserModal}) => {
    const [loading, setLoading] = useState(false);

    const handleOk = () => {
        setLoading(true);
        setTimeout( async() => {
          try {
            const res = await axios.post('https://sakha.danatportal.com/api/donations',{
            amount: parseInt(amount),
             project_id
            });
          } catch (error) {
            console.log(error,'error');
          }
          setLoading(false);
          setUserModal(false);
        }, 3000);
      };

    
      const handleCancel = () => {
        setUserModal(false);
      };
  return (
    <Modal title="User Info" open={userModal} onOk={handleOk} onCancel={handleCancel}
    
    footer={[
        <Button key="back" onClick={handleCancel} >
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleOk} className='bg-[#669640]'>
          Save
        </Button>
      
      ]}
    >
       <Input placeholder='Name'   style={{marginBottom:'10px'}}/>
       <Input placeholder='Email'  style={{marginBottom:'10px'}}/>
       <Input placeholder='Phone'  style={{marginBottom:'10px'}}/>
      
      </Modal>
  )
}

export default UserModal

'use client'
import { UserContext } from '@/contexts/UserContext'
import Image from 'next/image';
import React, { useContext } from 'react'

const myProfile = () => {
    const {userInfo} = useContext(UserContext);
    console.log(userInfo , 'user Info');
  return (
    <div>
      my profile

      <Image src={userInfo.profile_photo_url} width={100} height={100}/>
    </div>
  )
}

export default myProfile

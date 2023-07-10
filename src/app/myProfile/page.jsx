'use client'
import { UserContext } from '@/contexts/UserContext'
import React, { useContext } from 'react'

const myProfile = () => {
    const {userInfo} = useContext(UserContext);
    console.log(userInfo , 'user Info');
  return (
    <div>
      my profile
    </div>
  )
}

export default myProfile

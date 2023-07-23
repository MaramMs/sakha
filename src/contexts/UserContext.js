"use client";
const { createContext, useState, useEffect } = require("react");

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
    gender: "",
    country_id: "",
    city_id: "",
    otp:'',
    photo:''
  
  });
  const [userInfo ,setUserInfo] = useState({});
  const [interestCategories , setInterestCategories] = useState([])
  return (
    <UserContext.Provider value={{ user, setUser,setUserInfo ,userInfo,setInterestCategories,interestCategories}}>
      {children}
    </UserContext.Provider>
  );
}

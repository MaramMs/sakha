"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

const { createContext, useState, useEffect } = require("react");

export const ProjectByCategoryIdContext = createContext();

export function ProjectByCategoryIdProvider({ children }) {
  const router = useRouter();
  console.log('context');

  const [projectByCategoryId, setProjectByCategoryId] = useState([]);
  const [projectData,setProjectData] = useState({});

  const getDetailsProject = async (id) =>{
    console.log('dTA OUT');
    try {
      const res = await axios.get(`https://sakha.danatportal.com/api/project/${id}`);
      console.log('data');
      console.log(res.data.data , ' res from details project context ');
      setProjectData(res.data.data);
      router.push(`/casedetails?id=${id}`); // Pass 'id' as a query parameter
    } catch (error) {
      
    }
  }
  return (
    <ProjectByCategoryIdContext.Provider value={{projectByCategoryId, setProjectByCategoryId,getDetailsProject,projectData}}>
      {children}
    </ProjectByCategoryIdContext.Provider>
  );
}

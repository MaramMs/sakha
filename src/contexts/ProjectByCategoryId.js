"use client";
const { createContext, useState, useEffect } = require("react");

export const ProjectByCategoryIdContext = createContext();

export function ProjectByCategoryIdProvider({ children }) {
  const [projectByCategoryId, setProjectByCategoryId] = useState([]);
  return (
    <ProjectByCategoryIdContext.Provider value={{projectByCategoryId, setProjectByCategoryId}}>
      {children}
    </ProjectByCategoryIdContext.Provider>
  );
}

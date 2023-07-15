import React from "react";

const HomeUrgentNav = ({ title }) => {
  return (
    <div className="flex justify-between">
      <h2 className="text-[#000] font-[900] text-[18px]">{title}</h2>
      <div className="flex items-center gap-[4px]">
        <span className="text-[#4D4D4D] font-[500] text-[14px]">See All</span>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M0.710526 5.34067L9.18853 5.34067C9.58074 5.34067 9.89905 5.65898 9.89905 6.05119C9.89905 6.4434 9.58074 6.76172 9.18853 6.76172L0.710526 6.76172C0.318316 6.76172 0 6.4434 0 6.05119C0 5.65898 0.318316 5.34067 0.710526 5.34067" fill="#4D4D4D"/>
<mask
  id="mask0_1452_2945"
  maskType="luminance"
  maskUnits="userSpaceOnUse"
  x="8"
  y="0"
  width="10"
  height="12"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M8.47852 11.5V0.603602H17.418V11.5H8.47852Z"
    fill="white"
  />
</mask>
<g mask="url(#mask0_1452_2945)">
<path d="M9.18904 0.603318C9.32167 0.603318 9.45241 0.640265 9.56799 0.712265L17.0863 5.45005C17.2928 5.58079 17.4188 5.80721 17.4188 6.05163C17.4188 6.29605 17.2928 6.52248 17.0863 6.65321L9.56799 11.391C9.34915 11.5284 9.07252 11.5369 8.84609 11.4109C8.61873 11.2858 8.47852 11.0481 8.47852 10.7894V1.31384C8.47852 1.05521 8.61873 0.817423 8.84609 0.69237C8.95315 0.632686 9.07157 0.603318 9.18904 0.603318" fill="#4D4D4D"/>
</g>
</svg>

      </div>
    </div>
  );
};

export default HomeUrgentNav;

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const HomeUrgentNav = ({title,url}) => {
  console.log(url, 'url');
  const pages = ['/','/caseDetails' , '/urgentFundraising'];
  const router = useRouter();
  console.log(router , 'path');
const handlePrevPage = () =>{
router.back()
}
  return (
    <div className="flex justify-between">
    
<div className="flex items-center gap-[8px]">
  {/* {
    <Link href={url} className="">

    </Link>
  } */}
  <div className="w-[40px] h-[40px] rounded-[8px] p-[8px] bg-[#fff]">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handlePrevPage()}>
<path opacity="0.4" d="M15.7975 10.8096L19.4967 10.4824C20.3269 10.4824 21 11.1621 21 12.0003C21 12.8386 20.3269 13.5182 19.4967 13.5182L15.7975 13.1911C15.1463 13.1911 14.6183 12.6579 14.6183 12.0003C14.6183 11.3416 15.1463 10.8096 15.7975 10.8096Z" fill="#4D4D4D"/>
<path d="M3.37534 10.8698C3.43316 10.8115 3.64915 10.5647 3.85206 10.3598C5.03568 9.07656 8.12619 6.97815 9.7429 6.33596C9.98835 6.23352 10.6091 6.01542 10.9418 6C11.2592 6 11.5625 6.0738 11.8516 6.2192C12.2127 6.42299 12.5007 6.74463 12.66 7.12355C12.7614 7.38572 12.9207 8.17331 12.9207 8.18763C13.0789 9.04792 13.165 10.4469 13.165 11.9934C13.165 13.465 13.0789 14.8067 12.949 15.6813C12.9349 15.6967 12.7756 16.6738 12.6021 17.0086C12.2847 17.6211 11.664 18 10.9996 18H10.9418C10.5087 17.9857 9.5989 17.6057 9.5989 17.5924C8.06837 16.9502 5.05096 14.9532 3.83788 13.6258C3.83788 13.6258 3.49534 13.2844 3.34698 13.0718C3.11571 12.7656 3.00007 12.3866 3.00007 12.0077C3.00007 11.5847 3.12989 11.1915 3.37534 10.8698Z" fill="#4D4D4D"/>
</svg>

  </div>
<h2 className="text-[#000] font-[900] text-[18px]">{title}</h2>

  </div>    {
      url && (  <div className="flex items-center gap-[4px]">
      <Link href={url}>
      
      <span className="text-[#4D4D4D] font-[500] text-[14px]">See All</span>
      </Link>
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

    </div>)
    }
    </div>
  );
};

export default HomeUrgentNav;

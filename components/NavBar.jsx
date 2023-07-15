import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-[#fff] h-[84px] pt-[16px]  pb-[24px] px-[20px] drop-shadow-[0_-2px_4px_rgba(0,0,0,0.05)] rounded-t-[18px] rounded-r-[8px] navBottom'>
      <div className='flex justify-between h-[40px] items-center'>
        <Link href='/'>
         <Image  src={'/images/home-icon.svg'} width={40} height={40}/>
        </Link>

        <Link href='/'>
         <Image  src={'/images/calculator-icon.svg'} width={40} height={40}/>
        </Link>


        <Link href='/'>
         <Image  src={'/images/bookmark-icon.svg'} width={40} height={40}/>
        </Link>
        <Link href='/'>
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6673 10.6156C16.8759 9.69149 16.5163 8.89065 16.5163 7.53009V7.06748C16.5163 5.2945 16.1083 4.15216 15.2211 3.00981C13.8537 1.23575 11.5517 0.166504 9.29824 0.166504H9.20241C6.99629 0.166504 4.76648 1.18665 3.3754 2.88871C2.43977 4.05396 1.98433 5.2454 1.98433 7.06748V7.53009C1.98433 8.89065 1.6484 9.69149 0.833354 10.6156C0.233642 11.2964 0.0419922 12.1715 0.0419922 13.1185C0.0419922 14.0667 0.353154 14.9646 0.97763 15.6945C1.79268 16.5695 2.94365 17.1282 4.11939 17.2253C5.82163 17.4195 7.52386 17.4926 9.25086 17.4926C10.9768 17.4926 12.679 17.3704 14.3823 17.2253C15.557 17.1282 16.708 16.5695 17.523 15.6945C18.1464 14.9646 18.4587 14.0667 18.4587 13.1185C18.4587 12.1715 18.267 11.2964 17.6673 10.6156Z" fill="#828282"/>
</svg>

        </Link>
        <Link href='/'>
         <Image  src={'/images/profile-icon.svg'} width={40} height={40}/>
        </Link>
      </div>
    </div>
  )
}

export default NavBar

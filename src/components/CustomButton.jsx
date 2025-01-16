import React from 'react'

const CustomButton = ({btnType, style, handleClick, title}) => {
  return (
    <button className={`rounded-[10px] py-2 px-8 font-epilogue text-[16px] font-semibold leading-[26px] text-white ${style}`}
    type={btnType}
    onClick={handleClick}
    >{title}</button>
  )
}

export default CustomButton
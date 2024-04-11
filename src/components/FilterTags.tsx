import React from 'react'
import { cn } from '../utils/cn'

const FilterTags = ({ text, isActive }: { text: string, isActive: boolean }) => {
    return (
        <div className={cn(`w-fit border ${isActive ? "border-[#4C82EF] bg-[#F6F9FF]" : "border-transparent bg-[#F4F4F4]"} px-2 py-[.125rem] rounded-md`)}>
            <h1
                className={cn(`${isActive ? "text-[#4C82EF]" : "text-[#737373]"} text-sm text-nowrap capitalize flex items-center`
                )}>
                {text}
                {
                    isActive ? <img src="/images/check-square-active.svg" className='ml-2' alt="" /> : <img src="/images/check-square-2.svg" className='ml-2' alt="" />
                }
            </h1>
        </div >
    )
}

export default FilterTags
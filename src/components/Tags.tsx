import React from 'react'

const Tags = ({ text }: { text: string }) => {
    return (
        <div className='w-fit border border-[#4C82EF] bg-[#F2F7FF] px-3 py-1 rounded-md'>
            <h1 className='text-[#4C82EF] text-sm text-nowrap capitalize tracking-tighter'>{text}</h1>
        </div>
    )
}

export default Tags
import React, { useState } from 'react'
import { filterTags, popularTags } from '../constants'
import Tags from './Tags'
import FilterTags from './FilterTags'

const ChatBot = () => {
    const [active, setActive] = useState<number>(0);
    return (
        <div className='w-[360px] rounded-3xl p-2 bg-white text-[#333333] overflow-y-auto'>
            <header className='flex justify-between items-center gap-4 rounded-t-3xl bg-[#EFF3FD] text-[#4C82EF] px-4 py-3'>
                <div className='flex items-center gap-2 w-full'>
                    <img src="/images/bot.svg" alt="" />
                    <div className='w-full'>
                        <div className='flex items-center gap-3'>
                            <h1 className='text-lg font-semibold leading-7'>Timpu</h1>
                            <img src="/images/Vector.svg" alt="" />
                        </div>
                        <div className='flex items-center justify-between w-full'>
                            <h2 className='text-sm'>Chat assistant</h2>
                            <div className='flex items-center gap-1'>
                                <img src="/images/Ellipse 25.svg" alt="" className='' />
                                <h3 className='text-sm'>Online</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
            <main className=' pt-10 pb-8 px-4 h-[calc(100vh-180px)] overflow-y-scroll no-scrollbar'>
                <div className='flex flex-col'>
                    <div className='bg-gradient-to-r from-[#E5EEFF] to-[#E5EEFF66] w-[230px] py-2 px-3 pr-5 rounded-2xl '>
                        <p className='text-sm'>Hi Sam! I am your personal shopping assistant , how can i help you today ?</p>
                    </div>
                    <p className='text-[10px] ml-2 pt-1'>4:45 PM</p>

                    <div className='bg-[#DCF7C5] w-[215px] rounded-2xl px-4 text-sm py-2 mt-6 self-end'><p className=''>I am looking for a hand bag, with long strap .</p>
                    </div>
                    <p className='text-[10px] pr-3 pt-1 text-end'>4:46 PM</p>
                </div>

                <h1 className='text-[#949494] text-sm mt-5'>Popular tags for handbag</h1>

                <div className='flex items-center justify-between'>
                    <div className='overflow-x-scroll no-scrollbar mt-2 max-sm:w-[290px]'>
                        <div className='flex items-center gap-2'>
                            {
                                popularTags.map((text, i) => (
                                    <Tags text={text} key={i} />
                                ))
                            }
                        </div>
                    </div>
                    <img src="/images/arrow.svg" alt="" className='mt-2' />
                </div>

                <div className='bg-gradient-to-r from-[#E5EEFF] to-[#E5EEFF66] w-[240px] py-2 px-2 rounded-2xl mt-5 '>
                    <div className='bg-white flex items-center justify-between p-2 rounded-2xl gap-2'>
                        <img src="/images/bag.svg" alt="" />

                        <div>
                            <div className='flex items-center gap-2 '>
                                <h1 className='font-semibold text-sm text-nowrap'>Bags on Timpu</h1>
                                <img src="/images/Vector.svg" alt="" />
                            </div>
                            <p className='flex text-sm items-center gap-5 text-[#949494] mt-3'>
                                1123 Prducts
                                <span><img src="/images/rightArrow.svg" alt="" /></span>
                            </p>

                        </div>
                    </div>
                    <p className='text-sm pt-2'>
                        Or set filter and help us choose the best bag for you.
                    </p>
                </div>
                <p className='text-[10px] ml-2 pt-1 '>4:48 PM</p>

                <div className='flex items-center justify-between pt-3 pb-2'>
                    <h1 className='text-[#949494] text-sm'>Select filters</h1>
                    <div className='flex items-center'>
                        <img src="/images/filter.svg" alt="" />
                        <span className='text-sm text-[#666666]'>Filter</span>
                    </div>
                </div>
                <div className='flex items-center gap-2 flex-wrap gap-y-3 mt-1'>
                    {
                        filterTags.map((text, i) => {
                            let isActive = active === i
                            return <button onClick={() => setActive(i)}>
                                <FilterTags text={text} key={i} isActive={isActive} />
                            </button>
                        }
                        )
                    }
                </div>
            </main>
            <footer className='bg-[#EFF3FD] text-[#4C82EF] px-2 pt-1 rounded-b-3xl'>
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center justify-between py-1.5 px-1 rounded-lg  bg-white w-[80%]'>
                        <input type="text" className='outline-none text-sm text-black placeholder:text-sm px-3' placeholder='Type your message' />
                        <img src="/images/clip.svg" alt="" className='w-4 mr-1.5 cursor-pointer' />
                    </div>
                    <button className='px-6 py-2.5 bg-[#4C82EF] rounded-lg'>
                        <img src="/images/btnArrow.svg" className='w-3' alt="" />
                    </button>
                </div>
                <div className='flex items-center justify-center gap-1 text-sm pt-2 pb-1'>
                    <h1> <span className='text-[#B1B1B1]'>Powered by</span> <span className='text-[#7A7F8C] font-semibold'>
                        Krunk.ai</span> </h1>
                    <img src="/images/Logo.svg" alt="" className='w-4' />
                </div>
            </footer>
        </div>
    )
}

export default ChatBot
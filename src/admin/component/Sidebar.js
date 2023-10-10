import React from 'react'

const Sidebar = () => {
    return (
        <section className='px-1'>
            <div className='grid grid-cols-12 h-screen'>
                <div className='col-span-2 bg-[#391484] px-5'>
                    <div>
                        <div className='text-white pt-5'>
                            <div className='border border-white w-[225px] h-[230px] rounded-full'></div>
                            <p className='font-bold text-2xl font-primary tracking-wider leading-10 mt-7'>Hello,Admin</p>
                        </div>
                        <div className='mt-20 text-white'>
                            <div className='flex items-center space-x-16'>
                                <span className='text-3xl font-bold'>1</span>
                                <p className='font-bold text-3xl font-primary leading-6'>Customers</p>
                            </div>
                            <div className='flex items-center pt-5 space-x-16'>
                                <span className='text-3xl font-bold'>2</span>
                                <p className='font-bold text-3xl font-primary leading-6'>Category</p>
                            </div>
                            <div className='flex items-center pt-5 space-x-16'>
                                <span className='text-3xl font-bold'>3</span>
                                <p className='font-bold text-3xl font-primary leading-6'>Products</p>
                            </div>
                        </div>
                        <div className='border border-white mt-60'></div>
                    </div>
                </div>
                <div className='col-span-10'>
                    <div className='border border-black'>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sidebar

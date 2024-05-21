import React from 'react'

const Footer = () => {
    return (
        <div className='py-16 px-4 text-center bg-[#222222]'>
            <div className='flex flex-col justify-center items-center text-white'>
                <img src="/images/footer-logo.png" className='w-[146px] h-[35px] object-contain' alt="" />
                <p className='font-bold pt-12 text-[#ddd] diffFont'>2024 Copyrights - <span className='text-[#E6196E]'>Argencis</span> - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
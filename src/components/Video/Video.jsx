import React from 'react'

const Video = () => {
  return (
    <div className='bg-gray-50 py-10'>
      <div className='text-center'>
        <h2 className='text-[#444444] text-4xl font-bold pt-12 pb-8'>Brands</h2>
        <p className='text-[#777777] diffFont text-md mb-20'>Proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus </p>
      </div>
      <div className='flex flex-wrap justify-around container gap-8 *:mb-5'>
        <img src="/images/brands/brands.png" alt="" />
        <img src="/images/brands/brands.png" alt="" />
        <img src="/images/brands/brands.png" alt="" />
        <img src="/images/brands/brands.png" alt="" />
      </div>
    </div>
  )
}

export default Video
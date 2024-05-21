import React from 'react'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <div className="bg-gray-400 inline-block w-[100%] py-40" style={{ backgroundImage: "url(/images/hero.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className="text-white text-center rounded-xl">
                <h2 className='text-[#EE3364] diffFont text-xl'>Welcome to Creative Studio</h2>
                <h1 className='text-[#fff] text-4xl md:text-6xl font-[500] pb-12 py-24 mb-12'>Make your life simpler <br /> with Truelander</h1>
                <Button
                    className="font-source-sans bg-[#EE3364] text-white px-12 py-3 rounded text-lg font-bold"
                    title="Read More" />
            </div>
        </div>
    )
}

export default Hero

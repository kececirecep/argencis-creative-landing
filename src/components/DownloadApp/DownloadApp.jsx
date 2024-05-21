import React from 'react'
import Button from '../Button/Button'

const DownloadApp = () => {
    return (
        <div className='bg-gray-50 py-36 p-2'>
            <div className='flex flex-col md:flex-row items-center gap-12 container mx-auto'>
                <div className='w-full'>
                    <img src="/images/download-app.png" className='w-full object-cover' alt="" />
                </div>
                <div>
                    <h2 className='text-[#444444] text-4xl font-bold'>Download the App for free</h2>
                    <p className='text-[#777777] text-lg font-[400] diffFont py-12'>Proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh vamus suscipit tortor eget felis porttitor volutpat Vivamus suscipit scout tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                    <div className='flex items-center gap-4'>
                        <Button
                            className="font-source-sans bg-[#EE3364] text-white px-8 py-3 rounded text-lg font-bold"
                            title="App Store" />
                        <Button
                            status={false}
                            className="font-source-sans bg-transparent border border-[#EE3364] text-[#777] px-8 py-3 rounded text-lg font-bold"
                            title="Play Store" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp
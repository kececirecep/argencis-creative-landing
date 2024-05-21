import React from 'react'

const About = () => {
    const stats = [
        {
            count: 2140,
            title: "Happy Clients"
        }, {
            count: 1745,
            title: "Cup of Coffee"
        }, {
            count: 18,
            title: "Awards"
        }, {
            count: 1890,
            title: "Completed"
        },
    ]
    return (
        <div className='bg-gray-50 py-12 md:py-36 p-2'>
            <div className='flex flex-col md:flex-row items-center gap-12 container mx-auto'>
                <div>
                    <h2 className='text-[#444444] text-4xl font-bold'>We are Creative Studio</h2>
                    <p className='text-[#777777] text-lg font-[400] diffFont py-12'>Proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh vamus suscipit tortor eget felis porttitor volutpat Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                    <div className="flex items-center gap-4 justify-between">
                        {
                            stats.map((item, index) => {
                                return (
                                    <div key={index} className='text-center'>
                                        <span className='text-[#EE3364] text-2xl font-[500]'>{item.count}</span>
                                        <h6 className='text-[#333333] text-sm diffFont'>{item.title}</h6>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <img src="/images/about.jpg" className='w-[550px] h-[350px] object-cover' alt="" />
            </div>
        </div>
    )
}

export default About
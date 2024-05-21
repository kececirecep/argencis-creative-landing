import React from 'react'
import { GoRocket } from "react-icons/go";
import ServiceBox from './ServiceBox';

const Services = () => {
    const servicesData = [
        {
            icon: <GoRocket size="32px" />,
            title: "1 Awesome Features",
            desc: "It is a long established fact that a that reader will be discon by the readable this possible content."
        }, {
            icon: <GoRocket size="32px" />,
            title: "2 Awesome Features",
            desc: "It is a long established fact that a that reader will be discon by the readable this possible content."
        }, {
            icon: <GoRocket size="32px" />,
            title: "3 Awesome Features",
            desc: "It is a long established fact that a that reader will be discon by the readable this possible content."
        }, {
            icon: <GoRocket size="32px" />,
            title: "4 Awesome Features",
            desc: "It is a long established fact that a that reader will be discon by the readable this possible content."
        }, {
            icon: <GoRocket size="32px" />,
            title: "5 Awesome Features",
            desc: "It is a long established fact that a that reader will be discon by the readable this possible content."
        }, {
            icon: <GoRocket size="32px" />,
            title: "6 Awesome Features",
            desc: "It is a long established fact that a that reader will be discon by the readable this possible content."
        },
    ]

    const serviceFirstThree = servicesData.slice(0, 3)
    const serviceLastThree = servicesData.slice(3, 6)

    return (
        <div className='py-28 container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-24 mb-16'>
                {
                    serviceFirstThree.map((item, index) => {
                        return (
                            <ServiceBox key={index} icon={item.icon} title={item.title} desc={item.desc} />
                        )
                    })
                }
            </div>
            <div className=''>
                <img src="/images/services.png" className='w-full object-contain hidden md:block' alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-24 mt-0 md:mt-8'>
                {
                    serviceLastThree.map((item, index) => {
                        return (
                            <ServiceBox key={index} icon={item.icon} title={item.title} desc={item.desc} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services
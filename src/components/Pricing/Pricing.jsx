import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const Pricing = () => {
    const pricingData = [
        {
            planTitle: "Basic",
            price: 222,
            plan: "Per Month",
            desc: [
                { title: "Live Support" },
                { title: "Free Update" },
                { title: "Free Custom Service" },
                { title: "Free Installation" },
                { title: "Unlimited Feature Access" },
            ],
            btnTitle: "Signup",
            status: false
        }, {
            planTitle: "Standard",
            price: 222,
            plan: "Per Month",
            desc: [
                { title: "Live Support" },
                { title: "Free Update" },
                { title: "Free Custom Service" },
                { title: "Free Installation" },
                { title: "Unlimited Feature Access" },
            ],
            btnTitle: "Signup",
            status: true
        }, {
            planTitle: "Premium",
            price: 222,
            plan: "Per Month",
            desc: [
                { title: "Live Support" },
                { title: "Free Update" },
                { title: "Free Custom Service" },
                { title: "Free Installation" },
                { title: "Unlimited Feature Access" },
            ],
            btnTitle: "Signup",
            status: false
        },
    ]
    return (
        <div className='py-16'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='text-[#444444] text-4xl font-bold py-12'>Pricing Plans</h2>
                    <p className='text-[#777777] diffFont text-md mb-20'>Proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        pricingData.map((item, index) => {
                            return (
                                <div key={index} className={`text-center p-8 shadow rounded-lg pb-8 ${item.status ? "border border-[#EE3364]" : "border border-transparent"} `}>
                                    <div className='border-b border-gray-300'>
                                        <h2 className='pb-4 text-[#EE3364] text-lg font-[500]'>{item.planTitle}</h2>
                                        <span className='text-[#333] text-5xl pt-4'>${item.price}</span>
                                        <p className='diffFont text-[#777] text-sm py-4 pb-6'>{item.plan}</p>
                                    </div>
                                    <ul className='diffFont text-[#333] text-base py-12 '>
                                        {item.desc.map((descItem, descIndex) => (
                                            <li className='py-2' key={descIndex}>{descItem.title}</li>
                                        ))}
                                    </ul>
                                    <Button
                                        link={item.link}
                                        className={`font-source-sans bg-[#EE3364]  text-base rounded-full px-12 py-3 ${item.status ? "bg-[#EE3364] text-[#ffffff]" : "bg-[#fff] text-[#EE3364] border border-[#EE3364]"}`}
                                        title="Signup" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Pricing
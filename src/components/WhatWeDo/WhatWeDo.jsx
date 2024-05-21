import React, { useState } from 'react';
import { IoCameraOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';

const WhatWeDo = () => {
    const [activeTab, setActiveTab] = useState(0);

    const whatDo = [
        {
            icon: <IoCameraOutline />,
            title: "Photo Retouching",
            subTitle: "Photo Retouching",
            desc: "Proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh vamus suscipit tortor eget felis porttitor volutpat Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh porttitor volutpat Vivamus suscipit tortor eget felis.",
            link: "#",
            linkTitle: "Read More"
        },
        {
            icon: <IoPhonePortraitOutline />,
            title: "App Design",
            subTitle: "App Design",
            desc: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos rem saepe necessitatibus, ipsum ea praesentium alias nostrum vero dolor illum dolores neque dolorem. Corporis nulla qui consequatur totam!",
            link: "#",
            linkTitle: "Read More"
        },
        {
            icon: <IoGameControllerOutline />,
            title: "Game Design",
            subTitle: "Game Design",
            desc: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos rem saepe necessitatibus, ipsum ea praesentium alias nostrum vero dolor illum dolores neque dolorem. Corporis nulla qui consequatur totam!",
            link: "#",
            linkTitle: "Read More"
        },
        {
            icon: <GoLightBulb />,
            title: "Creative Ideas",
            subTitle: "Creative Ideas",
            desc: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos rem saepe necessitatibus, ipsum ea praesentium alias nostrum vero dolor illum dolores neque dolorem. Corporis nulla qui consequatur totam!",
            link: "#",
            linkTitle: "Read More"
        }
    ];

    const toggleTab = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='py-28'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='text-[#444444] text-4xl font-bold py-12'>What We Do</h2>
                    <p className='text-[#777777] diffFont text-md mb-20'>Proin eget tortor risus cras ultricies ligula sed magna dictum porta sed porttitor lectus nibh vamus suscipit tortor eget felis porttitor volutpa</p>
                </div>
                <div className="grid grid-cols-2 text-center lg:grid-cols-4 bg-[#f5f5f5] shadow">
                    {whatDo.map((item, index) => (
                        <div key={index} style={{ borderRight: "1px solid #dddddd" }}>
                            <div className={`flex flex-col items-center justify-center p-5 px-2 md:p-12 cursor-pointer ${activeTab === index ? 'bg-gray-200 border-t-4 border-[#EE3364]' : ' border-t-2 border-transparent'}`} onClick={() => toggleTab(index)}>
                                <span className='text-[#EE3364] text-4xl text-center py-6'>{item.icon}</span>
                                <h2 className='text-lg text-[#333333]'>{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                {whatDo.map((item, index) => (
                    <div key={index} className={`p-4 pt-24 ${activeTab === index ? '' : 'hidden'}`}>
                        <p className='text-[#444444] text-2xl'>{item.subTitle}</p>
                        <p className='text-[#777777] text-lg pt-8 mb-12'>{item.desc}</p>
                        <Button
                            link={item.link}
                            className="font-source-sans bg-[#EE3364] text-[#ffffff] text-base rounded-lg px-6 py-3"
                            title="Read More" />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default WhatWeDo;

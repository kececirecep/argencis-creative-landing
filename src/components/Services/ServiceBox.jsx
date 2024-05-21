import React from 'react'
import { GoRocket } from "react-icons/go";

const ServiceBox = (props) => {
    return (
        <div key={props.key}>
            <span className='text-[#F04E78]'>{props.icon}</span>
            <h2 className='text-[#242424] text-xl font-[400] py-4'>{props.title}</h2>
            <p className='text-[#777777] diffFont text-md'>{props.desc}</p>
        </div>
    )
}

export default ServiceBox
import React from "react";
import './style.scss'

const OutsideLink = ({pathname = '/', text, image = require('../../assets/icons/github.png')}) => {
    return (
        <a href={pathname} target={"_blank"} className={'file'}>
            <img alt={'folder'} src={image} className={'icon'} />
            <p>{text}</p>
        </a>
    )
}

export default OutsideLink
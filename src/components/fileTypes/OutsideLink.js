import React from "react";
import './style.scss'

const OutsideLink = ({imageStyle, pathname = '/', text, image = require('../../assets/icons/github.png')}) => {
    return (
        <a href={pathname} rel="noopener noreferrer" target={"_blank"} className={'file'}>
            <img style={imageStyle} alt={'folder'} src={image} className={'icon'} />
            <p>{text}</p>
        </a>
    )
}

export default OutsideLink
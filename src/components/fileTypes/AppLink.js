import React from "react";
import './style.scss'

const AppLink = ({imageStyle, pathname = '/', image = require('../../assets/icons/github.png')}) => {
    return (
        <a href={pathname} rel="noopener noreferrer" target={"_blank"} className={'app'}>
            <img style={imageStyle} alt={'folder'} src={image} className={'icon'} />
        </a>
    )
}

export default AppLink
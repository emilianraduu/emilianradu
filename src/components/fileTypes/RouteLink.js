import React from "react";
import {Link} from "react-router-dom";
import './style.scss'

const RouteLink = ({pathname = '/', text, image = require('../../assets/icons/new-folder.png')}) => {
    return (
        <Link to={{pathname}} className={'file'}>
            <img alt={'folder'} src={image} className={'icon'} />
            <p>{text}</p>
        </Link>
    )
}

export default RouteLink
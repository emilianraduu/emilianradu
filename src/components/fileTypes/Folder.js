import React from "react";
import {Link} from "react-router-dom";
import './style.scss'
const image = require('../../assets/icons/folder.png')
const Folder = ({pathname = '/', text}) => {
    return (
        <Link to={{pathname}} className={'file'}>
            <img src={image} className={'icon'} />
            <p>{text}</p>
        </Link>
    )
}

export default Folder
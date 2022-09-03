import React from "react";
import './style.scss'

const image = require('../../assets/icons/pdf.png')
const Pdf = ({link = '/', text}) => {
    const onClick = () => {
        window.open(link);
    }
    return (
        <div onClick={onClick} className={'file'}>
            <img alt={'pdf'} src={image} className={'icon'}/>
            <p>{text}</p>
        </div>
    )
}

export default Pdf
import React from "react";
import {useNavigate} from "react-router-dom";
import './back.scss'
const icon = require('../../assets/icons/back.png')

const Back = ({history}) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(-1)
    }
    return (
        <div onClick={onClick} className={'back'}>
            <img alt={'back'} src={icon} className={'backIcon'} />
        </div>
    )
}

export default Back